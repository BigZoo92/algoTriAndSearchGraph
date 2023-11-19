import { AlgoTime } from "./types";

// Options pour Chart.js
export const sortOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Temps de tri en fonction de la taille du tableau à trier",
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'Taille du tableau à trier',
      },
    },
    y: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: 'Temps en millisecondes',
      },
    },
  },
};

// Fonction pour personnaliser les options pour les graphiques de recherche
export const searchOptions = (option = sortOptions) => {
  option.plugins.title.text = "Temps de recherche en fonction de la taille du tableau à trier";
  return option;
}

// Tableau des longueurs pour tous les tableaux à trier par algorithme
export const labels = [
  [1000, 5000, 10000, 50000],
  [50000, 100000, 300000],
  [500000, 750000, 1000000]
];

// Styles du graphique
export const borderColor = ["#e29578", "#025158", "#83c5be"];
export const backgroundColor = borderColor;

// Initialisation des données des algorithmes
export const algoDataSets: AlgoTime[] = [
  {
    triFusion: [],
    triInsertion: [],
    triBulles: [],
  },
  {
    triFusion: [],
    triInsertion: [],
    triBulles: null,
  },
  {
    triFusion: [],
    triInsertion: null,
    triBulles: null,
  }
];
