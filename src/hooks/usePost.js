import { useState } from "react";
import ky from "ky";

const usePost = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (body) => {
    setLoading(true);

    try {
      const response = await ky.post(url, { json: body, ...options }).json();
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { post, data, loading, error };
};

export default usePost;
