import Image from "next/image";
import Navbar from "./componets/layouts/navbar";
import Landing from "./componets/home/home";

export default function Home() {
  const pageId = 0;

  return (
    <>
      <Navbar pageId={pageId}/>
      <main className="bg-black w-full min-h-screen">
        <Landing/>
      </main>
    </>
  );
}
