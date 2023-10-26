import * as React from "react";

import { ArticleField } from "@/services/articleType";

import Article from "@/components/Article";

interface NewsSectionTypeProp {
    newsData: ArticleField[];   
}

const NewsSection:React.FC<NewsSectionTypeProp> = ({newsData: articles}) => {
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
            {
                articles.map((article: ArticleField, index) => {
                    return (
                        <Article 
                            key={index} 
                            {...article}
                        />
                    )
                })
            }
        </div>
    )
}

export default NewsSection;