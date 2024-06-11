import { Collapse, CollapseProps } from "antd";
import React, { ReactElement } from "react";
import { ReactTyped } from "react-typed";
import { Movie } from "../../types/movie";

type Props = {
  movies: Movie[]
}

const LeftContainer: React.FC<Props> = ({movies}): ReactElement => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Plot",
      children: <ReactTyped strings={[movies[0].plot]} typeSpeed={20} />,
    },
    {
      key: "2",
      label: "Genre",
      children: <ReactTyped strings={[movies[0].genre]} typeSpeed={20} />,
    },
    {
      key: "3",
      label: "Year",
      children: <ReactTyped strings={[movies[0].year]} typeSpeed={20} />,
    },
    {
      key: "4",
      label: "Awards",
      children: <ReactTyped strings={[movies[0].awards]} typeSpeed={20} />,
    },
  ];
  return (
    <div className="left">
            <Collapse
              className="clp"
              defaultActiveKey={["1"]}
              accordion
              items={items}
            />
    </div>
  );
};

export default LeftContainer;
