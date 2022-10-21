import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useCategoria } from '../../hooks/useCategoria';
import { Video } from '../../components/Video';
import { Modal } from '../../components/Modal';

const livros = [
    'A Cidade e as Serras', 'A Relíquia', 'Dom Casmurro', 'Quincas Borba',
    'Memórias Póstumas', 'O Ateneu', 'O Cortiço', 'O Mulato',
]

export const Categorias = () => {
    const {categoria, setCategoria} = useCategoria()

    // States
    const [cat1_1, setCat1_1] = useState(false);
    const [cat1_2, setCat1_2] = useState(false);

    return (
        <section id="curtas">
            <div className={styles.categorias}>
                {livros.map((livro, num) => (
                    <span
                        className={
                            categoria-1 === num
                                ? `${styles.categoria} ${styles.active}`
                                : styles.categoria
                        }
                        onClick={() => setCategoria(num+1)}
                        key={num}
                    >
                        <span>{num+1}</span>
                        <p>{livro}</p>
                    </span>
                ))}
            </div>

            <div className={styles.cards}>
                {/* A Cidade e as Serras */}
                {categoria === 1 && ( <>
                    <Video modal={setCat1_1}>
                        <iframe
                            src="https://www.youtube.com/embed/-5eWlSRM-WY"
                            title="Hack me again, I dare you... | Overwatch 2"
                            frameBorder="0"
                            allow="clipboard-write; encrypted-media;"
                            allowFullScreen
                        >
                        </iframe>
                    </Video>
                    <Modal
                        descricao="opa galerinha do mal"
                        isActive={cat1_1}
                        closeFunction={setCat1_1}
                    />

                    <Video modal={setCat1_2}>
                        <iframe
                            src="https://www.youtube.com/embed/-5eWlSRM-WY"
                            title="Hack me again, I dare you... | Overwatch 2"
                            frameBorder="0"
                            allow="clipboard-write; encrypted-media;"
                            allowFullScreen
                        >
                        </iframe>
                    </Video>
                    <Modal
                        descricao="opa galerinha do bem"
                        isActive={cat1_2}
                        closeFunction={setCat1_2}
                    />

                    <Video modal={setCat1_2}>
                        <iframe
                            src="https://www.youtube.com/embed/-5eWlSRM-WY"
                            title="Hack me again, I dare you... | Overwatch 2"
                            frameBorder="0"
                            allow="clipboard-write; encrypted-media;"
                            allowFullScreen
                        >
                        </iframe>
                    </Video>
                    <Modal
                        descricao="opa galerinha do bem"
                        isActive={cat1_2}
                        closeFunction={setCat1_2}
                    />

                </> )}
                
                {/* A Relíquia */}
                {categoria === 2 && (<>
                    <Video></Video>
                </>)}
                
                {/* Dom Casmurro */}
                {categoria === 3 && ( <>
                    <Video></Video>
                </>)}
                
                {/* Quincas Borba */}
                {categoria === 4 && ( <>
                    <Video></Video>
                </> )}

                {/* Memórias Póstumas */}
                {categoria === 5 && ( <>
                    <Video></Video>
                </> )}

                {/* O Ateneu */}
                {categoria === 6 && ( <>
                    <Video></Video>
                </> )}

                {/* O Cortiço */}
                {categoria === 7 && ( <>
                    <Video></Video>
                </> )}
                
                {/* O Mulato */}
                {categoria === 8 && ( <>
                    <Video></Video>
                </> )}
            </div>
        </section>
    )
}