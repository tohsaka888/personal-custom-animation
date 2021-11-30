import { ReactElement, useState } from "react";
import { animated, useSpring } from "react-spring";

type Props = {
  children: ReactElement;
  width: string;
  height: string;
};

export default function JumpCard({ children, width, height }: Props): JSX.Element {
  let defaultShadow = `20px 20px 60px #253748,-20px -20px 60px #253748`;
  const [isHover, setIsHover] = useState<boolean>(false);
  const styles = useSpring({
    from: {
      boxShadow: isHover ? "none" : defaultShadow,
      marginBottom: isHover ? "0px" : "20px",
      zoom: isHover ? 1 : 1.5,
      width: width,
      height: height,
    },
    to: isHover
      ? async (next) => {
          await next({ marginBottom: "20px", zoom: 1.5 });
          await next({ boxShadow: defaultShadow });
        }
      : async (next) => {
          await next({ boxShadow: "none" });
          await next({ marginBottom: "0px", zoom: 1 });
        },
  });
  return (
    <animated.div
      style={styles}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {children}
    </animated.div>
  );
}
