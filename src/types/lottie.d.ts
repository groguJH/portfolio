declare module "react-lottie-player" {
  import { ComponentType } from "react";

  interface LottieProps {
    animationData: any;
    play?: boolean;
    loop?: boolean | number;
    speed?: number;
    direction?: 1 | -1;
    segments?: [number, number] | boolean;
    goTo?: number;
    onComplete?: () => void;
    onLoopComplete?: () => void;
    onEnterFrame?: () => void;
    onSegmentStart?: () => void;
    style?: React.CSSProperties;
    className?: string;
  }

  const Lottie: ComponentType<LottieProps>;
  export default Lottie;
}
