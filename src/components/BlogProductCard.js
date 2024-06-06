import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

export default function ProductCard({ product }) {
  const firstVariant = product.variants[0] || {};
  const mrp = firstVariant.mrp || product.mrp;

  return (
    <div className="card my-4 bg-base-300 shadow">
      <div className="card-body p-4">
        <span className="badge badge-primary badge-outline">{product.category?.name}</span>
        <div className="flex justify-between items-center mb-2">
          <h2 className="card-title">
            <Link href={`/product/${firstVariant.id}`}>
              {product.name}
            </Link>
          </h2>
          <span className="text-right line-through">₹{mrp}</span>
        </div>

        <div className="">
          {product.variants.length > 0 ? (
            product.variants.map((variant) => (
              <div key={variant.id} className="border bg-base-100 border-dashed rounded-lg px-4 py-2 flex justify-between items-center mb-2">
                <span className="text-lg font-bold">{variant?.name}</span>
                <div className="flex">
                  {variant.affiliates.map((affiliate) => (
                    <Link className="ml-2" key={affiliate.id} href={affiliate.affiliate_link} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-primary">
                        {affiliate.marketplace === 1 && <FaAmazon size={32} className="mr-2" />}
                        {affiliate.marketplace === 2 && <SiFlipkart className="mr-2" />}
                        <span className="font-bold">
                          Buy Now
                          {affiliate.current_price ? ` - ₹${affiliate.current_price}` : ""}
                        </span>
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="flex-1">
              <span></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

