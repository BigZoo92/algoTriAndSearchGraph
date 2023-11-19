import { Data } from "../../../types";

export const getDatasetsSearch = (
  searchTime: number[]
): Data => {
  const datasets: Data = {
    labels: [5000000],
    datasets: [
        {
          label: "Dichotomie Search Time",
          data: [searchTime[0]],
          borderColor: "#83c5be",
          backgroundColor: "#e29578",
        },
        {
          label: "Simple Search Time",
          data: [searchTime[1]],
          borderColor: "#83c5be",
          backgroundColor: "#83c5be",
        },
      ]
  }

  return datasets;
};
