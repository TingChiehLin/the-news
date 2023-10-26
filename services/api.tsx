import { useQuery } from "@tanstack/react-query";

let NEWS_URL="";

export const fetchNews = async (keyword: string) => {
    if(keyword === "") return  
    NEWS_URL = `https://newsapi.org/v2/everything?q=${keyword}&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
    const result = await fetch(NEWS_URL);
    return result.json();
}

export const useNews = (keyword: string) => {
    return useQuery({
        queryKey: ["news", {keyword}],
        queryFn: () => fetchNews(keyword),
        enabled: !!keyword,
        retry: 1,
        refetchOnWindowFocus: false,
    })
}   

