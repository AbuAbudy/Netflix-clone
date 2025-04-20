import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Row from "../../Components/ROW/Row"; // Adjust the path if necessary
import requests from "../../utilis/requists";
import "../../Components/Header/Header.css";
import Banner from "../../Components/Banner/Banner";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className="home__rows">
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
      <Footer />
    </>
  );
}

export default Home;