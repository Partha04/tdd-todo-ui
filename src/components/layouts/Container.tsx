import React, {FunctionComponent, ReactNode, useContext} from 'react';
import {ThemeContext} from "../../contexts/ThemeContext";

interface Props {
    children: ReactNode,
    styleProps?: any
}

const Container: FunctionComponent<Props> = (props) => {
    const {pallet} = useContext(ThemeContext);
    const formStyle = {
        backgroundColor: pallet.background,
        display: "flex",
        justifyContent: "center",
        padding:"0rem 2rem",
        ...props.styleProps
    };
    return <div style={formStyle}>
        {props.children}
    </div>;
};
export default Container;
