import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Action bénévole</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Les restos du coeur"
            subTitle="(06/10/2022 - 05/10/2023) [12 months]"
            
            des="En tant que bénévole, j'ai eu l'occasion de contribuer à diverses missions au sein de notre centre. Parmi celles-ci, j'ai participé activement à la distribution de repas aux bénéficiaires, me permettant ainsi de mieux comprendre leur situation et de leur offrir un peu de réconfort."
          />
      
      
        </div>
      </div>
     
      
    </motion.div>
  );
};

export default Achievement;
