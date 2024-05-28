// import prisma from "../../lib/prisma";
import Head from "next/head";
import Link from "next/link";

import CategoryList from "@/components/CategoryList";

export default function Home() {
  // console.log(feed);
  return (
    <>

  <Head>
    <title>Top Deals & Price Tracking | Save Big on Amazon & Flipkart | MastDealHai</title>
    <meta name="description" content="Find the hottest deals on Amazon & Flipkart! Track product prices & discover Top 5 budget-friendly options across categories. Save money effortlessly" />

  </Head>

<div className="max-w-none bg-base-100 p-4 md:p-8">

{/* Grid */}
<div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
  <div>
    <h1 className="block text-4xl font-bold md:text-4xl lg:text-6xl">
      <span className="text-secondary my-6">#Mast Deal Hai🔥</span>
    </h1>
    <h3 className="text-lg pt-2">
     We help you find the best deals on Amazon, Flipkart & other major Indian stores. Compare prices, track discounts & never miss a steal again!
    </h3>
    {/* Buttons */}
    <div className="mt-4 grid gap-3 w-full sm:inline-flex">
    <Link
        className="btn btn-outline btn-primary"
        href="/top-5"
      >
        Top 5 Products
      </Link>

    </div>
    {/* End Buttons */}
    
  </div>
  {/* End Col */}
  <div className="relative ms-4">
    <img
      className="w-full rounded-md"
      src="https://images.unsplash.com/photo-1576748872293-f4972ceda096?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Mast Deal"
    />
    
    {/* End SVG*/}
  </div>
  {/* End Col */}
</div>
{/* End Grid */}

</div>




<section class="bg-base-200">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">Find Top 5 by category</h2>
        <p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">Find the best deals in your category you want to purchase.</p>
        
        <CategoryList />
    </div>
</section>




    </>
  );
}

