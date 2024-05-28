// import Header from "../components/Amazon_Header";
import Header from "../components/Header";

import Head from "next/head";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Card from "../components/cards";
import DeliveryCard from "@/components/DeliveryCard";
// import CheckoutProduct from "@/components/CheckoutProduct";
import { useUser } from "@auth0/nextjs-auth0/client";
import Footer from "@/components/Footer";
export default function Home({ products }) {
  const { user, error, isLoading } = useUser();
  // Splash screen
  if (isLoading) return <div></div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Zilion E-commerce</title>
      </Head>
      {/* Header */}
      {/* <Header /> */}
      <Header className="" />
      <main className="max-w-screen-2xl mx-auto p-0">
        <Banner />
        <ProductFeed products={products} />
        {/* Card placeholder */}
        <h1 className="text-3xl font-bold p-5">Featured Category Section</h1>
        <section className="grid sm:grid-cols-3 gap-4 p-5 grid-cols-1">
          <Card
            name="Electronic gadgets"
            label="Explore the latest tech and gadgets."
            id="https://melcom.com/media/catalog/category/Cat_-_Mobile__1.jpg"


          />
          <Card
            name="Hair and beauty"
            label="Discover beauty products and hair essentials."
            id="https://melcom.com/media/catalog/category/Toys_Kids_and_babies_3.jpg"

          />
          <Card
            name="Sports and wellness"
            label="Stay active with sports and wellness items."
            id="https://melcom.com/media/catalog/category/Sports_Fitness.jpg"

          />
          <Card
            name="Grocery"
            label="Stock up on essential groceries."
            id="https://melcom.com/media/catalog/category/Cat_-_Supermaket_2_3.jpg"

          />
          <Card
            name="Kitchen and decor"
            label="Enhance your kitchen and home decor."
            id="https://melcom.com/media/catalog/category/Cat_-_Electronics_3_1_.jpg"

          />

          <Card
            name="Furniture"
            label="Explore trendy furnitures to decorate your house."
            id="https://melcom.com/media/catalog/category/Cat_-_Home_Furniture_1_2.jpg"

          />
        </section>
        <DeliveryCard />
        <Footer />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await res.json();
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
      },
    };
  }
}
