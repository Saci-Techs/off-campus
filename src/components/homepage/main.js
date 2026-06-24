import Footer from "./footer";
import Dark_bar from "./dark_bar";
import styles from "./geral.module.css";
import Cardblueprint from "./cardblueprint";
import Slides from "./slides";
export default function Main() {
    const imagensCarrossel = [
        "/image/Botucarnaval.webp",
        "/image/Botushow.png",
        "/image/toilet.png"
    ]
    return (
        <main className={styles.main}>
            <Dark_bar /> 
            <Slides Images={imagensCarrossel}/>
            <div className={styles.cardsconfig}>
                <Cardblueprint url="/image/IMG_1269.jpg" />
                <Cardblueprint url="/image/Minha imagem do ChatGpt.png" />
                <Cardblueprint url="/image/toilet.png" /> 
                <Cardblueprint url="/image/Uniao_sinistra.webp" />
                <Cardblueprint url="/image/Bag.png" />
                <Cardblueprint url="/image/exemplo.jpg" /> 
            </div>
            <Footer />
        </main>
    );
}