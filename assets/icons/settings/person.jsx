import Svg, { Path, Circle } from "react-native-svg";

export const Person = ({ color, size, width, height, active ,focus}) => {
  return (
    <Svg
    fill={active ? color : "#b4ef72"}
      width={width ?? size ?? 24}
      height={height ?? size ?? 24}
      stroke={!focus && "#b4ef72"}
      strokeWidth={1}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <Path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />

    </Svg>
  );
};


