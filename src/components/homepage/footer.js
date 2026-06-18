import styles from './geral.module.css';
export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.fontfooter}> Saci-Techs © 2026. <br/>
                Todos os direitos reservados. <br/>
                Desenvolvido com foco em desempenho, acessibilidade e a melhor experiência para nossos usuários.</p>
        </div>
    );
}
