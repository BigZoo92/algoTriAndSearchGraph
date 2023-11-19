import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import "./sass/main.scss";
import "./style.scss";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { generateSearchGraphData } from "./utils/data/sort";
import { Loader } from "./components/loader";
import { sortOptions, searchOptions } from "./constant";
import { Data } from "./types";
import { getTime } from "./utils/data/search/getTimeSearch";
import { getDatasetsSearch } from "./utils/data/search/getDatasetsSearch";
import Car from "./components/car";

// Enregistre les éléments nécessaires de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const App = () => {
  const [datasetsTri, setDatasetsTri] = useState<Data[]>([]);
  const [datasetsSearch, setDatasetsSearch] = useState<Data | null>(null);
  const [selectedArraySize, setSelectedArraySize] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSelectChange = (event: SelectChangeEvent<number>) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedArraySize(Number(event.target.value));
    }, 1000);
  };

  // Obtenir les ensembles de données triées pour le graphique de recherche
  useEffect(() => {
    if (datasetsTri.length === 0) {
      const fetchTriData = async () => {
        const graphData = await generateSearchGraphData();
        setDatasetsTri(graphData);
      };
      setTimeout(() => {
        fetchTriData();
      }, 5000);
    }
  }, [datasetsTri]);

  useEffect(() => {
    if (selectedArraySize === 0) return;

    // Génère un tableau trié pour la recherche
    const sortedArray = Array.from(
      { length: selectedArraySize },
      (_, index) => index + 1
    );

    // Obtient les ensembles de données pour la recherche
    setDatasetsSearch(
      getDatasetsSearch(getTime(sortedArray, selectedArraySize))
    );
    setIsLoading(false);
  }, [selectedArraySize]);

  useEffect(() => {
    if (isLoading) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "visible";
    }
  }, [isLoading]);

  return (
    <main>
      {datasetsTri.length === 0 ? (
        <Loader />
      ) : (
        <>
          <h1 className="title">Qui est le plus rapide ?</h1>
          <section>
            <div>
              <h2>Algorithmes de tri</h2>
              {datasetsTri.map((data, index) => (
                //@ts-ignore
                <Line key={index} options={sortOptions} data={data} />
              ))}
            </div>
            <div>
              <h2>Algorithmes de recherche</h2>
              <div>
                <Box sx={{ minWidth: 300, width: "50%" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Sélectionnez une taille de tableau
                    </InputLabel>
                    <Select
                      label="Sélectionnez le tableau"
                      id="arraySize"
                      value={selectedArraySize}
                      onChange={(e) => onSelectChange(e)}
                      fullWidth
                    >
                      <MenuItem value="" disabled defaultChecked>
                        Veuillez sélectionner une taille de tableau
                      </MenuItem>
                      <MenuItem value={1000000}>
                        Tableau de 1 000 000 éléments
                      </MenuItem>
                      <MenuItem value={2500000}>
                        Tableau de 2 500 000 éléments
                      </MenuItem>
                      <MenuItem value={5000000}>
                        Tableau de 5 000 000 éléments
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div>
                {isLoading && (
                  <div
                    style={{
                      width: "100%",
                      height: "100vh",
                      position: "absolute",
                      inset: 0,
                    }}
                  >
                    <Car isLoading={isLoading} />
                  </div>
                )}
                {datasetsSearch && (
                  //@ts-ignore
                  <Bar options={searchOptions} data={datasetsSearch} />
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};
