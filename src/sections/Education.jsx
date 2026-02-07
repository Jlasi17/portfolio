import { Timeline } from "../components/Timeline";
import { educationData } from "../constants";

const Education = () => {
  return (
    <div className="w-full">
      <Timeline data={educationData} />
    </div>
  );
};

export default Education;