import { useState, useEffect } from "react";
import ky from "ky";
import hasNullishValue from "@/utils/Functions/hasNullishValue";

const usePatch = (url, data = {}, options = {}, dependencies = []) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasNullishDependency = hasNullishValue(dependencies);

  useEffect(() => {
    if (!url || hasNullishDependency) return;

    const patchData = async () => {
      setLoading(true);
      try {
        const patchedResponse = await ky
          .patch(url, { json: data, ...options })
          .json();
        setResponse(patchedResponse);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    patchData();
  }, dependencies);

  return { response, loading, error };
};

export default usePatch;
