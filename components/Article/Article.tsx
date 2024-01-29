import * as React from "react";

import { ArticleField } from "@/services/articleType";
import Modal from "../Modal";
import Info from "../Info";

const Article:React.FC<ArticleField> = ({...props}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    const {title, description, urlToImage} = props;
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    
    React.useEffect(()=> {
        if(isOpen) {

            const handleESC = (event:KeyboardEvent) => {
                if(event.key === "Escape") {
                    setIsOpen(false);
                }
            }
            const handleMouseClick = (event:MouseEvent) => {
                const element = ref.current;
                if(element && !element.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            }

            document.addEventListener("click", handleMouseClick);
            document.addEventListener("keydown", handleESC);

            return () => {
                document.removeEventListener("keydown", handleESC);
                document.removeEventListener("click", handleMouseClick);
            }
        }
    },[isOpen])
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
                            <Info {...props} onClose={handleClick} reference={ref}/>
                        </Modal>
                    </>
                )
            }
        </div>
    )
}

export default Article;    
