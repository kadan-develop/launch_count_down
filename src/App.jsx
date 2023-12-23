import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import hills from "./assets/pattern-hills.svg";
import { useState } from "react";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Set the date we're counting down to
  const countDownDate = new Date("December 24, 2023 00:00:00").getTime();

  // Update the count down every 1 second
  const setCountDown = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    if (distance < 0) {
      clearInterval(setCountDown);
    }
  }, 1000);

  return (
    <>
      <main className="flex">
        <header>
          <Header />
        </header>

        <div className="main-components">
          <Card value={days} attr={"Days"} />
          <Card value={hours} attr={"Hours"} />
          <Card value={minutes} attr={"Minutes"} />
          <Card value={seconds} attr={"Seconds"} />
        </div>

        <footer className="position-absolute">
          <Footer />
        </footer>
        <img className="hills" src={hills} alt="hills-bg" />
      </main>
    </>
  );
}

export default App;
