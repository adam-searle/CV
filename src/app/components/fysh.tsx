import { useEffect } from "react";

interface FyshProps {
  className?: string;
  mouthImage?: string;
  isLanding: boolean;
  isStandingUp: boolean;
  testPassed: boolean;
}

const Fysh: React.FC<FyshProps> = ({
  className,
  isLanding,
  isStandingUp,
  testPassed,
  mouthImage,
}) => {
  // Define the animation classes based on the props
  const isAnimating = isLanding || isStandingUp;
  const crashSound = new Audio("/sounds/incoming.mp3");
  const torsoClass = testPassed
    ? "follow-me"
    : isAnimating
    ? isLanding
      ? ""
      : "stand-up-torso"
    : "torso";
  const headClass = testPassed
    ? "follow-me"
    : isAnimating
    ? isLanding
      ? ""
      : "stand-up-head"
    : "head";
  const armsClass = testPassed
    ? "follow-me"
    : isAnimating
    ? isLanding
      ? ""
      : "stand-up-arms"
    : "arms";
  const legsClass = testPassed
    ? "follow-me"
    : isAnimating
    ? isLanding
      ? ""
      : "stand-up-legs"
    : "";
  const mouthClass = testPassed
    ? "follow-me"
    : isAnimating
    ? isLanding
      ? "hidden"
      : "hidden"
    : "head";

  useEffect(() => {
    if (isLanding) {
      crashSound.play();
    } else {
    }
  }, [isAnimating]); // This effect runs when `isAnimating` changes

  return (
    <div className={`relative w-1/6 max-w-xs pb-[22%] ${className}`}>
      <img
        src="/fysh/torso.png"
        alt="Torso"
        className={`absolute ${torsoClass}`}
      />
      <img
        src="/fysh/leftLeg.png"
        alt="Left Leg"
        className={`absolute ${legsClass}`}
      />
      <img
        src="/fysh/rightLeg.png"
        alt="Right Leg"
        className={`absolute ${legsClass}`}
      />
      <img
        src="/fysh/leftArm.png"
        alt="Left Arm"
        className={`absolute ${armsClass}`}
      />
      <img
        src="/fysh/rightArm.png"
        alt="Right Arm"
        className={`absolute ${armsClass}`}
      />
      <img
        src="/fysh/head.png"
        alt="Head"
        className={`absolute ${headClass}`}
      />
      <img src={mouthImage} alt="Mouth" className={`absolute ${mouthClass}`} />
    </div>
  );
};

export default Fysh;
