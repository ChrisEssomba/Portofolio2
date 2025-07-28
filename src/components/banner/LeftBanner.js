import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
/*import Media from './Media';*/
import { photoID, cv_en, cv_fr} from "../../assets/index"; // <-- Assure-toi que l'image existe bien à ce chemin

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Le data scientist qui allie rigueur d’ingénieur et curiosité de chercheur.", "Data Scientist.", "Data Analyst.", "Data Engineer.", "Votre futur collaborateur 😉 "],
    loop: false,
    typeSpeed: 20,
    deleteSpeed: 10000000000, // Pour éviter la suppression du texte
    delaySpeed: 2000,
  });

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 bg">
      {/* Profile Picture */}
      <div className="mb-6">
        <img
          src={photoID}
          alt="Chris Essomba"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />
      </div>

      <div className="max-w-4xl flex flex-col gap-6">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Salut, Je suis <span className="text-blue-500 capitalize">Chris Essomba</span>
        </h1>

        {/* Typewriter Text */}
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#3b82f6"
          />
        </h2>

        {/* About */}
        <div className="text-base font-bodyFont leading-7 tracking-wide text-white space-y-4 mt-4">
          <p className="font-semibold text-lg text-gray-200">Qui suis je ?</p>
          <p> Étudiant en dernière année d’école d’ingénieur, spécialisé en Big Data et en intelligence artificielle, avec plus d’un an d’expérience dans le domaine de la recherche appliquée.</p>
         
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={cv_fr}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            📄 Télécharger mon CV (FR)
          </a>
          <a
            href="https://github.com/ChrisEssomba"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-500 font-semibold rounded-lg transition"
          >
            💻 Mon GitHub
          </a>
          <a
            href={cv_en}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            📄 Download my resume (EN)
          </a>
        </div>

        {/* Media (if needed) */}
        <div className="mt-6">
        {/* <Media /> */ /* Uncomment if you want to include the Media component */}
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
