
import React, { useState, FormEvent } from 'react';
import type { UserProfile } from '../types';

interface ProfileFormProps {
  onSave: (profile: UserProfile) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSave }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [familyIncome, setFamilyIncome] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ageNumber = parseInt(age, 10);
    if (isNaN(ageNumber) || ageNumber <= 0) {
      alert("Please enter a valid age.");
      return;
    }
    onSave({ name, age: ageNumber, nationality, familyIncome });
  };

  const incomeRanges = [
    "Prefer not to say",
    "Less than $25,000",
    "$25,000 - $49,999",
    "$50,000 - $74,999",
    "$75,000 - $99,999",
    "$100,000 - $149,999",
    "$150,000 or more",
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg p-8 space-y-8 bg-[#1a1a2e] rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-purple-400">Tell Us About Yourself</h2>
        <p className="text-center text-gray-400">
            This will help us personalize your career recommendations.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#0d0c22] rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
            </div>
            <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-300">Age</label>
                <input id="age" type="number" required value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#0d0c22] rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
            </div>
            <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-gray-300">Nationality</label>
                <input id="nationality" type="text" required value={nationality} onChange={(e) => setNationality(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#0d0c22] rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
            </div>
            <div>
                <label htmlFor="familyIncome" className="block text-sm font-medium text-gray-300">Annual Family Income (USD)</label>
                <select id="familyIncome" required value={familyIncome} onChange={(e) => setFamilyIncome(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-700 bg-[#0d0c22] rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
                    <option value="" disabled>Select an option</option>
                    {incomeRanges.map(range => <option key={range} value={range}>{range}</option>)}
                </select>
            </div>
            <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900">
                    Start the Quiz
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
   