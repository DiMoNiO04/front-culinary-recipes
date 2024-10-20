import React from 'react';

const LikeIcon: React.FC = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill="white" fillOpacity="0.01" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.44169 29.0851C6.5592 29.7154 5.33337 29.0846 5.33337 28.0001V6.66675C5.33337 4.45761 7.12423 2.66675 9.33337 2.66675H22.6667C24.8758 2.66675 26.6667 4.45761 26.6667 6.66675V28.0001C26.6667 29.0846 25.4409 29.7154 24.5584 29.0851L16 22.972L7.44169 29.0851ZM24 25.4092V6.66675C24 5.93037 23.4031 5.33341 22.6667 5.33341H9.33337C8.59699 5.33341 8.00004 5.93037 8.00004 6.66675V25.4092L15.2251 20.2484C15.6887 19.9173 16.3114 19.9173 16.775 20.2484L24 25.4092Z"
        fill="black"
      />
    </svg>
  );
};

export default LikeIcon;
