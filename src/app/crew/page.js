import Navbar from "../componets/layouts/navbar";
import Crewpage from "./components/crew";


export default function Crew(){
    const pageId = 2;
    return (
        <>
            <Navbar pageId={pageId}/>
            <main className="bg-black w-full h-full">
                <Crewpage/>
            </main>
        </>
    );
}