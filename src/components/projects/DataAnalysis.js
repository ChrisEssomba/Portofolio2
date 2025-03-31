import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import { projectOne,projectTwo, projectFour, projectSeven} from "../../assets/index";
import RapportDeProjetCovid from '../../assets/reports/RapportDeProjetCovid.pdf';
import RapportProjetSondage from '../../assets/reports/RapportProjetSondage.pdf';
import spanishCerfificate from '../../assets/reports/spanishCerfificate.pdf';

const DataAnalysis = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Data Analysis</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Analyse statistique des données de la Covid 19 sur Jupyter NoteBook et PostgreSQL"
            des={`Ce projet vise à exploiter les données officielles de la pandémie pour répondre à des questions clés comme :

              🔹 Quels facteurs ont influencé la propagation et la gravité du COVID-19 ?
              🔹 Quel a été l’impact de la vaccination sur la transmission et la mortalité ?

              L’analyse permet de mieux comprendre les dynamiques de la pandémie et l’efficacité des mesures de prévention.`}
         
            src={projectOne}
            githubLink="https://github.com/ChrisEssomba/Analyse-des-donnees-de-la-Covid-19"
            websiteLink={RapportDeProjetCovid}
          />
          <ProjectsCard
            title="Analyse du Marché de la Data sur PowerBI."
            des={`Dans le but d’approfondir ma compréhension du marché de la Data, j’ai mené une analyse basée sur les données d’un sondage réalisé auprès de professionnels du domaine. Cette étude vise a éclairer des intérrogations telles que :
              
              🔹 Quelles sont les compétences les plus demandées selon les secteurs ?
              🔹 Comment les fourchettes salariales évoluent-elles en fonction du métier, de l’expérience et du secteur ?
                `}
            
            src={projectFour}
            githubLink="https://github.com/ChrisEssomba/Analyse-de-Sondage"
            websiteLink={RapportProjetSondage}
          />
           <ProjectsCard
            title="Cartographie Interactive de la Criminalité en France"

            des={`Ce projet propose une visualisation interactive de la criminalité en France. Chaque département est coloré selon son indice de criminalité, offrant une lecture rapide des disparités régionales.

              En sélectionnant un département, on accède à des données détaillées :
              🔹 Types de délits les plus fréquents
              🔹 Évolution de l’indice de criminalité sur trois ans
              🔹 Autres statistiques clés
              `}

          src={projectSeven} /*image à mettre*/
            /*githubLink={}*/
            websiteLink="https://stat-delits.streamlit.app/"
          />
            <ProjectsCard
            title="Tableau de Bord COVID-19 sur Tableau"
            des={`Ce tableau de bord offre une visualisation des informations essentielles issues des données de la pandémie de COVID-19. 
            Il met en évidence les tendances clés, facilitant l’analyse de l’évolution de la pandémie et de ses impacts."
              `}
            src={projectTwo}
            /*githubLink={}*/
            websiteLink="https://public.tableau.com/app/profile/chris.essomba/viz/CovidDeathsVisualization_16845886904710/Tableaudebord1"
          />
      
        </div>
      </div>
    </motion.div>
  );
};

export default DataAnalysis;