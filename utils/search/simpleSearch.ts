export const simpleSearch = (array: number[], target: number): number => {
  // Parcours linéaire du tableau
  for (let i = 0; i < array.length; i++) {
    // Si l'élément actuel est égal à la cible, renvoie son indice
    if (array[i] === target) {
      return i;
    }
  }

  // Si la cible n'est pas trouvée, renvoie -1
  return -1;
};
