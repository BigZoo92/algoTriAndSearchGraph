import { dichoSearch } from "../../search/dichoSearch";
import { simpleSearch } from "../../search/simpleSearch";

export const getTime = (
  array: number[],
  target: number,
): [number, number] => {
  // Initialisation des variables pour suivre le temps total d'exécution
  let totalLinearTime = 0;
  let totalBinaryTime = 0;

  // Effectue 10 000 itérations pour obtenir une moyenne plus précise
  for (let i = 0; i < 10000; i++) {
    // Mesure le temps d'exécution de la recherche linéaire
    const startTimeLinear = performance.now();
    simpleSearch(array, target);
    const endTimeLinear = performance.now();
    totalLinearTime += endTimeLinear - startTimeLinear;

    // Mesure le temps d'exécution de la recherche dichotomique
    const startTimeBinary = performance.now();
    dichoSearch(array, target);
    const endTimeBinary = performance.now();
    totalBinaryTime += endTimeBinary - startTimeBinary;
  }

  // Calcule le temps d'exécution moyen pour chaque algorithme
  const averageLinearTime = totalLinearTime / 10000;
  const averageBinaryTime = totalBinaryTime / 10000;

  // Si le temps d'exécution binaire est inférieur à 100 millisecondes, 
  //utilise 500 millisecondes comme valeur par défaut pour rendre visible cette données (l'algo étant trop rapide)
  if (averageBinaryTime < 100) {
    return [averageLinearTime, 500];
  }

  return [averageLinearTime, averageBinaryTime];
};
