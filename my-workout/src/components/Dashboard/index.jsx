import { useAuthContext } from "@/hooks/useAuthContext";
import Head from "next/head";
import TrainingList from "@/components/TrainingList";
import TrainingForm from "@/components/TrainingForm";
import useCollection from "@/hooks/useCollection";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { documents: trainings } = useCollection("training", [
    "uid",
    "==",
    user.uid,
  ]);
  return (
    <div>
      <>
        <Head>
          <title>My Workout | Trainings</title>
        </Head>
        <div>
          <TrainingForm />
          {trainings && <TrainingList trainings={trainings} />}
        </div>
      </>
    </div>
  );
};

export default Dashboard;
