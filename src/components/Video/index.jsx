import React from 'react';
import styles from './styles.module.scss';

export const Video = ({children, category, modalFunction}) => {
    return (
        <div className={styles.video}>
            {children
                ? children
                : <div></div>}
            <button
                className={styles.desc}
                onClick={() => modalFunction(category)}
            >
                Descrição
            </button>
        </div>
    )
}