export interface NewsDataType {
    status: string,
    totalResults: number,
    articles: ArticleField[]
}

export interface ArticleField {
    source: {
        id: string | null,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string | null,
    publishedAt: string,
    content: string
}