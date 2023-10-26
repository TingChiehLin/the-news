export type News = {
    searchQuery?: string,
    selectedpage?: number
}
  
export interface NewsState {
    searchQuery: string;
    keyword: string;
    errormessage: string;
    currentPage: number;
    date: string
}

export interface NewsAction {
    type: string,
    payload?: News
}
