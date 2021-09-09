import { useEffect, useState } from "react";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

export const useFetch = (url) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);

    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setState({
          loading: false,
          error: null,
          data,
        })
      );
  }, [url]);

  return state;
};
