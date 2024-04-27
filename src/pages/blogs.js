import Head from "next/head"
import Link from "next/link"
import BlogCard from "@/components/BlogCard";



export default function Blogs(){



    const blogPosts = [
        {
          title: "10 Tips for Mastering JavaScript",
          author: "John Doe",
          date: "April 5, 2024",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          tags: ["JavaScript", "Programming", "Tips"]
        },
        {
          title: "The Art of Responsive Web Design",
          author: "Jane Smith",
          date: "March 28, 2024",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          tags: ["Web Design", "Responsive Design", "CSS"]
        },
        {
          title: "Exploring the Benefits of Serverless Architecture",
          author: "Alex Johnson",
          date: "February 15, 2024",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          tags: ["Serverless", "Cloud Computing", "Architecture"]
        },
        // Add more blog posts as needed
      ];


    return(

        <>
        <Head>


        </Head>
        
        <div className="px-4">

        <div className="text-sm breadcrumbs">
            <ul>
            <li><Link href="/">Home</Link></li> 
            <li>Blogs</li>
            </ul>
        </div>

        <div className="text-center pt-2 pb-6">
            <h1 className="text-4xl py-2">Blogs</h1>
            <h2 className="text-xl opacity-50">Read the articles and find the best product in your budget</h2>
        </div>


        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">

            {blogPosts.map(( blog, i )=>
                <BlogCard key={i} data={blog} />
            )
            }

        </div>

        </div>

        <br />
        <br />

        
        </>
    )
}