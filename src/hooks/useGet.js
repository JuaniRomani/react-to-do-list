import { useState, useEffect } from "react";
import ky from "ky";
import hasNullishValue from "@/utils/Functions/hasNullishValue";

const useGet = (url, params = {}, options = {}, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasNullishDependency = hasNullishValue(dependencies);

  useEffect(() => {
    if (!url || hasNullishDependency) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await ky
          .get(url, { searchParams: params, ...options })
          .json();
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

export default useGet;
