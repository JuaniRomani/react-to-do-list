import { useState, useEffect } from "react";
import ky from "ky";
import hasNullishValue from "@/utils/Functions/hasNullishValue";

const useDelete = (url, options = {}, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasNullishDependency = hasNullishValue(dependencies);

  useEffect(() => {
    if (!url || hasNullishDependency) return;

    const deleteData = async () => {
      setLoading(true);

      try {
        const response = await ky.delete(url, { ...options }).json();
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    deleteData();
  }, dependencies);

  return { data, loading, error };
};

export default useDelete;
