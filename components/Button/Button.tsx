import { FC } from "react";

interface ButtonTypeProp {
    text: string;
    type: "button" | "submit" | "reset";
    isdisable?: boolean;
    onClick?: () => void;
}

const Button:FC<ButtonTypeProp> = ({type = "button", ...props}) => {
    return (
        <button
            className=" px-4 py-3 max-h-12
                        inline-flex items-center rounded-xl
                        text-xs md:text-sm font-semibold text-slate-100
                        bg-teal-500
                    hover:bg-teal-400 hover:text-teal-900
                    disabled:bg-slate-300"
            {...props}
        >
            {props.text}
        </button>
    )
}

export default Button;  