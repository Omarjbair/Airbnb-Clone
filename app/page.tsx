import Banner from "./components/Home/Banner";
import Explore from "./components/Home/Explore/Explore";
import Footer from "./components/Home/Footer";
import GreatestOutDoors from "./components/Home/GreatestOutDoor";
import Header from "./components/shared/Header/Header";
import Live from "./components/Home/LiveSection/Live";

export default function Home() {
  return (
      <>
        <Header placeholder=""/>
        <main>
          <Banner/>
          <Explore/>
          <Live/>
          <GreatestOutDoors
            img='https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            title='The Greatest Outdoors'
            desc='Wishlists curated by Airbnb'
            linkText='Get Inspired'/>
        </main>
        <Footer/>
      </>
  );
};
