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

                <button onClick={() => closeFunction('0')}> Fechar </button>
            </div>
            <div
                onClick={() => closeFunction('0')}
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