import { ArticleField } from "./articleType";

export type News = {
    searchQuery?: string,
    selectedpage?: number
    articles?: ArticleField[],  
}
  
export interface NewsState {
    searchQuery: string;
    keyword: string;
    articles: ArticleField[];
    errormessage: string;
    currentPage: number;
    date: string
}

export interface NewsAction {
    type: string,
    payload?: News
}
