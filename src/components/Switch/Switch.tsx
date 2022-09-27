import React, { useContext } from "react";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";
import { themeContext } from "../../context/Context";
import './Switch.css';

function Switch() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({ type: "switch" });
    };

    return (
        <div className="switch" onClick={handleClick}>
            <MdNightlightRound />
            <MdWbSunny />
            <div className="switch-button"
                style={darkMode ? { left: "2px" } : { right: "2px" }}></div>
        </div>
    )
}

export default Switch;