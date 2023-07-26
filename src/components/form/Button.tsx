import React, {FunctionComponent, ReactNode, useContext} from 'react';
import {ThemeContext} from "../../contexts/ThemeContext";

interface Props {
    children: ReactNode,
    endIcon?: ReactNode,
    startIcon?: ReactNode,
    onClick?: any,
    type?: "button" | "submit" | "reset" | undefined,
    styleProps?: any,
    disabled?: boolean
}

const Button: FunctionComponent<Props> = (props) => {
    const {pallet} = useContext(ThemeContext);

    const buttonStyle = {
        color: pallet.text,
        border: "none",
        borderRadius: "0.5rem",
        padding: "0.5rem 1rem",
        ...props.styleProps
    };
    return (<button style={buttonStyle} onClick={props.onClick} disabled={props.disabled} type={props.type}>
        <span>{props.startIcon}</span>
        {props.children}
        <span>{props.endIcon}</span>
    </button>);
};

export default Button;
