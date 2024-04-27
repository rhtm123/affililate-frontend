import Link from "next/link"

export default function NotFound(){


    return(
        <div className="px-8">
<div className="text-sm breadcrumbs">
  <ul>
    <li>
      <Link href={"/"}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Home
      </Link>
    </li> 

    <li>
      Error 404
    </li>
  </ul>
</div>
<br />
  
<div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Error 404</h1>
      <p className="py-6">You have landed on wrong webpage. This page is not available.</p>
      <Link href="/"><button className="btn btn-primary">Go to Home Page</button></Link> 
    </div>
  </div>
</div>
</div>
    )
}