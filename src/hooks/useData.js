import { useState, useEffect } from "react";
import fetchData from "../utils/fetch";
import processFetch from "../utils/processFetch";

export default function useData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;

    const fetchProcessData = async () => {
      try {
        const response1 = await fetchData(url);
        const response2 = await processFetch(response1);

        if (!ignore) setData(response2);
      } catch (error) {
        if (!ignore) console.log(error);
      }
    };

    fetchProcessData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return data;
}
