"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./geral.module.css";
// import Image from 'next/image'; // Descomente se estiver usando Next.js

export default function Slides({ Images = [] }) {
  // Recebendo images como props (ou defina aqui dentro)
  // Usando camelCase para boas práticas
  const [currentImage, setCurrentImage] = useState(0);
  const [Imagem_Anterior, setImagem_Anterior] = useState(0);
  const [Imagem_Posterior, setImagem_Posterior] = useState(0);

  useEffect(() => {
    setImagem_Anterior(() => {
      if (currentImage == 0) {
        return currentImage - 1 + Images.length;
      }

      return currentImage - 1;
    });
    setImagem_Posterior(() => {
      if (currentImage == Images.length - 1) {
        return currentImage - (Images.length - 1);
      }
      return currentImage + 1;
    });
  }, [currentImage]);

  return (
    <div className={styles.slidediv}>
      <div
        className={styles.slideleftbutton}
        onClick={() => {
          setCurrentImage(Imagem_Anterior);
        }}
      ></div>
      <div
        className={styles.sliderightbutton}
        onClick={() => {
          setCurrentImage(Imagem_Posterior);
        }}
      ></div>
      <span
        className={`${styles.Fita_Adesiva} ${styles.Fita_Adesiva_Esquerda_Topo}`}
      ></span>
      <span
        className={`${styles.Fita_Adesiva} ${styles.Fita_Adesiva_Direita_Topo}`}
      ></span>
      <span
        className={`${styles.Fita_Adesiva} ${styles.Fita_Adesiva_Esquerda_Baixo}`}
      ></span>
      <span
        className={`${styles.Fita_Adesiva} ${styles.Fita_Adesiva_Direita_Baixo}`}
      ></span>
      <div className={styles.Div_Imagem_Anterior}>
        <Image src={Images[Imagem_Anterior]} fill alt={`Slide Anterior`} />
      </div>
      {Images.map((image, index) => (
        // Mostra a div apenas se o index for igual à imagem atual
        <div
          className={styles.slideshow}
          key={index}
          style={{ display: index === currentImage ? "block" : "none" }}
        >
          <Image src={image} fill alt={`Slide ${index} `} />
        </div>
      ))}
      <div className={styles.Div_Imagem_Posterior}>
        <Image src={Images[Imagem_Posterior]} fill alt={`Slide Posterior`} />
      </div>
    </div>
  );
}
