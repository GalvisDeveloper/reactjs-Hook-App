import { useEffect, useState } from "react";

const initialState = {
  data: null,
  loading: true,
  hasError: null,
};

export const useFetch = (url) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);

    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setState({
          ...initialState,
          loading: false,
          data,
        })
      ).catch(e => {
        setState({
          ...initialState,
          loading: false,
          error: e,
        })
      });
  }, [url]);

  return state;
};
