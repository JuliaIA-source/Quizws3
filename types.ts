
export type Option = {
  id: string;
  label: string;
  icon?: string;
  description?: string;
  isHighlighted?: boolean;
  variant?: 'primary' | 'secondary' | 'binary' | 'list' | 'danger-light';
};

export type QuestionType = 'binary' | 'multiple-choice' | 'lead-gen';

export interface Question {
  id: number;
  type: QuestionType;
  heroEmoji?: string;
  headline: string;
  subheadline?: string;
  alertText?: string;
  options?: Option[];
  progress: number;
}

export interface QuizState {
  currentStep: number;
  answers: Record<number, string>;
  isCompleted: boolean;
}
