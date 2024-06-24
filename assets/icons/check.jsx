import Svg, { Path } from "react-native-svg";

export const Checked = ({ color, size, width, height, active }) => {
  return (
    <Svg
      fill={active ? color : "none"}
      width={width ?? size ?? 24}
      height={height ?? size ?? 24}
      stroke={"#b4ef72"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"

    >


      <Path  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />


    </Svg>
  );
};

