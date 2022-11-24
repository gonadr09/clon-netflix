import React from "react";
import styles from "./styles/Home.module.css";
import imgTV from "../../../assets/tv.png";
import videotv from "../../../assets/videotv.mp4";
import imgMobile from "../../../assets/mobile.png";
import devices from "../../../assets/devices.png";
import videodevices from "../../../assets/videodevices.mp4";
import imgChildren from "../../../assets/children.png";


const Home = () => {
  return (
    <>
      <header className={styles.banner}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <div>
          <button>Login</button>
        </div>
      </header>

      <main className={styles.main}>
      
        <hr></hr>
        <section className={styles.videosection1}>
          <div>
            <h2>Enjoy on your TV.</h2>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,Blu-ray players, and more.</p>
          </div>
          <div>
            <img src={imgTV}></img>
            <video autoPlay playsInline muted loop>
              <source src={videotv} type="video/mp4" />
            </video>
          </div>
        </section>

        <hr></hr>
        <section className={styles.imgsection1}>
          <div>
            <img src={imgMobile}></img>
          </div>
          <div>
            <h2>Download your shows to watch offline.</h2>
            <p>Save your favorites easily and always have something to watch.</p>
          </div>
        </section>
        
        <hr></hr>
        <section className={styles.videosection2}>
          <div>
            <h2>Watch everywhere.</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          </div>
          <div>
            <img src={devices}></img>
            <video autoPlay playsInline muted loop>
              <source src={videodevices} type="video/mp4" />
            </video>
          </div>
        </section>

        <hr></hr>
        <section className={styles.imgsection1}>
          <div>
            <img src={imgChildren}></img>
          </div>
          <div>
            <h2>Create profiles for kids.</h2>
            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
        </section>

      </main>
    </>
  );
};

export default Home;
