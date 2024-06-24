import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../../constants/themes";

export const Bell = ({ height, width, size, active, color = "dark" }) => {
  return (
    <Svg
      height={height ?? size ?? 26}
      width={width ?? size ?? 26}
      viewBox="0 0 20 22"
      fill="none"
      stroke={"#fff"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"
        stroke={"white"}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {active ? (
        <Path
          d="M17.0001 4C17.0001 5.65685 15.657 7 14.0001 7C12.3433 7 11.0001 5.65685 11.0001 4C11.0001 2.34315 12.3433 1 14.0001 1C15.657 1 17.0001 2.34315 17.0001 4Z"
          fill={COLORS.primary}
          stroke={color == "white" ? COLORS.black : COLORS.white}
        />
      ) : null}
    </Svg>
  );
};
