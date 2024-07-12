import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

const ProductDetail = ({ data, featureCategorys }) => {
  // console.log(data);
  const [productVariant, setProductVariant] = useState(data);
  const [product, setProduct] = useState();
  const [features, setFeatures] = useState([]);
  const [priceTracks, setPriceTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [affiliateLinks, setAffiliateLinks] = useState(data.affiliates)
  const router = useRouter();
  // const [featureCategorys, setFeatureCategorys] = useState([]);

  const fetchProduct = async () => {
    const productResponse = await fetch(`${process.env.API_URL}api/product/product/${data.product.id}`);
    const productData = await productResponse.json();
    console.log(productData);
    setProduct(productData);
    console.log(productData);
  }

  const fetchFeatures = async () => { 
    const res = await fetch(`${process.env.API_URL}api/product/variantfeatures/?product_variant=${data.id}`);
    const variantFeaturesData = await res.json();

    console.log(`${process.env.API_URL}api/product/variantfeatures/?product_variant=${data.id}`)

    console.log(variantFeaturesData.results);

    // featureCategorys.map(featureCat => )



    const categorizedFeatures = featureCategorys.map(category => ({
        category,
        features: variantFeaturesData.results.filter(feature => feature.feature_category.name === category),
      }))
      .filter(category => category.features.length > 0);

      console.log(categorizedFeatures)
      setFeatures(categorizedFeatures);
    }

  const fetchPriceList = async ()=> {

   }

  useEffect(() => {
      try {
        setLoading(true);
        fetchProduct();
        // fetchVariants();
        fetchFeatures();
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
  }, [data]);

  useEffect(() => {
    setAffiliateLinks(data.affiliates);
  }, [data]);


  const handleBuyNowClick = (affiliateLink) => {
    const loadingPageUrl = `/loading?url=${encodeURIComponent(affiliateLink)}`;
    window.open(loadingPageUrl, "_blank");
  };


  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="product-detail container mx-auto p-8">
      <div className="product-header bg-base-200 rounded-lg shadow p-4 mb-4">
        <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
        {/* <h2 className="text-xl font-semibold text-gray-700">{productVariant.name}</h2> */}
      </div>

      <div className="flex flex-col md:flex-row mb-4">
        <div className="variant-switcher bg-base-200 rounded-lg shadow p-4 mb-4 md:mb-0 md:w-1/2 md:mr-2">
          <h2 className="text-lg font-semibold mb-2">Variants</h2>
          <ul className="flex flex-wrap space-x-2 md:space-x-4">
            {product?.variants.map((variant) => (
              <Link href={`/product/${variant.slug}`} key={variant.slug}>
                <button
                  className={`btn ${
                    variant.name === data.name ? "btn-primary" : "btn-outline"
                  }`}
                  key={variant.name}
                >
                  <li className="cursor-pointer">{variant.name}</li>
                </button>
              </Link>
            ))}
          </ul>
        </div>

        <div className="affiliate-links bg-base-200 rounded-lg shadow p-4 md:w-1/2 md:ml-2">
          <h2 className="text-xl font-semibold bg-base-100 p-2 rounded mb-2">
            Affiliate Links
          </h2>
          <div className="flex flex-wrap">
            {affiliateLinks.map((affiliate) => (
              <button
                key={affiliate.id}
                className="btn btn-primary flex items-center mb-2 md:ml-2 w-full md:w-auto"
                onClick={() => handleBuyNowClick(affiliate.affiliate_link)}
              >
                {affiliate.marketplace === 1 && (
                  <FaAmazon size={24} className="mr-2" />
                )}
                {affiliate.marketplace === 2 && (
                  <SiFlipkart size={24} className="mr-2" />
                )}
                <span className="font-bold">
                  Buy Now
                  {affiliate.current_price
                    ? ` - ₹${affiliate.current_price}`
                    : ""}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="product-specs bg-base-200 rounded-lg shadow p-4 mb-4">
  <h2 className="text-xl font-semibold mb-2">Features</h2>
  {features.map(({ category, features }) => (
    <details key={category} className="collapse collapse-arrow bg-base-200 mb-4">
      <summary className="collapse-title text-lg font-semibold bg-base-100  rounded">
        {category}
      </summary>
      <div className="collapse-content">
        <table className="table-auto w-full mt-2 border-collapse">
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 w-1/2">{feature.feature.name}</td>
                <td className="px-4 py-2 w-1/2 border-l border-gray-200">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: feature.feature.value,
                    }}
                  ></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  ))}
</div>


      {/* <div className="price-tracking bg-base-200 rounded-lg shadow p-4 mb-4">
        <div className="bg-base-100 p-2 rounded">
        <h2 className="text-xl font-semibold ">Price Tracking</h2>
        </div>
        <ul className="list-disc ml-5">
          {priceTracks.map(track => (
            <li key={track.id}>
              {new Date(track.created).toLocaleDateString()}: ₹{track.current_price}
            </li>
          ))}
        </ul>
      </div> */}

    
    </div>
  );
};

export default ProductDetail;



