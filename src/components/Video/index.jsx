import React from 'react';
import styles from './styles.module.scss';

export const Video = ({children, modal}) => {
    return (
        <div className={styles.video}>
            {children
                ? children
                : <div></div>}
            <button className={styles.desc} onClick={() => modal(true)}>
                Descrição
            </button>
        </div>
    )
}