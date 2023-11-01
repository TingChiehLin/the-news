"use client";

import * as React from "react";
import Image from "next/image";

import Button from "@/components/Button";
import { NextPage } from "next";

import SearchBar from "@/components/SearchBar/SearchBar";
import NewsSection from "@/layouts/NewsSection";
import PaginationBar from "@/components/PaginationBar";
// import DateFilter from "@/components/DateFilter";

import { useNews } from "@/services/api";
import { newsReducer, initialState } from "@/reducers/newsReducer";

const Home:NextPage = () => {
  const [state, dispatch] = React.useReducer(newsReducer, initialState);
  const [isSearch, setIsSearch] = React.useState(false);
  const {data: newsData, isLoading, isSuccess, isError} = useNews(state.keyword); 
  const {searchQuery, articles, errormessage,currentPage} = state;

  const newsPerPage = 9;
  const start = (currentPage - 1) * newsPerPage;
  const end = currentPage * newsPerPage;
  const formattedNewsData = articles.slice(start, end);

  React.useEffect(() => {
    if(newsData?.articles) {
      dispatch({type: "UPDATE_ARTICLES", payload: {articles: newsData?.articles}})
    }
  },[newsData?.articles])
 
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newSearchQuery = e.target.value;
    dispatch({type: "SEARCH_NEWS_QUERY", payload: {searchQuery: newSearchQuery}})
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {  
      dispatch({type: "SEARCH_NEWS_BLUR"})
  }

  const handleSubmit = () => {
    if(searchQuery.trim() === "") {
      dispatch({type: "SEARCH_NEWS_QUERY_EMPTY"})
      return 
    }
    dispatch({type: "SEARCH_NEWS_SUBMIT"})
    setIsSearch(true);
  }

  const handlePageSelect = (index:number) => {
    dispatch({type:"PAGE_SELECT", payload: {selectedpage: index}})
  }

  const handleLastPage = () => {
    dispatch({type:"LAST_PAGE"})
  }

  const handleNextPage = () => {
    dispatch({type:"NEXT_PAGE"})
  }

  return (
    <>
      <main className='w-full max-w-7xl mx-auto flex items-start justify-center py-20 px-10 md:px-12 xl:px-16 2xl:px-0'>
        <div className="flex flex-col gap-12">
          {!isSuccess && !isSearch && (
            <>
              <Image
                src="/assets/imgs/welcome_search.svg"
                alt="search-image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-64 md:w-96"
              />
              <div className="flex gap-x-6">
                <SearchBar
                      id={"search-news"}
                      label={"search news title"}
                      type={"search"}
                      name={"search-news"}
                      value={searchQuery}
                      errormessage={errormessage}
                      placeholder="Please input news title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                />
                <Button
                    text="Search"
                    type="button"
                    isdisable={isError ? true : undefined}
                    onClick={handleSubmit}
                />
              </div>
            </>
          )}
        </div>
        {isSuccess && (
          <div className="w-full flex flex-col gap-20">
            <div className="w-full flex justify-between items-baseline">
              <div className="flex gap-x-6">
                <SearchBar
                    id={"search-news"}
                    label={"search news title"}
                    type={"search"}
                    name={"search-news"}
                    value={searchQuery}
                    errormessage={errormessage}
                    placeholder="Please input news title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button
                    text="Search"
                    type="button"
                    isdisable={isError ? true : undefined}
                    onClick={handleSubmit}
                  />
                </div>
                {/* <DateFilter/> */}
            </div>
            <NewsSection newsData={formattedNewsData}/>
            <PaginationBar
              currentPage={currentPage}
              totalPage={newsPerPage}
              handleCurPage={handlePageSelect}
              handlePrevPage={handleLastPage}
              handleNextPage={handleNextPage}
            />
          </div>
        )}
        {isLoading && (
              <Image
                src="/assets/imgs/loading.svg"
                alt="search-image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            )}
      </main>
    </>
  )
}

export default Home;
