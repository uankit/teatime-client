import { Button, Collapse, CollapseProps } from "antd";
import React, { ReactElement, useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { Movie } from "../../types/movie";
import styles from "../../styles/MovieTriviaPage.module.css";

type Props = {
  movie: Movie;
  index: number
  blur: number[]
  setBlur: React.Dispatch<React.SetStateAction<number[]>>
};

const LeftContainer: React.FC<Props> = ({ movie, index, setBlur, blur }): ReactElement => {
  const [enabledCollapsibles, setEnabledCollapsibles] = useState<string[]>([]);
  
  const handleEnable = (key: string) => {
    setEnabledCollapsibles((prev) => {
      if (prev.includes(key)) {
        return prev;
      }
      if (prev.length < 3) {
      setBlur((prev) => {
      const newBlurStates = [...prev];
      newBlurStates[index] = blur[index]/1.5;
      return newBlurStates;
    });
        return [...prev, key];
      }
      return prev;
    });
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Plot",
      children: <ReactTyped strings={[movie.plot]} typeSpeed={20} />,
    },
    {
      key: "2",
      label: "Genre",
      collapsible: enabledCollapsibles.includes("2") ? "header" : "disabled",
      children: <ReactTyped strings={[movie.genre]} typeSpeed={20} />,
      onClick: () => handleEnable("2"),
    },
    {
      key: "3",
      label: "Year",
      collapsible: enabledCollapsibles.includes("3") ? "header" : "disabled",
      children: <ReactTyped strings={[movie.year]} typeSpeed={20} />,
      onClick: () => handleEnable("3"),
    },
    {
      key: "4",
      label: "Awards",
      collapsible: enabledCollapsibles.includes("4") ? "header" : "disabled",
      children: <ReactTyped strings={[movie.awards]} typeSpeed={20} />,
      onClick: () => handleEnable("4"),
    },
    {
      key: "5",
      label: "Director",
      collapsible: enabledCollapsibles.includes("5") ? "header" : "disabled",
      children: <ReactTyped strings={[movie.director]} typeSpeed={20} />,
      onClick: () => handleEnable("5"),
    },
    {
      key: "6",
      label: "Writer",
      collapsible: enabledCollapsibles.includes("6") ? "header" : "disabled",
      children: <ReactTyped strings={[movie.writer]} typeSpeed={20} />,
      onClick: () => handleEnable("6"),
    },
    {
      key: "7",
      label: "Actors",
      collapsible: enabledCollapsibles.includes("7") ? "header" : "disabled",
      children: <ReactTyped strings={[movie.actors]} typeSpeed={20} />,
      onClick: () => handleEnable("7"),
    },
  ];

  return (
    <div className={styles.left}>
      <Collapse
        defaultActiveKey={["1"]}
        accordion
        items={items}
      />
    </div>
  );
};

export default LeftContainer;
