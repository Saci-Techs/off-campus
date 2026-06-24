"use client";

import { useState, useEffect } from 'react';
import Image from "next/image"
import styles from "./geral.module.css"
// import Image from 'next/image'; // Descomente se estiver usando Next.js

export default function Slides({ Images = [] }) { // Recebendo images como props (ou defina aqui dentro)
  // Usando camelCase para boas práticas
  const [currentImage, setCurrentImage] = useState(0); 

  return (
    <div className={styles.slidediv}>
        <div className={styles.slideleftbutton} onClick={() => {setCurrentImage((prevImage) => {
            if (prevImage == 0) {
                return prevImage -1 + Images.length;
            }
            return prevImage - 1})}}>
            
        </div>
        <div className={styles.sliderightbutton} onClick={() => {setCurrentImage((prevImage) => {
            if (prevImage == Images.length - 1 ) { 
                return prevImage - (Images.length - 1);
            }
            return prevImage + 1})}}>
        </div>
        {Images.map((image, index) => (
          // Mostra a div apenas se o index for igual à imagem atual
          <div className={styles.slideshow}
            key={index} 
            style={{ display: index === currentImage ? 'block' : 'none' }}
          >
                <Image 
                src={image} 
                fill  
                alt={`Slide ${index} `} /> 
          </div>
        ))}
    </div>
  );
}