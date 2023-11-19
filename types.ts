export interface AlgoTime {
  triBulles: number[] | null;
  triFusion: number[] | null;
  triInsertion: number[] | null;
} 

export interface Dataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

export interface Data {
  labels: number[];
  datasets: Dataset[];
}