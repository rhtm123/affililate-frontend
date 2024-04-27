export default function BlogCard({data}){


    return (

<div className="card shadow hover:scale-105 transition-transform duration-300 ease-in-out">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body p-4">

    <div className="flex">
    {data.tags.map((tag,i)=> 
        <div key={i} className="badge badge-primary badge-outline mr-2">{tag}</div>
    )}
    </div>
    <h2 className="card-title">{data.title}</h2>
    {/* <p>How to park your car at your garage?</p> */}
    <div className="card-actions">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
    )

}