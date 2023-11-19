import {
  algoDataSets,
  labels,
  borderColor,
  backgroundColor,
} from "../../../constant";
import { getTime } from "./getTime";
import { getDatasets } from "./getDatasets";
import { Data } from "../../../types";

// Fonction utilitaire pour générer des données pour le graphique
export const generateSearchGraphData = async (): Promise<Data[]> => {
  // Initialise le tableau de données
  const tabData: Data[] = [];

  // Parcours des différentes configurations d'algorithmes et de tailles de tableau
  algoDataSets.forEach((algoDataSet, i) => {
    // Génère des ensembles de données pour chaque taille de tableau spécifiée dans labels
    const datasets = labels[i].map((quantity) => {
      // Génère un tableau de nombres aléatoires pour représenter les données
      const data = Array.from({ length: quantity }, () =>
        Math.floor(Math.random() * 100)
      );
      // Mesure le temps d'exécution de l'algorithme sur le tableau généré
      getTime(data, algoDataSet);
      return data;
    });

    // Crée des ensembles de données compatibles avec Chart.js
    const datasetsForAlgorithm = getDatasets(
      borderColor,
      backgroundColor,
      algoDataSet
    );

    // Construit l'objet de données final pour une configuration d'algorithme et de taille de tableau
    const data = {
      labels: labels[i],
      datasets: datasetsForAlgorithm,
    };

    // Ajoute l'objet de données au tableau principal
    tabData.push(data);
  });

  // Retourne le tableau complet de données pour les graphiques
  return tabData;
};
