import React, { ReactNode } from "react";
import { useTrail, animated } from "react-spring";

// type Item = {
//   title: string;
//   content: string;
//   showDate?: boolean;
//   tags: string[];
//   intro: string;
// };

type Props = {
  isMove: boolean;
  children: ReactNode;
};

export default function ListTransform({ isMove, children }: Props) {
  const items = React.Children.toArray(children);
  const trails = useTrail(items.length, {
    from: isMove
      ? { transform: "translate3d(100%,0,0)" }
      : { transform: "translate3d(0%,0,0)" },
    to: isMove
      ? { transform: "translate3d(0%,0,0)" }
      : { transform: "translate3d(100%,0,0)" },
  });
  return (
    <>
      {trails.map((style, index) => {
        const item = items[index];
        return <animated.div style={style}>{item}</animated.div>;
      })}
    </>
  );
}
