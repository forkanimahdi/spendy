import Svg, { Path } from "react-native-svg";

export const Plus = ({ size, color, rotate, stroke }) => {
  return (
    <Svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill={color}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >

      <Path  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"  />

    </Svg>
  );
};
  
