import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants/themes";

export const Arrow = ({ size, color, rotate, stroke }) => {
  return (
    <Svg
      rotation={rotate ?? 0}
      width={size ?? 26}
      height={size ?? 26}
      viewBox="0 0 20 20"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.9167 15.8333L7.08335 9.99996L12.9167 4.16663"
        stroke={COLORS[color] ?? COLORS.primary + "3f"}
        strokeOpacity={0.875}
        strokeWidth={stroke ?? 2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
