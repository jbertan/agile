import RadarComponent from "./radar";
interface props {
  tasks: any;
}
const RadarContainer = ({ tasks }: props) => {
  return (
    <div className="radar">
      <RadarComponent tasks={tasks} />
    </div>
  );
};
export default RadarContainer;
