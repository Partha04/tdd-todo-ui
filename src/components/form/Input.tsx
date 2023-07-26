import React, {FunctionComponent, useContext} from 'react';
import {ThemeContext} from "../../contexts/ThemeContext";

interface OwnProps {
    value: any,
    onChange: (value: any) => void,
    name: string,
    required: boolean,
    styleProps?: any
    type?: string
}

type Props = OwnProps;

const Input: FunctionComponent<Props> = (props) => {
    const {pallet} = useContext(ThemeContext)

    const inputStyle = {
        color: pallet.text,
        border: `1px solid ${pallet.secondary}`,
        fontSize:"14",
        padding:"0.5rem",
        borderRadius:"0.4rem",
        ...props.styleProps
    };
    return (
        <input value={props.value}
               onChange={(e) => props.onChange(e.target.value)}
               name={props.name}
               type={props.type}
               style={inputStyle}
               required
        />
    );

};

export default Input;
