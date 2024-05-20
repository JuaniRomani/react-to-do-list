import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useRouterReady = () => {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsReady(router.isReady);
  }, [router.isReady]);

  return isReady;
};

export default useRouterReady;
