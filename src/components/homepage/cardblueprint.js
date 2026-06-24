import styles from "./geral.module.css";
import Image from "next/image"
export default function Cardblueprint({url}) {
    return (
       <div className={styles.card}> 
          
            <div className={styles.imagecard}> 
                <Image
                 src= {url}
                 alt="toilet"
                 fill
                />
          </div>
           <div className={styles.cardbtnbackground}>
            <button className={styles.cardbtn}> <p className={styles.fontlermais}>Ler <br/>
             Mais  </p> <p className={styles.fontlermais}> + </p></button>
          </div> 
        </div>
    );
}