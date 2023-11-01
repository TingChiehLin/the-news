import { NewsAction, NewsState } from "@/services/newsType";

export const initialState: NewsState = {
    searchQuery: "",
    keyword:"",
    articles: [],
    errormessage: "",
    currentPage: 1,
    date: "25/10/2023"
  }
  
export const newsReducer = (state: NewsState, action: NewsAction) => {
    const { type, payload } = action;
  
    if(type === "SEARCH_NEWS_QUERY") {
      const newSearchQuery = payload?.searchQuery;
      if(newSearchQuery === undefined) return state
      return {
        ...state,
        searchQuery: newSearchQuery,
        errormessage: "",
      }
    } else if(type === "UPDATE_ARTICLES") {
      const newArticles = payload?.articles;
      if(newArticles === undefined) return state
      return {
        ...state,
        articles: newArticles,
      }
    }  
    else if(type === "SEARCH_NEWS_SUBMIT") {
      return {
        ...state,
        errormessage: "",
        keyword: state.searchQuery,
      }
    } else if(type === "SEARCH_NEWS_BLUR") {
      return {
        ...state,
        errormessage: "",
      }
    } else if(type === "SEARCH_NEWS_QUERY_EMPTY") {
      return {
        ...state,
        errormessage: "Please input news title",
      }
    } else if(type === "PAGE_SELECT") {
      const newPage = payload?.selectedpage;
      return {
        ...state,
        currentPage: newPage || 1,
      }
  
    } else if(type === "LAST_PAGE") {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      }
    } else if(type === "NEXT_PAGE") {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      }
    }
    else {
      throw new Error("This action type does not support")
    }
  }
  