import React from 'react';
import styles from './ErrorFetch.module.scss';

const ErrorFetch: React.FC = () => {
  return <div className={styles.text}>Error loading. Please try again later.</div>;
};

export default ErrorFetch;
