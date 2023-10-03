import Header from "../Shared/Header/Header";
import LiftSideNav from "../Shared/LiftSideNav/LiftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LiftSideNav></LiftSideNav>
        </div>

        <div className="md:col-span-2 border">
          <h2>news coming soon</h2>
        </div>

        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
