import { NEWS_API_BASE_URL, NEWS_API_KEY } from "@/config/api";
import { NewsApiResponse } from "@/types/news.types";

export interface FetchNewsParams {
  page?: number;
  pageSize?: number;
  category?: string;
  country?: string;
  query?: string;
}

export const fetchTopHeadlines = async (params: FetchNewsParams = {}) => {
  const {
    page = 1,
    pageSize = 20,
    category = "general",
    country = "us",
    query,
  } = params;

  if (NEWS_API_KEY) {
    throw new Error("Api key not found");
  }

  const queryParams = new URLSearchParams({
    apiKey: NEWS_API_KEY,
    page: page.toString(),
    pageSize: pageSize.toString(),
    ...(category && category !== "all" && { category }),
    ...(query && { q: query }),
  });
  const url = `${NEWS_API_BASE_URL}/top-headlines?${queryParams.toString()}`;

  try {
    const response = await fetch(url);
    const data: NewsApiResponse = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
