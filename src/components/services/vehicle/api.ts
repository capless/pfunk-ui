import axios from "axios";
import { IVehicleResponse } from "./interface";

export const getVehicles = (): Promise<IVehicleResponse[]> =>
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data)
    .then(() => [
      {
        stages: "Published",
        id: "cl1prx8u7c7",
        createdBy: "Brian Jinwright",
        updatedBy: "Brian Jinwright",
        make: "BMW",
        year: 2008,
        model: "535i",
      },
      {
        stages: "Not Published",
        id: "1cl1prx8u7c",
        createdBy: "Jason Doe",
        updatedBy: "Jason Doe",
        make: "Honda",
        year: 2019,
        model: "Civic",
      },
    ]);
