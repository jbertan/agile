import { _categories } from "./database";
/* export enum _categories {
  discovery = "discovery",
  delivery = "delivery",
  predictability = "predictability",
  efficiency_waste = "efficiency_waste",
  comms_interactions = "comms_interactions",
  scalability = "scalability",
  culture = "culture", */
interface Iinitialreducers {
  discovery: string[];
  delivery: string[];
  predictability: string[];
  efficiency: string[];
  comms: string[];
  scalability: string[];
  culture: string[];
  mail: string;
  number: number;
}
export const initialReducers: Iinitialreducers = {
  discovery: [],
  delivery: [],
  predictability: [],
  efficiency: [],
  comms: [],
  scalability: [],
  culture: [],
  mail: "",
  number: 0,
};
export const reducerFunctions = (
  state: typeof initialReducers,
  action: any
) => {
  switch (action.type) {
    case _categories.discovery:
      return {
        ...state,
        discovery: [...state.discovery, action.payload],
      };
    case _categories.comms_interactions:
      return {
        ...state,
        comms: [...state.comms, action.payload],
      };
    case _categories.culture:
      return {
        ...state,
        culture: [...state.culture, action.payload],
      };
    case _categories.delivery:
      return {
        ...state,
        delivery: [...state.delivery, action.payload],
      };
    case _categories.efficiency_waste:
      return {
        ...state,
        efficiency: [...state.efficiency, action.payload],
      };
    case _categories.scalability:
      return {
        ...state,
        scalability: [...state.scalability, action.payload],
      };
    case _categories.predictability:
      return {
        ...state,
        predictability: [...state.predictability, action.payload],
      };
    case "mail":
      return {
        ...state,
        mail: action.payload,
      };
    default:
      throw new Error();
  }
};
