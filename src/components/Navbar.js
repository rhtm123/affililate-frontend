import Link from "next/link"
export default function Navbar(){

    return(
  <div className="navbar bg-base-200">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" href="/">#MastDealHai</Link>
  </div>

  <dialog id="my_modal_2" className="modal md:modal-top">
  <div className="min-h-screen modal-box md:model-top">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-md font-bold text-xl btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>


    <label className="flex items-center gap-2 px-0">
      
    <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>

    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered md:w-full" />
    </div>
    </label>

  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>


  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-1 items-center">


    {/* <label onClick={()=>document.getElementById('my_modal_2').showModal()} className="flex items-center input input-sm px-2 input-bordered">
      <input onClick={()=>document.getElementById('my_modal_2').showModal()} type="text" className="px-2" placeholder="Search" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
    </label> */}


      <li><Link href="/top-10">Top 10</Link></li>
      
      {/* <div className="dropdown dropdown-end ">
        <div tabIndex={0} role="button" className="btn btn-sm">Click</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
      </div> */}

    </ul>
  </div>
</div>
    )
}