import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b9f6467141294f5f975ad360593b85f7",
  },
});

class APIClient<T> {
  endpont: string;
  constructor(endpoint: string) {
    this.endpont = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpont, config)
      .then((res) => res.data);
  };
}

export default APIClient;
