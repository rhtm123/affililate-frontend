import BlogCard from "./BlogCard";
import { useState, useEffect} from "react";
import Link from "next/link";

export default function BlogList({url}){
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log(url);

    const fetchBlogs = async () => {
        setLoading(true)
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Error fetching products');
          }
          const data = await response.json();
          console.log(data);  
          // setProducts(data);
          setBlogPosts(data.results)
        } catch (error) {
          console.error(error.message);
        }  finally {
            setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchBlogs();
      }, []);

    return (
        <>

        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        {blogPosts
          .filter((blog) => blog.is_published)
          .map((blog) => (
            <Link key={blog.id} href={`/top-5/${blog.slug}`}>
              <BlogCard data={blog} />
            </Link>
          ))}

          {loading && <span className="loading loading-dots loading-sm"></span>}
        </div>

        </>
    )
}