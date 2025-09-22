
import React from 'react';
import type { Question } from './types';

export const API_PROVIDERS = [
  {
    apiKey: "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",
    model: "nvidia/nemotron-nano-9b-v2:free",
    url: "https://openrouter.ai/api/v1/chat/completions",
  },
  {
    apiKey: "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",
    model: "x-ai/grok-4-fast:free",
    url: "https://openrouter.ai/api/v1/chat/completions",
  },
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    questionText: 'What Subjects or Activities Make You Lose Track of Time?',
    categories: [
      {
        title: 'Academic/Learning Options',
        options: [
          { id: 'q1_opt1', text: 'Reading/researching specific topics' },
          { id: 'q1_opt2', text: 'Writing and storytelling' },
          { id: 'q1_opt3', text: 'Mathematics and problem-solving' },
          { id: 'q1_opt4', text: 'Science experiments and discovery' },
          { id: 'q1_opt5', text: 'History and cultural studies' },
          { id: 'q1_opt6', text: 'Language learning and linguistics' },
          { id: 'q1_opt7', text: 'Art and creative expression' },
          { id: 'q1_opt8', text: 'Music composition or performance' },
          { id: 'q1_opt9', text: 'Technology and coding' },
          { id: 'q1_opt10', text: 'Philosophy and critical thinking' },
        ],
      },
      {
        title: 'Hands-on Activities',
        options: [
          { id: 'q1_opt11', text: 'Building or fixing things' },
          { id: 'q1_opt12', text: 'Cooking and experimenting with recipes' },
          { id: 'q1_opt13', text: 'Gardening and plant care' },
          { id: 'q1_opt14', text: 'Sports and physical activities' },
          { id: 'q1_opt15', text: 'Crafting and DIY projects' },
          { id: 'q1_opt16', text: 'Photography and videography' },
          { id: 'q1_opt17', text: 'Gaming and strategy development' },
          { id: 'q1_opt18', text: 'Teaching others new skills' },
        ],
      },
    ],
  },
  {
    id: 2,
    questionText: 'What Problems in the World Do You Feel Excited to Solve?',
    categories: [
      {
        title: 'Social and Human Issues',
        options: [
          { id: 'q2_opt1', text: 'Poverty and inequality' },
          { id: 'q2_opt2', text: 'Education access and quality' },
          { id: 'q2_opt3', text: 'Healthcare accessibility' },
          { id: 'q2_opt4', text: 'Mental health awareness' },
          { id: 'q2_opt5', text: 'Human rights and justice' },
          { id: 'q2_opt6', text: 'Community development' },
        ],
      },
      {
        title: 'Environmental and Sustainability',
        options: [
          { id: 'q2_opt7', text: 'Climate change mitigation' },
          { id: 'q2_opt8', text: 'Pollution reduction' },
          { id: 'q2_opt9', text: 'Renewable energy development' },
          { id: 'q2_opt10', text: 'Sustainable agriculture' },
          { id: 'q2_opt11', text: 'Wildlife conservation' },
        ],
      },
      {
        title: 'Technology and Innovation',
        options: [
          { id: 'q2_opt12', text: 'Digital divide and access' },
          { id: 'q2_opt13', text: 'Cybersecurity threats' },
          { id: 'q2_opt14', text: 'Artificial intelligence ethics' },
          { id: 'q2_opt15', text: 'Data privacy protection' },
        ],
      },
      {
        title: 'Economic and Business',
        options: [
          { id: 'q2_opt16', text: 'Financial literacy' },
          { id: 'q2_opt17', text: 'Entrepreneurship support' },
          { id: 'q2_opt18', text: 'Supply chain optimization' },
        ],
      },
    ],
  },
  {
    id: 3,
    questionText: 'What Kind of Work Environment Energizes You Most?',
    categories: [
      {
        title: 'Physical Environment',
        options: [
          { id: 'q3_opt1', text: 'Traditional office settings' },
          { id: 'q3_opt2', text: 'Remote/home-based work' },
          { id: 'q3_opt3', text: 'Outdoor/field-based environments' },
          { id: 'q3_opt4', text: 'Laboratory or research facilities' },
          { id: 'q3_opt5', text: 'Creative studios and workshops' },
        ],
      },
      {
        title: 'Cultural Environment',
        options: [
          { id: 'q3_opt6', text: 'Collaborative and team-oriented' },
          { id: 'q3_opt7', text: 'Independent and autonomous' },
          { id: 'q3_opt8', text: 'Innovative and entrepreneurial' },
          { id: 'q3_opt9', text: 'Structured and conventional' },
        ],
      },
      {
        title: 'Work Style',
        options: [
          { id: 'q3_opt10', text: 'Fast-paced and dynamic' },
          { id: 'q3_opt11', text: 'Steady and predictable' },
          { id: 'q3_opt12', text: 'Project-based variety' },
          { id: 'q3_opt13', text: 'Leadership and mentoring roles' },
        ],
      },
    ],
  },
  {
    id: 4,
    questionText: 'Which of Your Hobbies Would You Miss Most?',
    categories: [
      {
        title: 'Creative and Artistic',
        options: [
          { id: 'q4_opt1', text: 'Drawing, painting, or digital art' },
          { id: 'q4_opt2', text: 'Music (playing instruments, composing)' },
          { id: 'q4_opt3', text: 'Writing (fiction, poetry, journalism)' },
          { id: 'q4_opt4', text: 'Photography and videography' },
        ],
      },
      {
        title: 'Technical and STEM',
        options: [
          { id: 'q4_opt5', text: 'Coding and programming projects' },
          { id: 'q4_opt6', text: 'Robotics and engineering clubs' },
          { id: 'q4_opt7', text: 'Data analysis and research' },
        ],
      },
      {
        title: 'Social and Leadership',
        options: [
          { id: 'q4_opt8', text: 'Debate and public speaking' },
          { id: 'q4_opt9', text: 'Volunteer work and community service' },
          { id: 'q4_opt10', text: 'Event planning and organization' },
        ],
      },
       {
        title: 'Physical and Outdoor',
        options: [
          { id: 'q4_opt11', text: 'Team sports and athletics' },
          { id: 'q4_opt12', text: 'Hiking and outdoor exploration' },
          { id: 'q4_opt13', text: 'Fitness and wellness activities' },
        ],
      },
    ],
  },
  {
    id: 5,
    questionText: 'What Does Success Look Like to You in 20 Years?',
    categories: [
      {
        title: 'Career Achievement',
        options: [
          { id: 'q5_opt1', text: 'Reaching executive or leadership positions' },
          { id: 'q5_opt2', text: 'Becoming recognized as an expert in a field' },
          { id: 'q5_opt3', text: 'Starting and running my own business' },
          { id: 'q5_opt4', text: 'Achieving financial independence' },
        ],
      },
      {
        title: 'Personal Fulfillment',
        options: [
          { id: 'q5_opt5', text: 'Maintaining strong family relationships' },
          { id: 'q5_opt6', text: 'Achieving work-life balance' },
          { id: 'q5_opt7', text: 'Continuous learning and growth' },
          { id: 'q5_opt8', text: 'Community involvement and giving back' },
        ],
      },
      {
        title: 'Impact and Legacy',
        options: [
          { id: 'q5_opt9', text: 'Solving major societal problems' },
          { id: 'q5_opt10', text: 'Mentoring the next generation' },
          { id: 'q5_opt11', text: 'Creating positive change in my community' },
          { id: 'q5_opt12', text: 'Improving the lives of others' },
        ],
      },
    ],
  },
];

export const TRANSITION_MESSAGES = [
    "Great start!",
    "Awesome choice!",
    "Keep it up!",
    "Fantastic!",
    "Almost there!"
];

// Base64 encoded click sound
export const CLICK_SOUND_DATA_URL = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjQ1LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAA//uQ4AUwAAAAZu//9EaVoAACqIiG0iZGpmYWp//8A34AAgBGF5iIZqG//uQ4BcwAABiFAn//zEz/a1l2//8A//8//8//+7//+//b//5///P//7//u/+9//3/+v/7//+//b//5//v/+/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+//uQ4CgwAAGIWYou//80z/W1s2//8A//8//8//+7//v//b//5///P//7//u/+9//3/+v/7//+//b//5//v/+/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//v/+7//Q==";
   
