import Header from "./components/Header";
import Card from "./Card";
import Footer from "./Footer";
import bgStars from "./assets/bg-stars.svg";
import hills from "./assets/pattern-hills.svg";

function App() {
  return (
    <>
      <img className="stars" src={bgStars} alt="stars-bg" />
      <img className="hills" src={hills} alt="hills-bg" />

      <header>
        <Header />
      </header>

      <div className="main-components">
        <Card value={8} attr={"Days"} />
        <Card value={23} attr={"Hours"} />
        <Card value={55} attr={"Minutes"} />
        <Card value={41} attr={"Seconds"} />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
