import Hero from "../components/Hero";
import RecentlyAdded from "../components/RecentlyAdded";

function Home() {
  return (
    <div className=" bg-amber-100 text-bg-amber-950 px-10 py-8 h-screen">
      <Hero />
      <RecentlyAdded />
    </div>
  );
}

export default Home;
