import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Data Scientist.", "Data Analyst.", "Data Engineer.","Votre futur alternant "],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hola Amingos 👀🙋‍♂️  </h4>
        <h1 className="text-6xl font-bold text-white">
          Salut, Je suis <span className="text-designColor capitalize">Chris Essomba</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
      En tant que futur ingénieur, ma passion pour l&lsquo;analyse quantitative m&lsquo;oriente vers une carrière de Data Scientist. Dans le but de monter en compétences dans ce domaine, j&lsquo;ai réalisé des projets et obtenu des certifications spécialisées. Mon objectif dès lors est de mettre en pratique ces acquis et de continuer à enrichir mon expertise, dans le cadre d&lsquo;une alternance d&lsquo;une durée de 12 mois à partir de septembre prochain.
          </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner