import React from 'react';
import styles from './styles.module.scss';

export const Sobre = () => {
    return (
        <div className={styles.card} id="sobre">
            <h1>Um pouco sobre a feira</h1>

            <p>
                A feira tecnológica se trata de um evento que ocorrerá na ETEC Prof.ª Maria Cristina Medeiros 
                no dia 5 de novembro, onde todas as turmas deverão mostrar seus projetos.
            </p>
            <p>
                Para o 2º C, foi proposto exibir as curtas metragens, trabalho lecionado pela professora Amanda 
                Aparecida Chagas, no qual foi necessário produzir um pequeno filme com imagens sobre temas de livros 
                do realismo brasileiro.
            </p>
            <p>
                Para exibir os filmes em um lugar único, também nos foi proposto a criação de uma galeria on-line.
            </p>
        </div>
    )
}