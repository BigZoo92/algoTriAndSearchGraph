export const dichoSearch = (sortedArray: number[], target: number): number => {
  let start = 0;
  let end = sortedArray.length - 1;

  // Continue la recherche tant que la plage de recherche est valide
  while (start <= end) {
    // Calcul du milieu de la plage de recherche
    const middle = Math.floor((start + end) / 2);

    // Si l'élément au milieu est la cible, renvoie son indice
    if (sortedArray[middle] === target) {
      return middle;
    } 
    // Si la cible est plus grande, réduit la plage à la moitié droite
    else if (sortedArray[middle] < target) {
      start = middle + 1;
    } 
    // Si la cible est plus petite, réduit la plage à la moitié gauche
    else {
      end = middle - 1;
    }
  }

  // Si la cible n'est pas trouvée, renvoie -1
  return -1;
};
