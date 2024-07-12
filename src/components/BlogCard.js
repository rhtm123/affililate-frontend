import Link from "next/link"
export default function BlogCard({data}){


    return (

<div className="card bg-base-300 shadow hover:scale-105 transition-transform duration-300 ease-in-out">
  {/* <figure><img src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg" alt="car!"/></figure> */}
  <div className="card-body p-4">

    <div className="flex">
    {data.tags.map((tag,i)=> 
        <div key={i} className="badge badge-primary badge-outline mr-2">{tag.name}</div>
    )}
    </div>
    <h2 className="card-title">{data.title}</h2>
    {/* <p>How to park your car at your garage?</p> */}
    <div className="card-actions">
      <Link href={"/top-5/"+data.slug} className="border p-2 mt-2 rounded-lg btn btn-outline btn-primary">Read Now</Link>
    </div>
  </div>
</div>
    )

}