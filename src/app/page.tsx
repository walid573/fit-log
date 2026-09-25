import { Suspense } from "react";
import Banner from "./components/Banner";
import Library from "./components/Library";
import Loading from "./loading";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<Loading />}>
    <Library />
</Suspense>
    </div>
  );
}
