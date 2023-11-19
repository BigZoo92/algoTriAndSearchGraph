import { AlgoTime } from "../../../types";
import { triBulles, triFusion, triInsertion } from "../../index";

export const getTime = async(array: number[], algoData: AlgoTime) => {
  // Fonction pour mesurer le temps d'exécution d'un algorithme de tri
  const measureTime = (sortingFn: (arr: number[]) => void, targetArray: number[]) => {
    const startTime = performance.now();
    sortingFn(array);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    targetArray.push(executionTime);
  };

  // Vérifiez si triFusion est demandé et mesurez son temps d'exécution
  if (algoData.triFusion) {
    measureTime(triFusion, algoData.triFusion);
  }

  // Vérifiez si triBulles est demandé et mesurez son temps d'exécution
  if (algoData.triBulles) {
    measureTime(triBulles, algoData.triBulles);
  }

  // Vérifiez si triInsertion est demandé et mesurez son temps d'exécution
  if (algoData.triInsertion) {
    measureTime(triInsertion, algoData.triInsertion);
  }
};
