import Head from "next/head";
import Landing from "../modules/init";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/logoFull.png" />
      </Head>

      <Landing />

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
