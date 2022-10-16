import styles from './styles.module.scss';

export const Hero = () => {
    return (
        <>
            <section className={styles.hero}>
                <h1>Feira Tecnológica</h1>
                
                <p>
                    Projeto dos Curtas Metragens proposto pela professora Amanda Aparecida Chagas,
                    realizado para a Feira Tecnológica da ETEC Maria Cristina Medeiros que ocorrerá
                    no dia 5 de novembro, organizado pelos alunos do 2°C para que os alunos possam
                    exibir as filmagens em uma galeria online.
                </p>

                <a href="#curtas">
                    Curtas
                </a>
            </section>
            <div className={styles.waves}>
            </div>
        </>
    )
}