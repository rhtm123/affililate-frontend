
import Link from "next/link"
import Error404 from "@/components/Error404";

import BlogList from "@/components/BlogList";
import Head from "next/head";

export default function CategoryPage({data,error}){

    if (error) return <Error404 />;


    return(

        <>
        <Head>
        <title>{data?.name} Top 5 products from Amazon, Flipkart | MastDealHai</title>
        <meta name="description" content={`Discover the Top 5 best-rated ${data?.name} products under your budget on Amazon & Flipkart! Get expert insights & find the perfect choice for your needs.`} />
      </Head>   


        <div className="px-4 md:px-8 min-h-screen">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>Home</Link></li> 
                    <li><Link href="/top-5">Top 5</Link></li>
                    <li>{data?.name}: Top 5 Products</li>
                </ul>
            </div>

            <div className="text-center pt-2 pb-6">
            <h1 className="text-4xl py-2">{data?.name}: Top 5 Products</h1>
            <h3 className="text-xl opacity-70 md:w-2/3 m-auto">{data?.description}</h3>
            </div>

            <BlogList url={process.env.API_URL +`api/blog/blogs?category=`+data?.id}/>



        </div>



        </>
    )
}


export async function getServerSideProps(context) {
    // Fetch data from external API
    const {slug} = context.params;
    const url = process.env.API_URL+"api/category/category/"+slug;
    // console.log(url);
    const res = await fetch(url)
    const error = res.ok ? false : true
    const data = await res.json()
    // console.log(data);
  
    return { 
        props: { 
            data:data, error:error
        } 
  
    }
  }