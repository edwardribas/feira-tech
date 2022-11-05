import React from 'react';
import Aquarella from '../../assets/img/parceiros/pc1.jpeg';
import LSIdiomas from '../../assets/img/parceiros/pc2.jpeg';
import styles from './styles.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Todos os direitos reservados &copy; 2022</p>
            <h3>NOSSOS PARCEIROS</h3>

            <div className={styles.parceiros}>
                <a
                    href="https://pt-br.facebook.com/people/Aquarella-Adesivos/100063532030004/"
                    target="_blank"
                >
                    <img src={Aquarella} alt="Logo de parceiro"/>
                </a>
                <a href='https://lsidiomas.com.br/' target="_blank">
                    <img src={LSIdiomas} alt="Logo de parceiro"/>
                </a>
            </div>
        </footer>
    )
}