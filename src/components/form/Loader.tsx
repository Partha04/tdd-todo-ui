import React, {FunctionComponent} from 'react';

interface Props {
    type?: "DOT" | "SPINNER"
}

const DotAnimation = () => {
    const dotContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const dotStyle = {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: '#000',
        margin: '0 10px',
        animation: 'dotMove 1.5s infinite',
    };
    return (
        <div style={dotContainerStyle}>
            <span style={{...dotStyle, animationDelay: '0s'}}/>
            <span style={{...dotStyle, animationDelay: '0.25s'}}/>
            <span style={{...dotStyle, animationDelay: '0.5s'}}/>
        </div>
    );
};

const Spinner = () => {
    const spinnerStyle = {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        border: '3px solid #000',
        borderTop: '3px solid transparent',
        animation: 'spin 1s linear infinite',
    };
    return (<div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <div style={spinnerStyle}/>
    </div>)
};


const Loader: FunctionComponent<Props> = (props) => {
    if (props.type === "DOT")
        return <DotAnimation/>
    return <Spinner/>
};

export default Loader;
