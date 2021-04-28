import React, { useContext } from 'react';
import { useChallenges } from '../hooks/useChallenges';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';

import styles from '../styles/components/Profile.module.css';


export function Profile() {
    const { toggleTheme, currentTheme } = useContext(ThemeContext);
    const { level } = useChallenges();

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jose-bone.png" alt="José Boné" />
            <div>
                <strong>José Boné</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
            {currentTheme === "theme-dark" ? (
                <MdWbSunny onClick={toggleTheme} className={styles.theme1} />
            ) : (
                    <FaMoon
                        color="#2E384D"
                        onClick={toggleTheme}
                        className={styles.theme}
                    />
                )}
        </div>
    );
}

export default Profile;