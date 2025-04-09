import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">Experiences professionelles</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Alternant Data Scientist (1 an)"
            subTitle="Institut national de l'environnement industriel et des risques (INERIS)"
            des={`Objectif: Développement de méthodologies basées surl’IA pour l’évaluation de la toxicité des substances chimiques.
            
              Missions: 
              •Automatisation de l'extraction et du traitement de données issues d’articles scientifiques.
              •Fine tuning et deploiement de modèles ML dans le Cloud
              •Integration de données multisources et développement de pipelines de traitement.
              
              Outils: Azure Data Factory, Azure Kubernetes, Docker, Transformers, NLP, GIt

              `}

          />
           <ResumeCard
            title="Machine Learning Engineer Stagiaire (3 Mois)"
            subTitle="Polytechnique de Madrid"
            des={`Objectif : Développement d’un système de vision par ordinateur pour la détection et le suivi de poissons.
                
              Mission:
                •Annotation et préparation des données
                •Traitement avancé des images à l’aide de filtres (Gaussien, Canny, Passe-Haut).
                •Optimisation d'un modèle ML pour la détection.
                
              Outil: YOLOvt, Git, Cvat, Tensorflow, Computer vision
              `}
          />
  
          <ResumeCard
            title="Stage Developpeur Python (2 Mois)"
            subTitle="Commercial Bank Cameroon [Jul-Aout 2022]"
            
            des="Réalisation d'une application web recevant les alertes émanant des divers équipements du réseau. L'objectif de cette application est de classer ces alertes en fonction de leur degré de gravité et de proposer des moyens de les résoudre."
          />
        
        </div>
      </div>
      
    </motion.div>
  );
};
 /**
  *          <ResumeCard
            title="Stage Developpeur Commercial (2 Mois)"
            subTitle="IKADRAN [Jun-Aout 2023]"
          
            des="Apprendre les techniques de prospection commerciale et les mettre en œuvre pour atteindre les objectifs de vente."
          />
  * <ResumeCard
            title="Stage Analyste de crédit (3 Mois)"
            subTitle="Commercial Bank Cameroon [Jun-Aout 2021]"
            
            des="T

            Acquérir des compétences analytiques pointues, notamment dans l'analyse des dossiers de crédit bancaire, ainsi que des compétences en communication.
                      Taches :
          •Réalisation supervisée des rapports de
          contre analyse
          •Rédaction des procès verbaux
          •Présentation des rapports réalisés"
          />*/
export default Experience;
