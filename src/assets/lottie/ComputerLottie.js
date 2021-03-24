import { useLottie } from "lottie-react";
import ComputerLottieJson from "./lottiefiles/computer.json";

function ComputerLottie() {
  const options = {
    animationData: ComputerLottieJson,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);
  return View;
}

export default ComputerLottie;
