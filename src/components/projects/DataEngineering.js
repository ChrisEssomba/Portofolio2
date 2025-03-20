import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import { projectTwo} from "../../assets/index";
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
            title="Visualisation des informations clés sur le COVID-19 sur Tableau"
            des="Ce projet visait à présenter de manière claire et concise les informations les plus pertinentes issues de l'analyse des statistiques de la COVID-19. L'objectif principal était d'utiliser des tableaux interactifs pour visualiser ces données de manière accessible et compréhensible."
            src={projectTwo}
            githubLink={spanishCerfificate}
            websiteLink="https://public.tableau.com/app/profile/chris.essomba/viz/CovidDeathsVisualization_16845886904710/Tableaudebord1"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DataEngineering;