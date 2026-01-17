
import React from 'react';

interface OptionCardProps {
  label: string;
  icon?: string;
  isSelected?: boolean;
  isHighlighted?: boolean;
  variant?: 'primary' | 'secondary' | 'binary' | 'list' | 'danger-light';
  onClick: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({ label, icon, isSelected, isHighlighted, variant = 'list', onClick }) => {
  if (variant === 'binary' || variant === 'primary') {
    return (
      <button
        onClick={onClick}
        className={`flex items-center justify-center gap-3 w-full py-5 px-6 font-extrabold rounded-2xl transition-all shadow-md active:scale-95 text-xl
          ${variant === 'primary' ? 'bg-[#16A34A] hover:bg-[#15803d] text-white py-7 shadow-lg' : 'bg-[#16A34A] hover:bg-[#15803d] text-white'}
        `}
      >
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </button>
    );
  }

  if (variant === 'danger-light') {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-3 w-full py-5 px-6 bg-red-50 text-red-500 border-2 border-red-100 font-extrabold rounded-2xl transition-all hover:bg-red-100 active:scale-95 text-xl shadow-sm"
      >
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-transparent border-2 border-gray-200 text-gray-400 font-bold rounded-2xl transition-all hover:border-gray-300 hover:text-gray-500 active:scale-95 text-base mt-2"
      >
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 w-full p-5 mb-4 border-2 rounded-2xl text-left transition-all duration-200 group
        ${isSelected 
          ? 'border-[#16A34A] bg-gray-50' 
          : isHighlighted 
            ? 'border-gray-400 bg-gray-50 hover:border-[#16A34A]'
            : 'border-transparent bg-gray-50 hover:border-[#16A34A]/50'
        }`}
    >
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 min-w-[3rem] rounded-xl text-3xl bg-white shadow-sm transition-transform group-hover:scale-110">
          {icon}
        </div>
      )}
      <span className={`text-lg font-bold leading-snug ${isSelected ? 'text-[#111827]' : 'text-[#4B5563]'}`}>
        {label}
      </span>
    </button>
  );
};

export default OptionCard;
