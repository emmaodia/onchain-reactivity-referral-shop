"use client";

import dynamic from "next/dynamic";

const ProductsInner = dynamic(
  () => import("./ProductsInner").then((mod) => mod.ProductsInner),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Products</h2>
        <div className="animate-pulse space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    ),
  }
);

export function Products() {
  return <ProductsInner />;
}
