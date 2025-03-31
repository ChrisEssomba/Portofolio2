import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import { projectOne, projectEight} from "../../assets/index";
import RapportDeProjetCovid from '../../assets/reports/RapportDeProjetCovid.pdf';
import RapportProjetSondage from '../../assets/reports/RapportProjetSondage.pdf';

const OpenSource = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Open Source</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Script python permettant de flouter des videos des visages en temps reél"
            des="Ce projet Open vise à regrouper des scripts Python automatisant des tâches spécifiques, réutilisables dans d’autres projets. J’y ai contribué en partageant un script basé sur OpenCV et le deep learning, capable de détecter et flouter les visages sur des images, vidéos et flux webcam."
            src={projectEight}
            githubLink="https://github.com/ChrisEssomba/Python-Scripts/tree/new-script/Real-Time-Face-Blurring-Tool"
            websiteLink="https://github.com/ChrisEssomba/Python-Scripts/tree/new-script/Real-Time-Face-Blurring-Tool"
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default OpenSource;