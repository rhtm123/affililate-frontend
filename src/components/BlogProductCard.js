import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import React from "react";

export default function ProductCard({ product }) {
  const [firstVariant, setFirstVariant] = React.useState();
  const [variants, setVariants] = React.useState([]);

  React.useEffect(() => {
    const fetchPriceData = async (affiliateId) => {
      try {
        const res = await fetch(`${process.env.API_URL}api/product/pricetracks/?affiliate=${affiliateId}`);
        const data = await res.json();
        if (data.results.length > 0) {
          // Sort prices by created date and select the most recent one
          const sortedPrices = data.results.sort((a, b) => new Date(b.created) - new Date(a.created));
          return sortedPrices[0].price;
        }
        return null;
      } catch (err) {
        console.error("Error fetching price data:", err);
        return null;
      }
    };

    const fetchVariants = async () => {
      try {
        const res = await fetch(`${process.env.API_URL}api/product/variants/?product=${product.id}`);
        let data = await res.json();
        setFirstVariant(data.results[0]);

        const variantsWithPrices = await Promise.all(
          data.results.map(async (variant) => {
            const affiliatesWithPrices = await Promise.all(
              variant.affiliates.map(async (affiliate) => {
                const price = await fetchPriceData(affiliate.id);
                return { ...affiliate, price };
              })
            );
            return { ...variant, affiliates: affiliatesWithPrices };
          })
        );

        setVariants(variantsWithPrices);
      } catch (err) {
        console.log(err);
      }
    };

    fetchVariants();
  }, [product.id]);

  const handleBuyNowClick = (affiliateLink) => {
    const loadingPageUrl = `/loading?url=${encodeURIComponent(affiliateLink)}`;
    window.open(loadingPageUrl, "_blank");
  };


  return (
    <div className="card my-4 bg-base-300 shadow">
      <div className="card-body p-4">
        <span className="badge badge-primary badge-outline">{product.category?.name}</span>
        <div className="flex justify-between items-center mb-2">
          <h2 className="card-title">
          {firstVariant ? (
              <Link href={`/product/${firstVariant?.slug}`}>
                {product.name}
              </Link>
            ) : (
              product.name
            )}
          </h2>
          {/* <span className="text-right">
            ₹{firstVariant?.affiliates[0]?.price || firstVariant?.mrp}
          </span> */}
        </div>

        <div className="">
          {variants.map((variant) => (
            <div
              key={variant.id}
              className="border bg-base-100 border-dashed rounded-lg px-4 py-2 flex flex-col md:flex-row justify-between md:items-center mb-2"
            >
              <span className="text-lg font-bold">{variant?.name}</span>
              <div className="md:flex">
                {variant.affiliates.map((affiliate) => (
                  
                    <button key={affiliate.id} className="btn mb-2 md:ml-2 md:mb-0 btn-sm md:btn-md btn-primary" onClick={() => handleBuyNowClick(affiliate.affiliate_link)}>
                      {affiliate.marketplace === 1 && (
                        <FaAmazon size={24} className="mr-2" />
                      )}
                      {affiliate.marketplace === 2 && (
                        <SiFlipkart size={24} className="mr-2" />
                      )}
                      <span className="font-bold">
                        Buy Now
                        {affiliate.price ? ` - ₹${affiliate.price}` : ""}
                      </span>
                    </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

