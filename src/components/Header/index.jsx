import React, { useState } from 'react';
import { Logo } from '../../assets/img';
import styles from './styles.module.scss';
import { HiBars3 } from 'react-icons/hi2';

export const Header = () => {
    const [openedMenu, setMenuOpened] = useState(false);

    return (
        <header className={styles.header}>
            <nav>
                <span className={styles.logo}>
                    <Logo/>
                </span>
                
                <ul className={openedMenu ? styles.active : undefined}>
                    <li>
                        <a href="#curtas"> Curtas </a>
                    </li>
                    <li>
                        <a href="#sobre"> Sobre </a>
                    </li>
                </ul>

                <span onClick={() => setMenuOpened(!openedMenu)} className={styles.bar}>
                    <HiBars3/>
                </span>
            </nav>
        </header>
    )
}