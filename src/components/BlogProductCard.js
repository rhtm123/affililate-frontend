// components/BlogProductCard.js

export default function ProductCard({ product }) {
  // console.log(product)
    return (
      <div className="card my-4 bg-base-300 shadow">
        <div className="card-body p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="badge badge-primary badge-outline">
              {product?.category?.name}
            </span>
            <span className="">₹{product?.mrp}</span>
          </div>
          <h2 className="card-title">{product.name}</h2>
        </div>
      </div>
    );
  }
  