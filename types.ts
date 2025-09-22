
export interface Option {
  id: string;
  text: string;
}

export interface QuestionCategory {
  title: string;
  options: Option[];
}

export interface Question {
  id: number;
  questionText: string;
  categories: QuestionCategory[];
}

export interface UserProfile {
  name: string;
  age: number;
  nationality: string;
  familyIncome: string;
}

export interface Answers {
  [questionId: string]: {
    questionText: string;
    selectedOptions: string[];
  };
}

export interface CareerSuggestion {
    title: string;
    description: string;
    alignment: string;
}

export interface CourseRecommendation {
    courseName: string;
    platform: string;
    link: string;
}

export interface AiResults {
    summary: string;
    careerSuggestions: CareerSuggestion[];
    courseRecommendations: CourseRecommendation[];
}
   