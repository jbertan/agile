import RadarComponent from "./radar";
import { useRouter } from "next/router";
interface props {
  tasks: any;
}
const RadarContainer = ({ tasks }: props) => {
  const router = useRouter();
  const nextHandler = () => {
    router.replace("https://www.agileonrails.com/?source=survey");
  };
  return (
    <div className="radar">
      <RadarComponent tasks={tasks} />
      <button className="button" onClick={nextHandler}>
        Next &rArr;
      </button>
      <p className="radar__warnings">
        You are being redirected to the agileonrails.com.
      </p>
    </div>
  );
};
export default RadarContainer;
