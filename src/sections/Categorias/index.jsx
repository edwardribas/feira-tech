import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useCategoria } from '../../hooks/useCategoria';
import { Video } from '../../components/Video';
import { Modal } from '../../components/Modal';

const livros = [
    'Memórias Póstumas', 'Quincas Borba', 'Dom Casmurro',
    'O Cortiço', 'O Mulato', 'O Ateneu', 'A Relíquia',
    'A Cidade e as Serras'
]

export const Categorias = () => {
    const {categoria, setCategoria} = useCategoria()
    const [openCategoria, setOpenCategoria] = useState('0')

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
                {/* Memórias Póstumas */}
                {categoria === 1 && ( <>
                    {/* Video 1 */}
                    <Video category='1_1' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/mI--tXIUyh8" title="Curta-metragem de LPL" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={openCategoria === '1_1'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 2 */}
                    <Video category='1_2' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/AmGQWZYQeUA" title="Curta Metragem - A Invisibilidade na Multidão" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={openCategoria === '1_2'}
                        closeFunction={setOpenCategoria}
                    />
                </> )}
                
                {/* Quincas Borba */}
                {categoria === 2 && (<>
                    {/* Video 1 */}
                    <Video category='2_1' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/i_QctZo2hgc" title="Curta Metragem- O lado ruim da ambição." allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={openCategoria === '2_1'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 2 */}
                    <Video category='2_2' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/POcntKQ83pQ" title='Curta-Metragem "Ao Vencedor de Batatas"' allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={openCategoria === '2_2'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 3 */}
                    <Video category='2_3' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/aiUlleJq1BM" title="Curta-metragem - Quincas Borba" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={openCategoria === '2_3'}
                        closeFunction={setOpenCategoria}
                    />
                </>)}
                
                {/* Dom Casmurro */}
                {categoria === 3 && ( <>
                    {/* Video 1 */}
                    <Video category='3_1' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/pxjSMcuOQfk" title="Curta Metragem LPL - Livro Dom Casmurro 2A" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={openCategoria === '3_1'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 2 */}
                    <Video category='3_2' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/z4Mji7Cnxy0" title="Curta metragem - Mulheres e seus traumas" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={openCategoria === '3_2'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 3 */}
                    <Video category='3_3' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/9eqCf_3aMfg" title="CURTA-METRAGEM DOM CASMURRO." allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={openCategoria === '3_3'}
                        closeFunction={setOpenCategoria}
                    />
                </>)}
                
                {/* O Cortiço */}
                {categoria === 4 && ( <>
                    {/* Video 1 */}
                    <Video category='4_1' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/D1WPBq2s4i4" title="Curta metragem inspirado na obra o Cortiço" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={openCategoria === '4_1'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 2 */}
                    <Video category='4_2' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/APQNlTQd08I" title="O Cortiço" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={openCategoria === '4_2'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 3 */}
                    <Video category='4_3' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/N42xxFSxmxg" title="O Cortiço" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={openCategoria === '4_3'}
                        closeFunction={setOpenCategoria}
                    />
                </> )}

                {/* O Mulato */}
                {categoria === 5 && ( <>
                    {/* Video 1 */}
                    <Video category='5_1' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/JeOpxan5BrM" title="O Mulato - curta-metragem" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={openCategoria === '5_1'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 2 */}
                    <Video category='5_2' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/17eF0eGcRKc" title="O mulato" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={openCategoria === '5_2'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 3 */}
                    <Video category='5_3' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/jK4gRqyulV0" title="CURTA METRAGEM - O Mulato" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={openCategoria === '5_3'}
                        closeFunction={setOpenCategoria}
                    />
                </> )}

                {/* O Ateneu */}
                {categoria === 6 && ( <>
                    {/* Video 1 */}
                    <Video category='6_1' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/EC2w67q5kwA" title="Curta-metragem" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={openCategoria === '6_1'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 2 */}
                    <Video category='6_2' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/vVMd9j_5-Uc" title="Curta-metragem" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={openCategoria === '6_2'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 3 */}
                    <Video category='6_3' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/ZyU_YJlOdlc" title="Curta-metragem: O Ateneu" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={openCategoria === '6_3'}
                        closeFunction={setOpenCategoria}
                    />
                </> )}

                {/* A Relíquia */}
                {categoria === 7 && ( <>
                    {/* Video 1 */}
                    <Video category='7_1' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/gWAE7os1Ltk" title="Curta-metragem: A Relíquia (Etec MCM 2B RH)" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={openCategoria === '7_1'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 2 */}
                    <Video category='7_2' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/Sn7v_MBkbBw" title="Curta-metragem: A Relíquia" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={openCategoria === '7_2'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 3 */}
                    <Video category='7_3' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/DAZZTX9ROBw" title="Curta-metragem: Sociedade de Aparências" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={openCategoria === '7_3'}
                        closeFunction={setOpenCategoria}
                    />
                </> )}
                
                {/* A Cidade e as Serras */}
                {categoria === 8 && ( <>
                    {/* Video 1 */}
                    <Video category='8_1' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/DeoMhf4AjEg" title='Trabalho de literatura sobre o realismo "De quê vale o amor senão pelo luxo?"' allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={openCategoria === '8_1'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 2 */}
                    <Video category='8_2' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/vjkbAy2FShQ" title="A Cidade e as Serras de Eça de Queirós - 2°A 2022" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={openCategoria === '8_2'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 3 */}
                    <Video category='8_3' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/q05aC0xcEbg" title="Curta - A Cidade e as Serras" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={openCategoria === '8_3'}
                        closeFunction={setOpenCategoria}
                    />

                    {/* Video 4 */}
                    <Video category='8_4' modalFunction={setOpenCategoria}>
                        <iframe width="100%" height="750" frameBorder={0} src="https://www.youtube.com/embed/SOILq57tvVQ" title='Curta - metragem do livro "A cidade e as serras" do autor Eça de Queirós.' allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 4"
                        isActive={openCategoria === '8_4'}
                        closeFunction={setOpenCategoria}
                    />
                </> )}
            </div>
        </section>
    )
}