import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import projectThree from "../../assets/projectThree";
import RapportDeProjetLoan from '../../assets/reports/RapportDeProjetLoan.pdf';

const DataScience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Data Science</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ProjectsCard
            title="Simulateur de décision de crédit"
            des="Découvrez notre projet de portefeuille dans lequel nous avons développé un modèle de prédiction des décisions de crédit en utilisant l'algorithme d'apprentissage automatique de l'arbre de décision. Ensuite, nous avons créé une interface intuitive qui permet aux utilisateurs de fournir des informations clés et de déterminer instantanément leur éligibilité à un crédit en utilisant le Framework Flask."
            src={projectThree}
            githubLink="https://github.com/ChrisEssomba/Modelisation-Predictive-Decision-Credit"
            websiteLink={RapportDeProjetLoan}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DataScience;