import PurpleTriangle from "../images/purple-gradient-triangle-background.svg";
import GreyTriangle from "../images/grey-gradient-triangle-background.svg";

// Functional React component to display two triangle background images
export default function TriangleBackground() {
  return (
    <>
      {/* Purple gradient triangle background */}
      <img
        src={PurpleTriangle}
        className="triangle-background"
        alt="purple-gradient-triangle-background"
      />

      {/* Gray/white gradient triangle background */}
      <img
        src={GreyTriangle}
        className="triangle-background-1"
        alt="grey-gradient-triangle-background"
      />
    </>
  );
}