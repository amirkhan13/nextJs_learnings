"use client"
import { usePathname } from "next/navigation"
export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewID = pathname.split("/")[4];
    return <h1>Review {reviewID }Not Found for Product {productId }</h1>
}