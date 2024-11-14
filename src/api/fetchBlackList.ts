import { Car } from "../interfaces/car";

export const fetchBlackList = async (): Promise<Car[]> => {
  const reponse = await fetch("https://6735a93f5995834c8a939733.mockapi.io/nfs/black_list", { method: "GET" });
  return reponse.json();
};
