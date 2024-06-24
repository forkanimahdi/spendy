import Svg, { Path } from "react-native-svg";

export const Goal = () => {
    return (
        <Svg
            fill="#000"
            width={26}
            height={26}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0  0 16 16">

            <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <Path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
            <Path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
            <Path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </Svg>
    );
};


