import React, { useEffect, useState } from "react";
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

  const fetchProduct = async () => {
    const productResponse = await fetch(`${process.env.API_URL}api/product/product/${data.product.id}`);
    const productData = await productResponse.json();
    // console.log(productData);
    setProduct(productData);
  }

  const fetchFeatures = async () => { 
    const res = await fetch(`${process.env.API_URL}api/product/variantfeatures/?product_variant=${data.id}`);
    const variantFeaturesData = await res.json();
    if (!variantFeaturesData.results || variantFeaturesData.results.length === 0) {
      throw new Error("No features found for this variant");
    }
    // setFeatures(variantFeaturesData.results);
    // console.log(variantFeaturesData)



    const categorizedFeatures = featureCategorys.map(category => ({
      category,
      features: variantFeaturesData.results.filter(feature => feature.feature_category.name === category),
    }))

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


  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="product-detail container mx-auto p-8">
      <div className="product-header bg-base-200 rounded-lg shadow p-4 mb-4">
        <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
        {/* <h2 className="text-xl font-semibold text-gray-700">{productVariant.name}</h2> */}
      </div>

      <div className="variant-switcher bg-base-200 rounded-lg shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Variants</h2>
        <ul className="flex space-x-4">
          {product?.variants.map(variant => (
            <button 
              className={`btn ${variant.id === data.id ? 'btn-primary' : 'btn-outline'}`}
              key={variant.id}
              onClick={() => handleVariantClick(variant.id)}
            >
              <li className="cursor-pointer">{variant.name}</li>
            </button>
          ))}
        </ul>
      </div>

      {/* <div className="product-specs bg-base-200 rounded-lg shadow p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        {featureCategorys.map(category => (
          <div key={category.id} className="mb-4">
            <h3 className="text-lg font-semibold bg-base-100 p-2 rounded">{category.name}</h3>
            <table className="table-auto w-full mt-2 border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left w-1/2">Feature</th>
                  <th className="px-4 py-2 border-l border-gray-400 text-left w-1/2">Value</th>
                </tr>
              </thead>
              <tbody>
                {category.features.map((feature, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{feature.feature.name}</td>
                    <td className="px-4 py-2 border-l border-gray-400">{feature.feature.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div> */}

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

      <div className="affiliate-links bg-base-200 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold bg-base-100 p-2 rounded mb-2">Affiliate Links</h2>
        <div className="flex">
          {affiliateLinks.map((affiliate) => (
            <Link 
              className="ml-2" 
              key={affiliate.id} 
              href={affiliate.affiliate_link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary flex items-center">
                {affiliate.marketplace === 1 && <FaAmazon size={24} className="mr-2" />}
                {affiliate.marketplace === 2 && <SiFlipkart size={24} className="mr-2" />}
                <span className="font-bold">
                  Buy Now
                  {affiliate.current_price ? ` - ₹${affiliate.current_price}` : ""}
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;



