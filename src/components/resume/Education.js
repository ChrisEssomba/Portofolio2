import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Formations Universitaires</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cycle ingénieur en informatique, majeure BIG DATA & IA"
            subTitle="ESAIP école d'ingénieurs (Sept 2022 - Sept 2025)"
      
            des={`Formation d'ingénieurs spécialisés en intelligence artificielle et Big Data.
              Concepts développés : gestion de projets agile, Intelligence Artificielle, Machine Learning, Deep Learning, Big Data dans le Cloud, Visualisation de données...`}
            
          />
           <ResumeCard
            title="Formation en ingénierie et système de données (Erasmus-M1)"
            subTitle="Université Polytechnique de Madrid (Jan 2024 - juin 2024)" 
            
            des={`Échange académique Erasmus de Janvier à Juin 2024.
              Compétences acquises : Machine Learning, Computer Vision, Big Data dans le Cloud, Espagnol niveau B2...`}
            
          />
          <ResumeCard
            title="Formation en informatique (Erasmus-L3)"
            subTitle="New Bulgarian University (Fev 2023 - Juil 2023)"
            
            des={`Échange académique Erasmus de février à juillet, 
            compétences acquises : Programmation Java, Système d'exploitation Linux, introduction au Cloud, anglais niveau B2.`}
          />
          <ResumeCard
            title="Classes préparatoires en mathématiques"
            subTitle="Institut Universitaire de la côte (sept 2020 - Juin 2022)"
            
            des="Concepts développés : Python, R, C, mathématiques appliquées, algorithmie, science de l'ingénieur."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Data Science IBM Professional Certificate "
            subTitle="Coursera - (01/01/2023 - 20/06/2023) [6 mois]"
            result="Online"
            des="Formation complète visant à la découverte et à la maîtrise des différents outils indispensables pour un excellent data scientist !"
          />
          <ResumeCard
            title=" Azure AI fundamentals "
            subTitle="Microsoft - (28/09/2023 - 18/10/2023) [3 semaines]"
            result="Online"
            des="Formation d'introduction à l'implémentation des services de la solution Azure Cloud pour les projets de machines learning et de deep learning."
          />
              <ResumeCard
            title=" MATLAB Onramp Certification"
            subTitle="MATLAB - (06/10/2022 - 09/11/2023) [1 mois]"
            result="Online"
            des="Formation visant à la maitrise du logiciel Matlab."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education