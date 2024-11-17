"use client"

import Feedback from "./components/feedback";
import Hero from "./components/hero";
import Product from "./components/product";
import ProductCategories from "./components/productlist";
export default function Home() {
  return (
    <div>
<Hero/>
<Product/>
<ProductCategories/>
<Feedback/>

    </div>
  );
}
