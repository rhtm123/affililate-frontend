// components/BlogProductCard.js

export default function ProductCard({ product }) {
    return (
      <div className="card my-2 bg-base-300 shadow">
        <div className="card-body p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="badge badge-primary badge-outline">
              {product.category.name}
            </span>
            <span className="text-gray-500">₹{product.price}</span>
          </div>
          <h2 className="card-title">{product.name}</h2>
        </div>
      </div>

    );
  }
  