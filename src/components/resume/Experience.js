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
            title="Stage Developpeur Commercial"
            subTitle="IKADRAN [Jun-Aout 2023]"
          
            des="Apprendre les techniques de prospection commerciale et les mettre en œuvre pour atteindre les objectifs de vente."
          />
          <ResumeCard
            title="Stage Developpeur Python"
            subTitle="Commercial Bank Cameroon [Jul-Aout 2022]"
            
            des="Réalisation d'une application web recevant les alertes émanant des divers équipements du réseau. L'objectif de cette application est de classer ces alertes en fonction de leur degré de gravité et de proposer des moyens de les résoudre."
          />
          <ResumeCard
            title="Stage Analyste de crédit"
            subTitle="Commercial Bank Cameroon [Jun-Aout 2021]"
            
            des="T

            Acquérir des compétences analytiques pointues, notamment dans l'analyse des dossiers de crédit bancaire, ainsi que des compétences en communication.
                      Taches :
          •Réalisation supervisée des rapports de
          contre analyse
          •Rédaction des procès verbaux
          •Présentation des rapports réalisés"
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
