export type Pallet = {
    primary: string;
    secondary: string;
    success:string,
    warning: string,
    danger: string,
    text: string;
    background: string;
    paper: string
};

export const Light: Pallet = {
    primary: "#d85bf3",
    secondary: "#33a4db",
    success:"#0e9614",
    warning: "#c38528",
    danger: "#cd1936",
    text: "#2f2f2f",
    background: "#d7d7d7",
    paper: "#c6c6c6"

};

export const Dark: Pallet = {
    primary: "#5f91c8",
    secondary: "#743ea9",
    success:"#0e9614",
    warning: "#c38528",
    danger: "#cd1936",
    text: "#cbcbcb",
    background: "#233347",
    paper: "#0d0951"
};
