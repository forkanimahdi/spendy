import Svg, { Path } from "react-native-svg";

export const Chart = ({ color, size, width, height, active , focus }) => {
  return (
    <Svg
      fill={active ? color : "#b4ef72"}
      width={width ?? size ?? 24}
      stroke={!focus && "#b4ef72"}
      strokeWidth={1}
      height={height ?? size ?? 24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      
    >


      <Path d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"/>
      <Path  d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" />


    </Svg>
  );
};



