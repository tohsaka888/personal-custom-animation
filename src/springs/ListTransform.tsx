import React, { ReactElement } from "react";
import { useTrail, animated } from "react-spring";

type Item = {
  title: string;
  content: string;
  showDate?: boolean;
  tags: string[];
  intro: string;
};

type Props = {
  isMove: boolean;
  items: any[];
};

export default function ListTransform({ items, isMove }: Props) {
  const trails = useTrail(items.length, {
    from: isMove
      ? { transfrom: "translate3d(100%,0,0)" }
      : { transform: "translate3d(0%,0,0)" },
    to: isMove
      ? { transform: "translate3d(0%,0,0)" }
      : { transform: "translate3d(100%,0,0)" },
  });
  return (
    <>
      {trails.map((style, index) => {
        const item = items[index];
        return (
          <animated.div style={style}>
            <div>
              <h1>{item.title || "实例"}</h1>
              {item.tags &&
                item.tags.map((value: string, index: number) => {
                  return <div key={index}>{value}</div>;
                })}
              <div>{item.content || "这是一段介绍......"}</div>
            </div>
          </animated.div>
        );
      })}
    </>
  );
}
