import { Card } from "antd";
import styles from "../styles/HomePage.module.css";
import MovieTriviaPoster from "../assets/movie_trivia.jpeg";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  return (
      <div className={styles.container}>
        <Card className={styles.cardContainer}>
          <img
            src={MovieTriviaPoster}
            className={styles.posterContainer}
            onClick={() => navigate("/movie-trivia")}
          />
        </Card>
      </div>
  );
};

export default HomePage;
