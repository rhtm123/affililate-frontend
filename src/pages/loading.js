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
        <img src="/favicon.ico" alt="Logo" className="mb-4 mx-auto w-24 h-min" />
        <p className="text-xl font-semibold">On your way to...</p>
        <img src="https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-600x338.png" alt="Amazon" className="mb-4 mx-auto w-40" />
        <div className="mt-4 flex justify-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
