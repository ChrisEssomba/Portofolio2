import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import { projectOne,projectTwo, projectFour} from "../../assets/index";
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
            title="Analyse des statistiques de la Covid 19 sur Jupyter NoteBook et PostgreSQL"
            des="Ce projet avait pour objectif d'effectuer une analyse approfondie des données relatives à la pandémie de COVID-19, en se concentrant sur la réponse à des questions et problématiques telles que : Quels sont les facteurs qui influencent la propagation et la gravité du COVID-19 ? Quel est l'impact de la vaccination sur la propagation et la mortalité liées au virus ?"
            src={projectOne}
            githubLink="https://github.com/ChrisEssomba/Analyse-des-donnees-de-la-Covid-19"
            websiteLink={RapportDeProjetCovid}
          />
          <ProjectsCard
            title="Analyse des données d'un sondage sur les professionnels de la data avec Power BI."
            des="Dans ce projet captivant, j'ai exploité un sondage auprès de 630 professionnels de la data pour découvrir les tendances et les facteurs clés qui influencent les salaires. En utilisant Power BI, j'ai créé des visualisations percutantes pour identifier les métiers les mieux rémunérés, les langages de programmation les plus populaires et les préférences professionnelles. Les résultats ont révélé des insights passionnants sur l'impact du pays de travail sur les salaires. Une analyse approfondie qui ouvre de nouvelles perspectives dans le monde de la data."
            src={projectFour}
            githubLink="https://github.com/ChrisEssomba/Analyse-de-Sondage"
            websiteLink={RapportProjetSondage}
          />
           <ProjectsCard
            title="Mise en place d'une cartographie des délits commits en France par departement"
            des="Ce projet avait pour but de présenter la carte de la France avec ses departement colorés dont l'intensité de la couleur indinque l'indice de criminalité, selectionnant un deparement, on peut obtenir une table detaillants des informations additionnelle comme le types de delits les plus reccurents, l'evolution de l'indice de criminalité au fil des 3 dernieres années et bien d'autres."
            src={projectTwo} /*image à mettre*/
            /*githubLink={}*/
            websiteLink="https://stat-delits.streamlit.app/"
          />
            <ProjectsCard
            title="Visualisation des informations clés sur le COVID-19 sur Tableau"
            des="Ce projet visait à présenter de manière claire et concise les informations les plus pertinentes issues de l'analyse des statistiques de la COVID-19. L'objectif principal était d'utiliser des tableaux interactifs pour visualiser ces données de manière accessible et compréhensible."
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