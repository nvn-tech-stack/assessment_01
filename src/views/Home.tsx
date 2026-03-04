import { Outlet } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
 

const Home = () => {
  return (
    <div>
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    </div>
  );
};

export default Home;
