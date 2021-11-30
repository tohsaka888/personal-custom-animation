import { ReactElement } from "react";
import { animated, useSpring, config, SpringConfig } from "react-spring";

type Props = {
  children: ReactElement;
  isMove: boolean;
  configs?: SpringConfig;
};

export default function TransformCard({ children, isMove, configs }: Props) {
  const styles = useSpring({
    from: {
      transform: isMove ? "translate3d(100%,0,0)" : "translate3d(0%,0,0)",
    },
    to: isMove
      ? async (next) => {
          await next({ display: "block" });
          await next({ transform: "translate3d(0%,0,0)" });
        }
      : async (next) => {
          await next({ transform: "translate3d(100%,0,0)" });
          await next({ display: "none" });
        },
    config: configs || config.gentle,
  });
  return <animated.div style={styles}>{children}</animated.div>;
}
