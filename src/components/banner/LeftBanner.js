import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Data Scientist.", "Data Analyst.", "Data Engineer.","Votre futur collaborateur 😉 "],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
    /**<h4 className=" text-lg font-normal">Hola Amingos 👀🙋‍♂️  </h4> */
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
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
        <b>Pourquoi moi ?</b>
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        ✔️ Un jeune ingénieur motivé, fraîchement diplômé, avec 2 ans d'expérience combinant alternance et stages.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        ✔️ Un esprit curieux et dynamique qui aime relever les défis et s’adapter rapidement à de nouveaux environnements.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        ✔️ Un professionnel trilingue (français, anglais, espagnol), à l’aise dans un contexte international.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        ✔️ Un passionné de data et d’IA, toujours en quête d’amélioration à travers des projets personnels et open source.
          </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner