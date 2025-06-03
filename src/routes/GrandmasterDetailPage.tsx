import { useParams } from "react-router-dom";
import GrandmasterDetail from "../components/GrandmasterDetail";

const GrandmasterDetailPage = () => {
  const { username } = useParams<{ username: string }>();

  return <GrandmasterDetail username={username} />;
};

export default GrandmasterDetailPage;
