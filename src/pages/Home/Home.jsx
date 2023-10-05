import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LiftSideNav from "../Shared/LiftSideNav/LiftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div className="">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LiftSideNav></LiftSideNav>
        </div>
        {/* news container */}
        <div className="md:col-span-2">
          {
            news.map(aNews => <NewsCard  aNews={aNews} key={aNews.id}></NewsCard>)
          }
          <h2>news coming soon</h2>
        </div>

        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;

