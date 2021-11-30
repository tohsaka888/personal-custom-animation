import { ReactElement } from "react";
import { animated, useSpring, config, SpringConfig } from "react-spring";

type Props = {
  children: ReactElement;
  isMove: boolean;
  configs?: SpringConfig;
  initialX?: number;
  transformX?: number;
  delay?: number;
};

export default function TransformCard({
  children,
  isMove,
  configs,
  initialX = 100,
  transformX = 0,
  delay = 0,
}: Props) {
  const styles = useSpring({
    from: {
      transform: isMove
        ? `translate3d(${initialX}%,0,0)`
        : `translate3d(${transformX}%,0,0)`,
    },
    to: isMove
      ? async (next) => {
          await next({ display: "block" });
          await next({ transform: `translate3d(${transformX}%,0,0)` });
        }
      : async (next) => {
          await next({ transform: `translate3d(${initialX}%,0,0)` });
          await next({ display: "none" });
        },
    config: configs || config.gentle,
    delay: delay,
  });
  return <animated.div style={styles}>{children}</animated.div>;
}
