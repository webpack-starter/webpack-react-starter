import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

const App = () => {
  return (
    <div className={styles.main}>
      go - 
      <div className={styles.info}>run...</div>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
