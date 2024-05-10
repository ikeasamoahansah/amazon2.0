import Header from "../components/Header";
import Head from "next/head";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
// import CheckoutProduct from "@/components/CheckoutProduct";
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Zilion E-commerce</title>
      </Head>
      {/* Header */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
