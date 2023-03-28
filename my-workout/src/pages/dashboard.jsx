import useCollection from "@/hooks/useCollection";
import NavBar from "../components/NavBar";
import TrainingForm from "../components/TrainingForm";
import TrainingList from "../components/TrainingList";

const Dashboard = () => {
  const { documents: trainings } = useCollection("training");

  return (
    <div>
      <NavBar />
      dashboard
      {trainings && <TrainingList trainings={trainings} />}
      <TrainingForm />
    </div>
  );
};

export default Dashboard;
