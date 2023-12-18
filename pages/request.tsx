import useSWR from "swr";
import { useEffect } from "react";
import axios from "axios";

export const API_URL = "https://api.frontendeval.com/fake/word";

const fetcher = async () => {
  const request = await axios(API_URL);
  return request.data;
};

const Request = () => {
  const { data, isLoading, error } = useSWR(API_URL, fetcher);
  //   console.log(error);
  if (isLoading) return <div>Loading</div>;

  if (error?.message) return <div data-testid="error">error</div>;

  return (
    <div data-testid="body">
      <div>jeezzzzz</div>
      <h1 aria-label="name">{data}</h1>
      <p>heaven gates</p>
    </div>
  );
};
export default Request;
