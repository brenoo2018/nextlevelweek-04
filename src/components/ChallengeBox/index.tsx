import { useCallback, useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import styles from '../../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio </strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              onClick={resetChallenge}
              type="button"
              className={styles.challengeFailureButton}
            >
              Falhei
            </button>

            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
