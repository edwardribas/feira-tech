import React from 'react';
import styles from './styles.module.scss';

export const Modal = ({descricao, isActive, closeFunction}) => {
    return (
        <>
            <div 
                className={
                    isActive
                        ? `${styles.modal} ${styles.active}`
                        : styles.modal
                }
            >
                <h1>Um pouco sobre esta curta...</h1>

                <p>
                    {descricao}
                </p>

                <button onClick={() => closeFunction(false)}> Fechar </button>
            </div>
            <div
                onClick={() => closeFunction(false)}
                className={
                    isActive
                        ? `${styles.backdrop} ${styles.active}`
                        : styles.backdrop
                }
            >
            </div>
        </>
    )
}