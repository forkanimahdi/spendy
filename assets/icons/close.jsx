import Svg, { Path } from "react-native-svg";

export const Close = ({ size, color, rotate, stroke }) => {
  return (
    <Svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"white"}
      xmlns="http://www.w3.org/2000/svg"
    >

      <Path d="M6 18 18 6M6 6l12 12" />

    </Svg>
  );
};


