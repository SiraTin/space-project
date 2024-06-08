
import Navbar from "../componets/layouts/navbar";
import Destinationpage from "./componnets/section";



export default function Destination(){
    const pageId = 1;
    return (
        <>
            <Navbar pageId={pageId}/>
            <main className="bg-black w-full min-h-screen flex flex-col justify-center
                bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-no-repeat bg-cover">
               <Destinationpage/>
            </main>
        </>
    );
}