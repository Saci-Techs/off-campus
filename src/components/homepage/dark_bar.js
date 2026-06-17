import styles from "./geral.module.css";
export default function Dark_bar() {
    return (
        <div className={styles.menuconfig}>
            <h1 className={styles.menutxtcolor}> qual evento você querer ir? </h1>
            <button className={styles.menubtn}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}