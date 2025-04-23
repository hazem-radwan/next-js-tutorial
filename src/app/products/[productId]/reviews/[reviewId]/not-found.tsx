"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  const [, , productId, , reviewId] = pathname.split("/");
  return (
    <div>
      <h2>
        review {reviewId} of product {productId} is not found
      </h2>
    </div>
  );
}
