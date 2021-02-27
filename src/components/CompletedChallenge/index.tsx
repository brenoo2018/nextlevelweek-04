import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import styles from '../../styles/components/CompletedChallenge.module.css';

export function CompletedChallenge() {
  const { chalengesCompleted } = useContext(ChallengeContext);
  return (
    <div className={styles.completedChallengeContainer}>
      <span>Desafios completos</span>
      <span>{chalengesCompleted}</span>
    </div>
  );
}
