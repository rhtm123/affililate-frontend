// components/BlogProductCard.js

import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

export default function ProductCard({ product }) {
  const firstVariant = product.variants[0] || {};
  const mrp = firstVariant.mrp || product.mrp;

  return (
    <div className="card my-4 bg-base-300 shadow">
      <div className="card-body p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="badge badge-primary badge-outline">
            {product.category?.name}
          </span>
          {mrp && (
            <span className="text-right">
              <span className="line-through">₹{mrp}</span>
            </span>
          )}
        </div>
        <h2 className="card-title mb-4">{product.name}</h2>
        <div className="flex flex-wrap gap-4">
          {product.variants.length > 0 ? (
            product.variants.map((variant) => (
              <div key={variant.id} className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  {variant.name && (
                    <span className="text-lg font-bold">{variant.name}</span>
                  )}
                </div>
                {variant.affiliates.map((affiliate) => (
                  <div key={affiliate.id} className="mb-2">
                    <Link href={affiliate.affiliate_link} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-primary flex justify-between items-center ">
                        {affiliate.marketplace === 1 && <FaAmazon className="mr-2" />}
                        {affiliate.marketplace === 2 && <SiFlipkart className="mr-2" />}
                        <span>
                          Buy Now
                          {affiliate.current_price ? ` - ₹${affiliate.current_price}` : ""}
                        </span>
                      </button>
                    </Link>
                  </div>
                ))}
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
