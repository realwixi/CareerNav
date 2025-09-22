import React, { useState, useRef } from 'react';
import { QUIZ_QUESTIONS, TRANSITION_MESSAGES, CLICK_SOUND_DATA_URL } from '../constants';
import type { Answers } from '../types';
import { IconBook, IconPencil, IconCalculator, IconAtom, IconScroll, IconChat, IconPalette, IconMusic, IconCode, IconBrain, IconWrench, IconChef, IconSprout, IconBall, IconScissors, IconCamera, IconGamepad, IconChalkboard, IconCoin, IconGraduationCap, IconStethoscope, IconHeart, IconJustice, IconGroup, IconLeaf, IconFactory, IconWind, IconWheat, IconPaw, IconLink, IconShield, IconRobot, IconLock, IconPiggyBank, IconRocket, IconTruck, IconBuilding, IconHome, IconMountain, IconMicroscope, IconEasel, IconHandshake, IconPerson, IconLightbulb, IconGrid, IconClock, IconTurtle, IconChecklist, IconCrown, IconPaintbrush, IconGuitar, IconBriefcase, IconMedal, IconStore, IconMoney, IconFamily, IconYinYang, IconBookOpen, IconGlobe, IconPuzzle, IconMentor, IconGrowth, IconPlusHeart } from './Icons';

interface QuizProps {
  onComplete: (answers: Answers) => void;
}

const ICONS: { [key: string]: React.ReactNode } = {
    q1_opt1: <IconBook />, q1_opt2: <IconPencil />, q1_opt3: <IconCalculator />, q1_opt4: <IconAtom />, q1_opt5: <IconScroll />, q1_opt6: <IconChat />, q1_opt7: <IconPalette />, q1_opt8: <IconMusic />, q1_opt9: <IconCode />, q1_opt10: <IconBrain />, q1_opt11: <IconWrench />, q1_opt12: <IconChef />, q1_opt13: <IconSprout />, q1_opt14: <IconBall />, q1_opt15: <IconScissors />, q1_opt16: <IconCamera />, q1_opt17: <IconGamepad />, q1_opt18: <IconChalkboard />,
    q2_opt1: <IconCoin />, q2_opt2: <IconGraduationCap />, q2_opt3: <IconStethoscope />, q2_opt4: <IconHeart />, q2_opt5: <IconJustice />, q2_opt6: <IconGroup />, q2_opt7: <IconLeaf />, q2_opt8: <IconFactory />, q2_opt9: <IconWind />, q2_opt10: <IconWheat />, q2_opt11: <IconPaw />, q2_opt12: <IconLink />, q2_opt13: <IconShield />, q2_opt14: <IconRobot />, q2_opt15: <IconLock />, q2_opt16: <IconPiggyBank />, q2_opt17: <IconRocket />, q2_opt18: <IconTruck />,
    q3_opt1: <IconBuilding />, q3_opt2: <IconHome />, q3_opt3: <IconMountain />, q3_opt4: <IconMicroscope />, q3_opt5: <IconEasel />, q3_opt6: <IconHandshake />, q3_opt7: <IconPerson />, q3_opt8: <IconLightbulb />, q3_opt9: <IconGrid />, q3_opt10: <IconClock />, q3_opt11: <IconTurtle />, q3_opt12: <IconChecklist />, q3_opt13: <IconCrown />,
    q4_opt1: <IconPaintbrush />, q4_opt2: <IconGuitar />, q4_opt3: <IconPencil />, q4_opt4: <IconCamera />, q4_opt5: <IconCode />, q4_opt6: <IconRobot />, q4_opt7: <IconGrid />, q4_opt8: <IconChat />, q4_opt9: <IconHeart />, q4_opt10: <IconChecklist />, q4_opt11: <IconBall />, q4_opt12: <IconMountain />, q4_opt13: <IconPlusHeart />,
    q5_opt1: <IconBriefcase />, q5_opt2: <IconMedal />, q5_opt3: <IconStore />, q5_opt4: <IconMoney />, q5_opt5: <IconFamily />, q5_opt6: <IconYinYang />, q5_opt7: <IconBookOpen />, q5_opt8: <IconGlobe />, q5_opt9: <IconPuzzle />, q5_opt10: <IconMentor />, q5_opt11: <IconGrowth />, q5_opt12: <IconPlusHeart />,
};

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  const playSound = () => {
    if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(error => console.log("Audio play failed:", error));
    }
  };

  const handleOptionClick = (optionId: string) => {
    playSound();
    const newSelectedOptions = new Set(selectedOptions);
    if (newSelectedOptions.has(optionId)) {
      newSelectedOptions.delete(optionId);
    } else {
      newSelectedOptions.add(optionId);
    }
    setSelectedOptions(newSelectedOptions);
  };

  const handleNext = () => {
    const currentAnswer = Array.from(selectedOptions).map(id => {
      for (const category of currentQuestion.categories) {
        const found = category.options.find(opt => opt.id === id);
        if (found) return found.text;
      }
      return '';
    }).filter(Boolean);

    setAnswers({
      ...answers,
      [currentQuestion.id]: {
        questionText: currentQuestion.questionText,
        selectedOptions: currentAnswer,
      },
    });

    setSelectedOptions(new Set());

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsTransitioning(false);
      }, 1500);
    }
  };

  const handleSubmit = () => {
    const finalAnswer = Array.from(selectedOptions).map(id => {
      for (const category of currentQuestion.categories) {
        const found = category.options.find(opt => opt.id === id);
        if (found) return found.text;
      }
      return '';
    }).filter(Boolean);

    const finalAnswers = {
      ...answers,
      [currentQuestion.id]: {
        questionText: currentQuestion.questionText,
        selectedOptions: finalAnswer,
      },
    };
    onComplete(finalAnswers);
  };

  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;

  if (isTransitioning) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-400 animate-pulse">
                  {TRANSITION_MESSAGES[currentQuestionIndex]}
              </h2>
          </div>
      )
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <audio ref={audioRef} src={CLICK_SOUND_DATA_URL} preload="auto"></audio>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-purple-400">Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-100">{currentQuestion.questionText}</h2>

      {/* Options */}
      <div className="space-y-6">
        {currentQuestion.categories.map(category => (
          <div key={category.title}>
            <h3 className="text-lg font-semibold text-purple-300 mb-3">{category.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.options.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className={`flex items-center text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedOptions.has(option.id)
                      ? 'bg-purple-500 border-purple-400 text-white ring-2 ring-purple-300'
                      : 'bg-[#1a1a2e] border-gray-600 hover:bg-purple-900/50 hover:border-purple-500'
                  }`}
                >
                  <span className="mr-3 text-purple-300">{ICONS[option.id] || <div className="w-6 h-6"></div>}</span>
                  <span className="flex-1">{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-12 flex justify-center">
        {!isLastQuestion ? (
          <button
            onClick={handleNext}
            disabled={selectedOptions.size === 0}
            className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Next
          </button>
        ) : (
           <button
            onClick={handleSubmit}
            disabled={selectedOptions.size === 0}
            className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Submit & See Your Results
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;