import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h1 className="text-red-500 m-5 font-serif text-2xl underline flex justify-center"> CPRG 306-H: Web Development 2 - Assignments</h1>
        <uL class="grid grid-rows-4 grid-flow-col gap-4 px-2 text-center">
          <Link class=" hover:text-green-500" href="./week-2/">Week 2</Link>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
        </uL>
        
    </main>
  );
}
