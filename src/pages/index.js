import Header from '../components/Header';
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* Header */} 
      <Header/>
    </div>
  );
}
