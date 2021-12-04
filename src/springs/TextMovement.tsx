import { animated, useSpring, config } from "react-spring";

type Props = {
  text: string;
  isMove: boolean;
  initialFontSize?: string;
  transformFontSize?: string;
};

export default function TextMovement({
  text,
  isMove,
  initialFontSize = "1rem",
  transformFontSize = "5rem",
}: Props): JSX.Element {
  const styles = useSpring({
    from: {
      display: isMove ? "none" : "block",
      transform: isMove ? "translate3d(100%,0,0)" : "translate3d(0%,0,0)",
      fontSize: isMove ? initialFontSize : transformFontSize,
    },
    to: isMove
      ? async (next) => {
          await next({ display: "block" });
          await next({ transform: "translate3d(0%,0,0)" });
          await next({ fontSize: transformFontSize });
        }
      : async (next) => {
          await next({ fontSize: initialFontSize });
          await next({ transform: "translate3d(100%,0,0)" });
          await next({ display: "none" });
        },
    config: config.gentle,
  });
  return <animated.div style={styles}>{text}</animated.div>;
}
