import React from 'react';
import Chip from '@mui/material/Chip';

interface CustomChipProps {
  label: string;
  selected: boolean;
  className?: string;
  onClick: () => void;
}

const CustomChip: React.FC<CustomChipProps> = ({ label, selected, className, onClick }) => {
  return (
    <Chip
      className={`!h-[42px] !px-4 !rounded-full ${className}`}
      onClick={onClick}
      label={
        <span
          className={selected ? 'text-white text-base' : 'text-black text-base'}
        >
          {label}
        </span>
      }
      color={selected ? 'primary' : 'info'}
      variant={selected ? 'filled' : 'outlined'}
      style={{ borderColor: selected ? 'inherit' : '#00000029' }}
    />
  );
};

export default CustomChip;