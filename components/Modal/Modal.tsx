import { FC } from "react";

interface ModalTypeProp {
    isOpen: boolean,
    children: React.ReactNode
}

const Modal:FC<ModalTypeProp> = ({...props}) => {
    const {isOpen, children} = props;
    return (
        <>
           <div className={`fixed inset-0 
                            over-flow-x-auto
                            over-flow-y-auto
                            transition-opacity
                            ease-out
                            duration-400
                            opacity-100
                            bg-slate-900
                            z-10
                            ${isOpen && "opacity-60"}`}
           >
           </div>
           {children}
        </>
    )
}   

export default Modal;

// "author": "Joel Khalili",
// "title": "Idris Elba Is Ready to Talk About Crypto",
// "description": "During the crypto gold rush, Idris Elba says he turned down a lot of “mad opportunities.” Now he has partnered with the “crypto-for-good” Stellar Foundation.",
// "url": "https://www.wired.com/story/idris-elba-crypto-stellar-development-foundation/",
// "urlToImage": "https://media.wired.com/photos/65137289cc851e8856510fe0/191:100/w_1280,c_limit/Idris-Elba-Crypto-Business-1470604983.jpg",
// "publishedAt": "2023-09-27T06:00:00Z",
// "content":