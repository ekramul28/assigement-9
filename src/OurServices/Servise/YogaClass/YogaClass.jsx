import { useLoaderData } from "react-router-dom";
import Yoga from "../../../Components/Yoga/Yoga";
import OurServices from "../../OurServices";

const YogaClass = () => {
  const yogaData = useLoaderData();
  return (
    <div >
      <h1 className="text-3xl font-bold text-center my-8"><span className="text-orange-500">YOGA</span> CLASS TIME</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 ">
        {
          yogaData.map(yoga => <Yoga key={yoga.id} yoga={yoga}></Yoga>)
        }

      </div>
      <OurServices></OurServices>
    </div>
  );
};

export default YogaClass;