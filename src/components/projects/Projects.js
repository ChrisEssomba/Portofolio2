import React, { useState } from 'react';
import Title from '../layouts/Title';
import DataScience from './DataScience';
import DataAnalysis from './DataAnalysis';
import DataEngineering from './DataEngineering';

const Projects = () => {
  const [dataScienceData, setDataScienceData] = useState(true);
  const [dataAnalysisData, setDataAnalysisData] = useState(false);
  const [dataEngineeringData, setDataEngineeringData] = useState(false);

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="Mes Projets" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li
            onClick={() =>
              setDataScienceData(true) &
              setDataAnalysisData(false) &
              setDataEngineeringData(false)
            }
            className={`${
              dataScienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Data Science
          </li>
          <li
            onClick={() =>
              setDataScienceData(false) &
              setDataAnalysisData(true) &
              setDataEngineeringData(false)
            }
            className={`${
              dataAnalysisData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Data Analysis
          </li>
          <li
            onClick={() =>
              setDataScienceData(false) &
              setDataAnalysisData(false) &
              setDataEngineeringData(true)
            }
            className={`${
              dataEngineeringData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Data Engineering
          </li>
        </ul>
      </div>
      {dataScienceData && <DataScience />}
      {dataAnalysisData && <DataAnalysis />}
      {dataEngineeringData && <DataEngineering />}
    </section>
  );
};

export default Projects;