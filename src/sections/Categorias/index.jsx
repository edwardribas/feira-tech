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

    // States
    const [cat1_1, setCat1_1] = useState(false);
    const [cat1_2, setCat1_2] = useState(false);
    const [cat2_1, setCat2_1] = useState(false);
    const [cat2_2, setCat2_2] = useState(false);
    const [cat2_3, setCat2_3] = useState(false);
    const [cat3_1, setCat3_1] = useState(false);
    const [cat3_2, setCat3_2] = useState(false);
    const [cat3_3, setCat3_3] = useState(false);
    const [cat4_1, setCat4_1] = useState(false);
    const [cat4_2, setCat4_2] = useState(false);
    const [cat4_3, setCat4_3] = useState(false);
    const [cat5_1, setCat5_1] = useState(false);
    const [cat5_2, setCat5_2] = useState(false);
    const [cat5_3, setCat5_3] = useState(false);
    const [cat6_1, setCat6_1] = useState(false);
    const [cat6_2, setCat6_2] = useState(false);
    const [cat6_3, setCat6_3] = useState(false);
    const [cat7_1, setCat7_1] = useState(false);
    const [cat7_2, setCat7_2] = useState(false);
    const [cat7_3, setCat7_3] = useState(false);
    const [cat8_1, setCat8_1] = useState(false);
    const [cat8_2, setCat8_2] = useState(false);
    const [cat8_3, setCat8_3] = useState(false);
    const [cat8_4, setCat8_4] = useState(false);

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
                    <Video modal={setCat1_1}>
                        <iframe width="100%" height="753" src="https://www.youtube.com/embed/mI--tXIUyh8" title="Curta-metragem de LPL" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={cat1_1}
                        closeFunction={setCat1_1}
                    />

                    {/* Video 2 */}
                    <Video modal={setCat1_2}>
                        <iframe width="100%" height="720" src="https://www.youtube.com/embed/AmGQWZYQeUA" title="Curta Metragem - A Invisibilidade na Multidão" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={cat1_2}
                        closeFunction={setCat1_2}
                    />
                </> )}
                
                {/* Quincas Borba */}
                {categoria === 2 && (<>
                    {/* Video 1 */}
                    <Video modal={setCat2_1}>
                        <iframe width="1280" height="704" src="https://www.youtube.com/embed/i_QctZo2hgc" title="Curta Metragem- O lado ruim da ambição." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={cat2_1}
                        closeFunction={setCat2_1}
                    />

                    {/* Video 2 */}
                    <Video modal={setCat2_2}>
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/POcntKQ83pQ" title='Curta-Metragem "Ao Vencedor de Batatas"' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={cat2_2}
                        closeFunction={setCat2_2}
                    />

                    {/* Video 2 */}
                    <Video modal={setCat2_3}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/aiUlleJq1BM" title="Curta-metragem - Quincas Borba" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={cat2_3}
                        closeFunction={setCat2_3}
                    />
                </>)}
                
                {/* Dom Casmurro */}
                {categoria === 3 && ( <>
                    {/* Video 1 */}
                    <Video modal={setCat3_1}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/pxjSMcuOQfk" title="Curta Metragem LPL - Livro Dom Casmurro 2A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={cat3_1}
                        closeFunction={setCat3_1}
                    />

                    {/* Video 2 */}
                    <Video modal={setCat3_2}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/z4Mji7Cnxy0" title="Curta metragem - Mulheres e seus traumas" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={cat3_2}
                        closeFunction={setCat3_2}
                    />

                    {/* Video 3 */}
                    <Video modal={setCat3_3}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/9eqCf_3aMfg" title="CURTA-METRAGEM DOM CASMURRO." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={cat3_3}
                        closeFunction={setCat3_3}
                    />
                </>)}
                
                {/* O Cortiço */}
                {categoria === 4 && ( <>
                    {/* Video 1 */}
                    <Video modal={setCat4_1}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/D1WPBq2s4i4" title="curta metragem inspirado na obra o Cortiço" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={cat4_1}
                        closeFunction={setCat4_1}
                    />

                    {/* Video 2 */}
                    <Video modal={setCat4_2}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/APQNlTQd08I" title="O Cortiço" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={cat4_2}
                        closeFunction={setCat4_2}
                    />

                    {/* Video 3 */}
                    <Video modal={setCat4_3}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/N42xxFSxmxg" title="O cortiço" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={cat4_3}
                        closeFunction={setCat4_3}
                    />
                </> )}

                {/* O Mulato */}
                {categoria === 5 && ( <>
                    {/* Video 1 */}
                    <Video modal={setCat5_1}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/JeOpxan5BrM" title="O Mulato - curta-metragem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={cat5_1}
                        closeFunction={setCat5_1}
                    />

                    {/* Video 2 */}
                    <Video modal={setCat5_2}>
                        <iframe width="1230" height="696" src="https://www.youtube.com/embed/17eF0eGcRKc" title="O mulato" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={cat5_2}
                        closeFunction={setCat5_2}
                    />

                    {/* Video 3 */}
                    <Video modal={setCat5_3}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/jK4gRqyulV0" title="CURTA METRAGEM - O Mulato" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={cat5_3}
                        closeFunction={setCat5_3}
                    />
                </> )}

                {/* O Ateneu */}
                {categoria === 6 && ( <>
                    {/* Video 1 */}
                    <Video modal={setCat6_1}>
                        <iframe width="1244" height="696" src="https://www.youtube.com/embed/EC2w67q5kwA" title="curta-metragem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={cat6_1}
                        closeFunction={setCat6_1}
                    />

                    {/* Video 2 */}
                    <Video modal={setCat6_2}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/vVMd9j_5-Uc" title="Curta Metragem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={cat6_2}
                        closeFunction={setCat6_2}
                    />

                    {/* Video 3 */}
                    <Video modal={setCat6_3}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/ZyU_YJlOdlc" title="CURTA METRAGEM O Ateneu" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={cat6_3}
                        closeFunction={setCat6_3}
                    />
                </> )}

                {/* A Relíquia */}
                {categoria === 7 && ( <>
                    {/* Video 1 */}
                    <Video modal={setCat7_1}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/gWAE7os1Ltk" title="A RELÍQUIA-Curta Metragem Etec MCM (2B RH)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={cat7_1}
                        closeFunction={setCat7_1}
                    />

                    {/* Video 2 */}
                    <Video modal={setCat7_2}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/Sn7v_MBkbBw" title="Curta metragem - A Relíquia" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={cat7_2}
                        closeFunction={setCat7_2}
                    />

                    {/* Video 3 */}
                    <Video modal={setCat7_3}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/DAZZTX9ROBw" title="Sociedade de Aparências" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={cat7_3}
                        closeFunction={setCat7_3}
                    />
                </> )}
                
                {/* A Cidade e as Serras */}
                {categoria === 8 && ( <>
                    {/* Video 1 */}
                    <Video modal={setCat8_1}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/DeoMhf4AjEg" title='Trabalho de literatura sobre o realismo " De quê vale o amor senão pelo luxo?"' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 1"
                        isActive={cat8_1}
                        closeFunction={setCat8_1}
                    />

                    {/* Video 2 */}
                    <Video modal={setCat8_2}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/vjkbAy2FShQ" title="A Cidade e as Serras de Eça de Queirós - 2°A 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 2"
                        isActive={cat8_2}
                        closeFunction={setCat8_2}
                    />

                    {/* Video 3 */}
                    <Video modal={setCat8_3}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/q05aC0xcEbg" title="Curta - A Cidade e as Serras" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 3"
                        isActive={cat8_3}
                        closeFunction={setCat8_3}
                    />

                    {/* Video 4 */}
                    <Video modal={setCat8_4}>
                        <iframe width="1237" height="696" src="https://www.youtube.com/embed/SOILq57tvVQ" title='Curta - metragem do livro "A cidade e as Serras" do autor Eça de Queirós.' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Video>
                    <Modal
                        descricao="Vídeo 4"
                        isActive={cat8_4}
                        closeFunction={setCat8_4}
                    />
                </> )}
            </div>
        </section>
    )
}