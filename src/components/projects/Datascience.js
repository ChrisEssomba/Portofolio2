import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import { projectNine, projectFaceRec, PtojectSummarizer, ProjectCreditApproval} from "../../assets/index";
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
            title="Prédiction de Résiliation d’Abonnement (Classification)"
            des={`Comprendre et prédire les résiliations permet aux entreprises d’agir avant qu’il ne soit trop tard. Ce projet utilise l’analyse de données et le machine learning pour construire un système de détection du churn.
            
              🔹 Technologies : Python, Logistic Regression, Random Forest Classifier, XGBoost Classifier, plotly, GridSearchCV, Streamlit, Git 
              `}
            src={projectNine}
            githubLink="https://github.com/ChrisEssomba/Customer_Churn_Prediction"
            websiteLink="https://github.com/ChrisEssomba/Customer_Churn_Prediction"
          />
          <ProjectsCard
            title="Modélisation prédictive des décisions de crédit (Regression)"
            des={`Ce projet vise à identifier les facteurs clés des décisions de crédit, développer un modèle prédictif fiable et proposer une interface intuitive pour évaluer la solvabilité des demandeurs.
            
              🔹 Technologies : Python, Pandas, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook, Flask, Git 
              `}
            src={ProjectCreditApproval}
            githubLink="https://github.com/ChrisEssomba/Modelisation-Predictive-Decision-Credit"
            websiteLink={RapportDeProjetLoan}
          />
           <ProjectsCard
            title="Système de Reconnaissance faciale d'employés (Computer Vision)."
            des={`Un système intelligent basé sur le modèle EfficientNet qui permet d’identifier les employés autorisés et de détecter les intrus, garantissant un accès sécurisé et fluide en entreprise.
            
              🔹 Technologies : Python, Tensorflow, tensorboard, Keras, Sckit-learn, OpenCv, Numpy, Pandas, Matplotlib
              `}
            src={projectFaceRec}
            githubLink="https://github.com/ChrisEssomba/AI-powered-employee-recognition-system"
            websiteLink="https://github.com/ChrisEssomba/AI-powered-employee-recognition-system"
          />
           <ProjectsCard
            title="IA de résumé de texte (NLP)."
            des={`Un système de résumé automatique utilisant un modèle Transformer entraîné sur un important corpus Samsung, générant des résumés concis et pertinents de textes volumineux.

              🔹 Technologies : Python, Transformers, HuggingFace, PyTorch, Docker, SacreBLEU, Rouge_score, Jupyter Notebook, Git
              `}
            src={PtojectSummarizer}
            githubLink="https://github.com/ChrisEssomba/Text-Summarizer-Project"
            websiteLink="https://text-summarizer-projectgit.streamlit.app/"
          />
        </div>
        
      </div>
    
    </motion.div>
  );
};

export default DataScience;