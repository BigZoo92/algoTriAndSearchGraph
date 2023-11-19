import { AlgoTime, Dataset } from "../../../types";

export const getDatasets = (borderColor: string[], backgroundColor: string[], algoTime: AlgoTime): Dataset[] => {
  // Initialisez le tableau de jeux de données.
  const datasets: Dataset[] = Object.entries(algoTime).map(([key, value], index) => {
    // Créez un objet Dataset pour chaque entrée dans algoTime.
    return {
      label: key,
      data: value,
      borderColor: borderColor[index],
      backgroundColor: backgroundColor[index],
    };
  });

  return datasets;
};
