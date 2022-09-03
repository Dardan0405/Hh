import React,{lazy,Suspense} from "react";
import Loading from "../../Components/Shared/Loading/Loading";
const Lazyloaded = lazy (()=> import('./Home'));

function Home() {
    return(
        <Suspense fallback={<Loading/>}>
            <Lazyloaded/>
        </Suspense>
    )
};
export default Home