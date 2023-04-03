import useCollection from "@/hooks/useCollection";
import NavBar from "../NavBar";
import TrainingForm from "../TrainingForm";
import TrainingList from "../TrainingList";
import { useAuthContext } from "@/hooks/useAuthContext";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { documents: trainings } = useCollection("training", [
    "uid",
    "==",
    user.uid,
  ]);

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
