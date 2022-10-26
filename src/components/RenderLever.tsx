import React from "react";
import { GAME_LEVELS } from "./levels/levels";
import "../index.css";

const RenderLevel = () => {
  const level = GAME_LEVELS[0].trim().split("\n");

  return (
    <div>
      {level.map((row) => {
        return (
          <div className="row">
            {row.split("").map((item) => {
              if (item === ".") {
                return <div className="empty">.</div>;
              } else if (item === "#") {
                return <div className="wall">#</div>;
              } else if (item === "+") {
                return <div className="lava">+</div>;
              } else if (item === "@") {
                return <div className="player">@</div>;
              } else if (item === "o") {
                return <div className="coin">o</div>;
              } else if (item === "=") {
                return <div className="lava">=</div>;
              } else if (item === "v") {
                return <div className="lava">=</div>;
              } else if (item === "|") {
                return <div className="lava">=</div>;
              }
              return item;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RenderLevel;
