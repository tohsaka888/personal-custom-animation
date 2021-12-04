import React, { ReactNode } from "react";
import {
  animated,
  config as defaultConfig,
  useTrail,
  SpringConfig,
} from "react-spring";

type Props = {
  children: ReactNode;
  isJump: boolean;
  config?: SpringConfig;
};

export default function JumpText({
  children,
  isJump,
  config,
}: Props): JSX.Element {
  const items = React.Children.toArray(children);
  const trails = useTrail(items.length, {
    from: isJump
      ? { y: 80, height: 0, opacity: 0 }
      : { y: 0, height: 36, opacity: 1 },
    to: isJump
      ? async (next) => {
          await next({ y: 0, height: 36, opacity: 1 });
        }
      : async (next) => {
          await next({ y: 50, opacity: 0 });
          await next({ height: 0 });
        },
    config: config || defaultConfig.gentle,
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
