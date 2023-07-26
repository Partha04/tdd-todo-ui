import React, {FunctionComponent, ReactNode, useContext} from 'react';
import {ThemeContext} from "../../contexts/ThemeContext";

interface Props {
    children: ReactNode,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    styleProps?: any
}

const Form: FunctionComponent<Props> = (props) => {
    const {pallet} = useContext(ThemeContext);
    const formStyle = {
        color: pallet.text,
        backgroundColor: pallet.background,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        ...props.styleProps
    };
    return <form style={formStyle} onSubmit={props.onSubmit}>
        {props.children}
    </form>;
};
export default Form;
