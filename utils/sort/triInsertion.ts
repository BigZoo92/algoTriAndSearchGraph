export const triInsertion = (array: number[]) => {
    for (let i = 1; i < array.length; i++) {
        const actualElement = array[i];
        let previousElement = i - 1;

        // Tant que l'élément précédent est plus grand que l'élément actuel
        while (previousElement >= 0 && array[previousElement] > actualElement) {
            // On décale l'élément précédent d'une position vers la droite.
            array[previousElement + 1] = array[previousElement];
            // On décale vers la gauche l'élément précédent pour le comparer à l'élément suivant
            previousElement--;
        }
        // On insère l'élément à la bonne place
        array[previousElement + 1] = actualElement;
    }

    return array;
};
