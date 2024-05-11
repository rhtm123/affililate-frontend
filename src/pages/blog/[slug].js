// pages/blogs/[slug].js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProductCard from "@/components/BlogProductCard";

export default function Blog() {
  const router = useRouter();
  const { slug } = router.query;
  const [blogData, setBlogData] = useState(null);
  const [blogProduct, setBlogProduct] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(process.env.API_URL + `api/blog/blog/${slug}`)
        .then((response) => response.json())
        .then((data) => setBlogData(data))
        .catch((error) => console.error("Error fetching blog data:", error));
    }
  }, [slug]);

  useEffect(() => {
    if (blogData) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(
            process.env.API_URL +
              `api/blog/blogproducts/?blog=${blogData.id}&product=`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const data = await response.json();
          setBlogProduct(data.results);
        } catch (error) {
          console.error("Error fetching blog products:", error);
        }
      };
      fetchProducts();
    }
  }, [blogData]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main>
        <Head>
          <title>{blogData.title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        {/* <!-- Blog Article --> */}
        <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto select-none">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>Home</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>{blogData.title}</li>
            </ul>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl	pb-6 font-bold">{blogData.title}</h1>

            {/* <!-- Avatar Media --> */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={
                      "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"
                    }
                    alt={blogData.title}
                  />
                </div>

                <div className="grow">
                  <div className="flex justify-between items-center gap-x-2">
                    <div>
                      <div className="inline-block">
                        <div className="sm:mb-1 block text-start">
                          <span className="font-semibold">
                            {blogData.author?.username}
                          </span>
                        </div>
                      </div>

                      <ul className="text-xs text-gray-500">
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                          {new Date(blogData.created).toDateString()}
                        </li>
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                          {blogData.read_time} min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div
              className=" prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blogData.detail }}
            />
            <div>
              {blogProduct &&
                blogProduct.map(({ product }) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* <!-- End Content --> */}
          </div>
        </div>
      </main>
    </>
  );
}
