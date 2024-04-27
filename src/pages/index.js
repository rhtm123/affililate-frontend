// import prisma from "../../lib/prisma";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  // console.log(feed);
  return (
    <>

<div className="container max-w-none bg-base-100 p-8">

{/* Grid */}
<div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
  <div>
    <h1 className="block text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight ">
      Start your Coding journey with <span className="text-secondary">Coding Chaska</span>
    </h1>

    {/* Buttons */}
    <div className="mt-7 grid gap-3 w-full sm:inline-flex">
    <Link
        className="btn btn-outline btn-primary"
        href="/programs"
      >
        Programs
      </Link>

      <Link
      className="btn btn-outline btn-primary"
      href="/live-courses"
      >
        Live Courses
        
      </Link>
      <Link
        className="btn btn-outline btn-primary"
        href="/self-paced-courses"
      >
        Self Paced Courses
      </Link>
    </div>
    {/* End Buttons */}
    
  </div>
  {/* End Col */}
  <div className="relative ms-4">
    <img
      className="w-full rounded-md"
      src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Image Description"
    />
    
    {/* End SVG*/}
  </div>
  {/* End Col */}
</div>
{/* End Grid */}

</div>



    </>
  );
}

