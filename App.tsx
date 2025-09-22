
import React, { useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { ref, get, set } from "firebase/database";
import { auth, db } from './services/firebase';
import type { UserProfile, Answers } from './types';
import { getCareerAdvice } from './services/aiService';
import Auth from './components/Auth';
import ProfileForm from './components/ProfileForm';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

type AppState = 'loading' | 'auth' | 'profile' | 'quiz' | 'generating' | 'results';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('loading');
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [finalAnswers, setFinalAnswers] = useState<Answers | null>(null);

  const checkUserProfile = useCallback(async (currentUser: User) => {
    const userRef = ref(db, 'users/' + currentUser.uid);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      const profile = snapshot.val();
      setUserProfile(profile);
      setAppState('quiz');
    } else {
      setAppState('profile');
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        checkUserProfile(currentUser).catch(err => {
          console.error(err);
          setError("Failed to check user profile.");
          setAppState('auth');
        });
      } else {
        setUser(null);
        setUserProfile(null);
        setAppState('auth');
      }
    });
    return () => unsubscribe();
  }, [checkUserProfile]);
  
  const handleProfileSave = (profile: UserProfile) => {
    if (!user) return;
    const userRef = ref(db, 'users/' + user.uid);
    set(userRef, profile).then(() => {
        setUserProfile(profile);
        setAppState('quiz');
    }).catch(err => {
        console.error(err);
        setError("Failed to save profile.");
    });
  };

  const handleQuizComplete = async (answers: Answers) => {
    if (!userProfile) {
        setError("User profile is missing.");
        setAppState('profile');
        return;
    }
    setFinalAnswers(answers);
    setAppState('generating');
    setError(null);
    try {
        const aiResults = await getCareerAdvice(userProfile, answers);
        setResults(aiResults);
        setAppState('results');
    } catch (err) {
        console.error(err);
        setError("Sorry, we couldn't generate your career path. Please try again later.");
        setAppState('quiz');
    }
  };
  
  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      setUserProfile(null);
      setResults(null);
      setAppState('auth');
    });
  };

  const renderContent = () => {
    if (error) {
        return <div className="text-red-400 text-center p-4">{error}</div>
    }

    switch (appState) {
        case 'loading':
            return <Loader message="Initializing..." />;
        case 'auth':
            return <Auth />;
        case 'profile':
            return <ProfileForm onSave={handleProfileSave} />;
        case 'quiz':
            return <Quiz onComplete={handleQuizComplete} />;
        case 'generating':
            return <Loader message="Analyzing your responses and consulting with our AI career counselor..." />;
        case 'results':
            return <Results results={results} answers={finalAnswers} />;
        default:
            return <Auth />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0c22] text-gray-200 font-sans">
      <Navbar user={user} onLogout={handleLogout} />
      <main className="container mx-auto px-4 py-8 pt-24 md:pt-32">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
   