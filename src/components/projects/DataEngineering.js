import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import {projectTen} from "../../assets/index";
import spanishCerfificate from '../../assets/reports/spanishCerfificate.pdf';

const DataEngineering = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Data Engineering</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Pipeline de Visualisation des Cryptomonnaies en Temps Réel"
            des="Il s'agit d'une application qui récupère et affiche en temps réel les dernières données sur les cryptomonnaies via une API. Développée avec Flask, elle est déployée à l’aide de Docker et Azure Kubernetes pour assurer scalabilité et performance"
            src={projectTen}
            githubLink="https://github.com/ChrisEssomba/App1CloudComputing"
            websiteLink="https://github.com/ChrisEssomba/App1CloudComputing"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DataEngineering;