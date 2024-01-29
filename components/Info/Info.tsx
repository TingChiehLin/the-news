import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import { HiXMark } from "react-icons/hi2";

import { ArticleField } from "@/services/articleType";
import React from "react";

interface InfoTypeProp {
    onClose?: () => void; 
    reference?: React.RefObject<HTMLDivElement>,   
}   

const Info:FC<InfoTypeProp & ArticleField> = ({...props}) => {
    const {title, author, urlToImage, publishedAt, content, onClose, reference} = props;
    const newFormatDate = new Date(publishedAt).toLocaleDateString("en-AU", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    return (
        <>
            <div className="w-full max-w-lg md:max-w-3xl lg:max-w-4xl px-12 md:px-16 pt-6 pb-12 md:pb-16 bg-slate-50 rounded-2xl shadow-xl 
                            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                 ref={reference}
            >
                    <HiXMark size={"2rem"}
                            className='cursor-pointer text-slate-700 ml-auto mb-6'
                            onClick={onClose}
                    />
                    <h1 className="text-xl md:text-3xl mb-6 font-semibold text-slate-700">{title}</h1>
                    {/* <Image 
                        src={urlToImage ?? "https://placehold.co/600x400"}
                        alt="search-image"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full rounded-xl mb-4"
                    /> */}
                     <img src={urlToImage ?? "https://placehold.co/600x400"} 
                          alt="search-image"
                          className="w-full rounded-xl mb-4"
                    />
                    <div className="flex justify-between mb-4">
                        <Link href="#" className="text-slate-400 text-sm md:text-base">{author}</Link>
                        <span className="text-slate-400 text-sm md:text-base">{newFormatDate}</span>
                    </div>
                    <p className="text-slate-700 text-sm md:text-base">{content}</p>

            </div>
        </>
    )
}

export default Info;