import Image from "next/image";
import Wackamole from "./Wackamole";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center bg-slate-700 ">
        <Wackamole />
    </main>
  );
}
