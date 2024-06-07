// components/BlogProductList.js

import { useState, useEffect } from "react";
import ProductCard from "./BlogProductCard";

export default function BlogProductList({ blog }) {
  const [blogProducts, setBlogProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.API_URL}api/blog/blogproducts/?blog=${blog.id}&product=`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setBlogProducts(data.results);

      } catch (error) {
        console.error("Error fetching blog products or variants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [blog.id]);

  return (
    <>
      {blogProducts.map((product) => (
        <ProductCard product={product?.product} key={product?.product.id} />
      ))}

      {loading && <span className="loading loading-dots loading-sm"></span>}
    </>
  );
}