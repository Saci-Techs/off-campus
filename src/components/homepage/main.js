import Footer from "./footer";
import Dark_bar from "./dark_bar";
import styles from "./geral.module.css";
import Cardblueprint from "./cardblueprint";
export default function Main() {
    return (
        <main className={styles.main}>
            <Dark_bar /> 
            <div className={styles.cardsconfig}>
                <Cardblueprint url="/image/" />
                <Cardblueprint url="/image/" />
                <Cardblueprint url="/image/" /> 
                <Cardblueprint url="/image/" />
                <Cardblueprint url="/image/" />
                <Cardblueprint url="/image/" /> 
            </div>
            <Footer />
        </main>
    );
}