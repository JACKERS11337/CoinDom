import React from "react";
import "./style.scss";

type BoxProps = {
  image: React.ReactNode;
  title: string;
  text: string;
};

export const ChooseBox = ({ image, title, text }: BoxProps) => {
  return (
    <div className="choose-box">
      <span>{image}</span>
      <div className="choose-box-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
