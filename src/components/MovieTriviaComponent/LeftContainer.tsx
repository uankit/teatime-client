import { Collapse, CollapseProps } from "antd";
import React, { ReactElement, useState } from "react";
import { ReactTyped } from "react-typed";
import { Movie } from "../../types/movie";

type Props = {
  movie: Movie
}

const LeftContainer: React.FC<Props> = ({movie}): ReactElement => {
  const [collapsible, setCollapsible] = useState<string>("header")
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Plot",
      children: <ReactTyped strings={[movie.plot]} typeSpeed={20} />,
    },
    {
      key: "2",
      label: "Genre",
      children: <ReactTyped strings={[movie.genre]} typeSpeed={20} />,
    },
    {
      key: "3",
      label: "Year",
      children: <ReactTyped strings={[movie.year]} typeSpeed={20} />,
    },
    {
      key: "4",
      label: "Awards",
      children: <ReactTyped strings={[movie.awards]} typeSpeed={20} />,
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
