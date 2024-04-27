import Link from "next/link"
export default function Navbar(){



    return(
        <div className="navbar bg-base-200">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" href="/">#MastDealHai</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 items-center">
      <li><Link href="/blogs">Blogs</Link></li>
      
      <div className="dropdown dropdown-end ">
        <div tabIndex={0} role="button" className="btn btn-sm">Click</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
      </div>

    </ul>
  </div>
</div>
    )
}