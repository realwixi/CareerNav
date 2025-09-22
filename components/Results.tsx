
import React from 'react';
import type { AiResults, Answers } from '../types';

interface ResultsProps {
  results: AiResults | null;
  answers: Answers | null;
}

const Results: React.FC<ResultsProps> = ({ results, answers }) => {

  const formatAnswersForWhatsapp = () => {
    if (!answers) return "A student completed the career quiz.";

    let message = "Career Navigator Quiz Results:\n\n";
    Object.values(answers).forEach((answer, index) => {
      message += `Q${index + 1}: ${answer.questionText}\n`;
      message += `A: ${answer.selectedOptions.join(', ')}\n\n`;
    });
    return encodeURIComponent(message);
  };

  const whatsappLink = `https://wa.me/919419339434?text=${formatAnswersForWhatsapp()}`;

  if (!results) {
    return <div className="text-center text-xl text-purple-400">Loading results...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-[#1a1a2e] p-8 rounded-xl shadow-lg mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4 text-center">Your Personalized Career Roadmap</h1>
        <p className="text-gray-300 leading-relaxed">{results.summary}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-300 mb-4">Potential Career Paths</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {results.careerSuggestions.map((career, index) => (
            <div key={index} className="bg-[#1a1a2e] p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-100">{career.title}</h3>
              <p className="text-gray-400 mt-2 mb-4">{career.description}</p>
              <div className="bg-[#0d0c22] p-3 rounded">
                <p className="text-sm font-semibold text-purple-300">Why it fits you:</p>
                <p className="text-sm text-gray-300 mt-1">{career.alignment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-300 mb-4">Recommended Courses</h2>
        <div className="space-y-4">
          {results.courseRecommendations.map((course, index) => (
            <a href={course.link} target="_blank" rel="noopener noreferrer" key={index} className="block bg-[#1a1a2e] p-4 rounded-lg shadow-md hover:bg-purple-900/50 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-100">{course.courseName}</h4>
                  <p className="text-sm text-purple-400">{course.platform}</p>
                </div>
                <span className="text-gray-300">&#8594;</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-purple-300 mb-4">Ready for the Next Step?</h2>
        <p className="text-gray-300 mb-6">Book a one-on-one session with a professional career counselor to discuss your results in detail.</p>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          Book a Session on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Results;
   