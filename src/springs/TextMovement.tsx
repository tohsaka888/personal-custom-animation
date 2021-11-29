import React, { ReactElement } from "react";
import { animated, useSpring, config } from "react-spring";

type Props = {
  children: ReactElement;
  isMove: boolean;
};

export default function TextMovement({ children, isMove }: Props): JSX.Element {
  const styles = useSpring({
    from: {
      display: isMove ? "none" : "block",
      transform: isMove ? "translate3d(100%,0,0)" : "translate3d(0,0,0)",
      fontSize: isMove ? "3rem" : "10rem",
    },
    to: isMove
      ? async (next) => {
          await next({ display: "block" });
          await next({ transform: "translate3d(0,0,0)" });
          await next({ fontSize: "10rem" });
        }
      : async (next) => {
          await next({ fontSize: "3rem" });
          await next({ transform: "translate3d(100%,0,0)" });
          await next({ display: "none" });
        },
    config: config.gentle,
  });
  return <animated.div style={styles}>{children}</animated.div>;
}
