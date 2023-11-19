export const triBulles = (array: number[]) => {
    // On déclare un boolean pour savoir si un changement à eu lieu dans le tableau, si non, c'est que le tableau est trié.
    let isChange: boolean;
    // On uilise Do pour que le code s'effectue au moins une fois
    do {
        // On part du principe qu'aucun changement est nécessaire au début de chaque itérations
        isChange = false;
        //On parcourt le tableau
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Compare et switch les éléments s'ils sont dans le mauvais ordre
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                isChange = true;
            }
        }
    // Si il n'y a pas de chagement, le tableau est trié.
    } while (isChange);

    return array;
};
