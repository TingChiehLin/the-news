import { FC } from "react";

const Footer:FC = () => {
    return (
        <footer className="w-full py-4 bg-teal-700 text-xs md:text-sm flex justify-center items-center">
            <span className="text-slate-300">
                © Copyright 2023. Developed by
                <a className="font-semibold" target="_blank"
                   rel="noopener noferrer" 
                   href="https://github.com/TingChiehLin"
                >
                    &nbsp;Ting Chieh Lin
                </a>
            </span>
        </footer>
    )
}

export default Footer;