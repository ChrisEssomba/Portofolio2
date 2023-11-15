import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import RapportDeProjetCovid from '../../assets/reports/RapportDeProjetCovid.pdf';
import RapportDeProjetLoan from '../../assets/reports/RapportDeProjetLoan.pdf';
import RapportProjetSondage from '../../assets/reports/RapportProjetSondage.pdf';


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="Mes Projets"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Analyse des statistiques de la Covid 19 sur Jupyter NoteBook et PostgreSQL"
          des=" Ce projet avait pour objectif d'effectuer une analyse approfondie des données relatives à la pandémie de COVID-19, en se concentrant sur la réponse à des questions et problématiques telles que :
          Quels sont les facteurs qui influencent la propagation et la gravité du COVID-19 ?
          Quel est l'impact de la vaccination sur la propagation et la mortalité liées au virus ?
          "
          src={projectOne}
          githubLink="https://github.com/ChrisEssomba/Analyse-des-donnees-de-la-Covid-19"
          websiteLink={RapportDeProjetCovid}

        />
        <ProjectsCard
          title="Visualisation des informations clés sur le COVID-19 sur Tableau"
          des=" Ce projet visait à présenter de manière claire et concise les informations les plus pertinentes issues de l'analyse des statistiques de la COVID-19. L'objectif principal était d'utiliser des tableaux interactifs pour visualiser ces données de manière accessible et compréhensible.
        " src={projectTwo}
          githubLink="https://github.com/ChrisEssomba/Analyse-des-donnees-de-la-Covid-19"
          websiteLink="https://public.tableau.com/app/profile/chris.essomba/viz/CovidDeathsVisualization_16845886904710/Tableaudebord1"
        />
        <ProjectsCard
          title="simulateur de decision de credit"
          des=" Découvrez notre projet de portefeuille dans lequel nous avons développé un modèle de prédiction des décisions de crédit en utilisant l'algorithme d'apprentissage automatique de l'arbre de décision. Ensuite, nous avons créé une interface intuitive qui permet aux utilisateurs de fournir des informations clés et de déterminer instantanément leur éligibilité à un crédit en utilisant le Framework Flask."
          src={projectThree}
          githubLink="https://github.com/ChrisEssomba/Modelisation-Predictive-Decision-Credit"
          websiteLink={RapportDeProjetLoan}
        />
        <ProjectsCard
          title="Analyse des données d'un sondage sur les professionnels de la data avec Power BI."
          des=" Dans ce projet captivant, j'ai exploité un sondage auprès de 630 professionnels de la data pour découvrir les tendances et les facteurs clés qui influencent les salaires. En utilisant Power BI, j'ai créé des visualisations percutantes pour identifier les métiers les mieux rémunérés, les langages de programmation les plus populaires et les préférences professionnelles. Les résultats ont révélé des insights passionnants sur l'impact du pays de travail sur les salaires. Une analyse approfondie qui ouvre de nouvelles perspectives dans le monde de la data.</p>
          "src={projectFour}
          githubLink="https://github.com/ChrisEssomba/Analyse-de-Sondage"
          websiteLink={RapportProjetSondage}
        />
        
      </div>
    </section>
  );
}

export default Projects