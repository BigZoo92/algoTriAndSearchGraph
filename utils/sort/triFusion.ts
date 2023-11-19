export const triFusion = (array: number[]): number[] => {
    // Un tableau contenant 1 ou aucun élément est trié, on le retourne.
    if (array.length <= 1) {
        return array;
    }

    // On calcul la moitié du tableau
    const middle = Math.floor(array.length / 2);
    // On sépare le tableau en deux autrs tableaux à partir du milieu
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Fonction pour merge deux tableaux triés en un 
    const merge = (left: number[], right: number[]): number[] => {
        const result: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // Tant que les tableaux ne sont pas vides
        while (leftIndex < left.length && rightIndex < right.length) {
            // On push dans resultat l'élément le plus petit des deux tableaux de sorte à avooir un tableau trié à la fin.
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        // Si il reste des éléments, on les ajoutes à resultat et on le retourne 
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    };
    
    return merge(triFusion(left), triFusion(right));
};
