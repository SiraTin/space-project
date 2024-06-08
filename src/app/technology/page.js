import Navbar from "../componets/layouts/navbar";
import Technologypage from "./components/technology";

export default function Technology(){
    const pageId = 3;

    return(
        <>
            <Navbar pageId={pageId}/>
            <main className="w-full min-h-screen bg-black">
                <Technologypage/>
            </main>
        </>
    );
}