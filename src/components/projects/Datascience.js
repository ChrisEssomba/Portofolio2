import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import {projectThree, projectNine} from "../../assets/index";
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
            title="Prédiction de Résiliation d’Abonnement"
            des="Ce projet utilise des modèles de machine learning de classification pour identifier les clients les plus susceptibles de résilier leur abonnement. L’objectif est d’aider les entreprises à améliorer leurs services et à renforcer la fidélisation de leur clientèle."
             src={projectNine}
            githubLink="https://github.com/ChrisEssomba/Customer_Churn_Prediction"
            websiteLink="https://github.com/ChrisEssomba/Customer_Churn_Prediction"
          />
          <ProjectsCard
            title="Simulateur de décision de crédit"
            des="Ce projet combine apprentissage automatique et accessibilité. Grâce à un modèle basé sur un arbre de décision, il évalue l’éligibilité au crédit. Une interface intuitive, développée avec Flask, permet aux utilisateurs d’entrer leurs informations et d’obtenir une réponse instantanée."
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