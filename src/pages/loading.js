// pages/loading.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const Loading = () => {
  const router = useRouter();
  const { url } = router.query;

  useEffect(() => {
    if (url) {
      setTimeout(() => {
        window.location.href = decodeURIComponent(url);;
      }, 1000); // 2-second delay
    }
  }, [url]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-8 rounded-lg shadow-lg">
      <p className="text-xl font-semibold mb-2">Thank you for visiting MastDealHai</p>
        <img src="/favicon.ico" alt="Logo" className="mb-4 mx-auto w-24 h-min" />
        <p className="text-xl font-semibold">On your way to...</p>
        <img src="https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-600x338.png" alt="Amazon" className="mb-4 mx-auto w-40" />
        <div className="mt-4  text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto" role="status">
          </div>
            <span className="text-zinc-900 dark:text-white mt-4">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
