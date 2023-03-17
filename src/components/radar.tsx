import { Radar } from "react-chartjs-2";
import { _categories } from "@/helper/database";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
interface props {
  tasks: any;
}
interface ChartProps {
  data: any;
  options: {
    scale?: {
      ticks?: {
        min?: number;
        max?: number;
      };
    };
  };
}
const RadarComponent = ({ tasks }: props) => {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  const discoveryHandler = () => {
    const length = tasks.discovery.length;
    const init = 0;
    const total = tasks.discovery.reduce(
      (acc: number, curr: number) => acc + curr,
      init
    );
    const result = total / length;
    return result;
  };
  const deliveryHandler = () => {
    const length = tasks.delivery.length;
    const init = 0;
    const total = tasks.delivery.reduce(
      (acc: number, curr: number) => acc + curr,
      init
    );
    const result = total / length;
    return result;
  };
  const predictabilitiyHandler = () => {
    const length = tasks.predictability.length;
    const init = 0;
    const total = tasks.predictability.reduce(
      (acc: number, curr: number) => acc + curr,
      init
    );
    const result = total / length;
    return result;
  };
  const efficiencyHandler = () => {
    const length = tasks.efficiency.length;
    const init = 0;
    const total = tasks.efficiency.reduce(
      (acc: number, curr: number) => acc + curr,
      init
    );
    const result = total / length;
    return result;
  };
  const commsHandler = () => {
    const length = tasks.comms.length;
    const init = 0;
    const total = tasks.comms.reduce(
      (acc: number, curr: number) => acc + curr,
      init
    );
    const result = total / length;
    return result;
  };
  const scalabilityHandler = () => {
    const length = tasks.scalability.length;
    const init = 0;
    const total = tasks.scalability.reduce(
      (acc: number, curr: number) => acc + curr,
      init
    );
    const result = total / length;
    return result;
  };
  const cultureHandler = () => {
    const length = tasks.culture.length;
    const init = 0;
    const total = tasks.culture.reduce(
      (acc: number, curr: number) => acc + curr,
      init
    );
    const result = total / length;
    return result;
  };
  const options = {
    scales: {
      r: {
        min: 0,
        max: 10,
      },
    },
  };
  const data = {
    labels: [
      "Discovery",
      "Delivery",
      "Predictability",
      "Efficiency/Waste",
      "Comms & Interactions",
      "Scalability",
      "Culture",
    ],
    datasets: [
      {
        label: "Performance Analyses",
        data: [
          discoveryHandler(),
          deliveryHandler(),
          predictabilitiyHandler(),
          efficiencyHandler(),
          commsHandler(),
          scalabilityHandler(),
          cultureHandler(),
        ],
        backgroundColor: "rgba(51, 201, 221, 0.2)",
        borderColor: "rgba(51, 201, 221, 1)",
        borderWidth: 3,
      },
    ],
  };
  return <Radar data={data} options={options} />;
};
export default RadarComponent;
