import axios, { type AxiosInstance } from 'axios';

export class AxiosHttpClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}