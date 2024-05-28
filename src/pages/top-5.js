import Head from "next/head";
import Link from "next/link";
import BlogList from "@/components/BlogList";

export default function Blogs() {
  // const [blogPosts, setBlogPosts] = useState([]);

  // const fetchBlogs = async () => {
  //   try {
  //     const response = await fetch(process.env.API_URL +`api/blog/blogs`);
  //     if (!response.ok) {
  //       throw new Error('Error fetching products');
  //     }
  //     const data = await response.json();
  //     // console.log(data);  
  //     // setProducts(data);
  //     setBlogPosts(data.results)
  //   } catch (error) {
  //     console.error(error.message);
    
  //   }
  // };

  // useEffect(() => {
  //   fetchBlogs();
  // }, []);

  return (
    <>
      <Head>
        <title>Top 5 products from Amazon, Flipkart | MastDealHai</title>
        <meta name="description" content="Discover expert buying tips, top brands, and exclusive deals! Save money on your next purchase with our comprehensive guide" />
      </Head>
      
      <div className="px-4 md:px-8 min-h-screen">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>Home</Link></li> 
            <li>Top 5 Products</li>
          </ul>
        </div>

        <div className="text-center pt-2 pb-6">
          <h1 className="text-4xl py-2">Top 5 Products</h1>
          <h2 className="text-xl opacity-50">What to find the best product in your budget?</h2>
        </div>

        <BlogList url={process.env.API_URL +`api/blog/blogs`}/>
        {/* <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          {blogPosts.map((blog) => (
            <Link key={blog.id} href={`/top-5/${blog.slug}`}>
                <BlogCard data={blog} />
            </Link>
          ))}
        </div> */}
      </div>
    </>
  );
}
