import { useState, useEffect } from "react"
import CategoryCard from "./CategoryCard";
import Link from "next/link";

export default function CategoryList(){

    const [categorys, setCategorys] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategorys = async () => {
        try {
          setLoading(true);
          const response = await fetch(process.env.API_URL+"api/category/categorys");
          if (!response.ok) {
            throw new Error('Error fetching products');
          }
          const data = await response.json();
          // console.log(data);  
          // setProducts(data);
          setCategorys(data.results)
        } catch (error) {
          console.error(error.message);
        }
        finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchCategorys();
      }, []);


    return(

        <>
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          {categorys.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
                <CategoryCard data={category} />
            </Link>
          ))}
        </div>
        {loading && <span className="loading loading-dots loading-sm"></span>}

        </>
    )
}