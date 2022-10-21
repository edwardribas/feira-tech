import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styles from './styles.module.scss';

export const ArrowUp = () => {
    const [arrowState, setArrowState] = useState(false);
    window.onscroll = () => setArrowState(window.scrollY >= 50);
    
    return (
        <span
            className={
                arrowState
                    ? `${styles.up} ${styles.active}`
                    : styles.up
            }
            onClick={() => window.scrollTo({
                top: 0
            })}
        >
            <AiOutlineArrowUp />
        </span>
    )
}