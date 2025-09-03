import React from 'react';
import type { ScoreButtonProps } from '../types';

const ScoreButton: React.FC<ScoreButtonProps> = ({ 
  onClick, 
  disabled = false, 
  'aria-label': ariaLabel 
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      className="score-button"
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel || 'Increment score'}
      type="button"
    >
      +
    </button>
  );
};

export default ScoreButton;
