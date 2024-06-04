// components/BlogProductList.js

import { useState, useEffect } from "react";
import ProductCard from "./BlogProductCard";

export default function BlogProductList({ blog }) {
  const [blogProducts, setBlogProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsAndVariants = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.API_URL}api/blog/blogproducts/?blog=${blog.id}&product=`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const productsWithVariants = await Promise.all(
          data.results.map(async (blogProduct) => {
            const productResponse = await fetch(
              `${process.env.API_URL}api/product/variants/?product=${blogProduct.product.id}`
            );
            if (!productResponse.ok) {
              throw new Error("Failed to fetch product variants");
            }
            const productVariants = await productResponse.json();
            return {
              ...blogProduct.product,
              variants: productVariants.results,
            };
          })
        );
        setBlogProducts(productsWithVariants);
      } catch (error) {
        console.error("Error fetching blog products or variants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsAndVariants();
  }, [blog.id]);

  return (
    <>
      {blogProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}

      {loading && <span className="loading loading-dots loading-sm"></span>}
    </>
  );
}