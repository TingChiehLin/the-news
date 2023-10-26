import * as React from "react";

import { ArticleField } from "@/services/articleType";
import Image from "next/image";
import Modal from "../Modal";
import Info from "../Info";

const Article:React.FC<ArticleField> = ({...props}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const {title, description, urlToImage} = props;
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div>
            {/* If I used next/image, I will get this security issues due to image sources from external sites
            <Image
                src={urlToImage ?? "https://placehold.co/600x400"}
                alt="search-image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full rounded-xl cursor-pointer"
                onClick={handleClick}
            /> */}
            <img src={urlToImage ?? "https://placehold.co/600x400"} 
                 alt="search-image"
                 className="w-full rounded-xl cursor-pointer"
                 onClick={handleClick}
            />
            <h3 className="mt-1.5 text-slate-700 font-semibold cursor-pointer"
                onClick={handleClick}>
                {title}
            </h3>
            <p className="mt-1.5 text-sm text-slate-400" onClick={handleClick}>{description}</p>
            {
                isOpen && (
                    <>
                        <Modal isOpen={isOpen}>
                            <Info {...props} onClose={handleClick}/>
                        </Modal>
                    </>
                )
            }
        </div>
    )
}

export default Article;    
