import Link from "next/link";

export default function Home() {
  
  let headerStyles = "text-red-500 m-5 font-serif text-2xl underline flex justify-center";
  let textStyles = "hover:text-green-500"

  return (
    <main>
        <h1 className={headerStyles}> CPRG 306-H: Web Development 2 - Assignments</h1>
        <uL class="grid grid-rows-4 grid-flow-col gap-4 px-2 text-center">
          <Link class={textStyles} href="./week-2/">Week 2</Link>
          <Link class={textStyles} href="./week-3/">Week 3</Link>
          <Link class={textStyles} href="./week-4/">Week 4</Link>
          <Link class={textStyles} href="./week-5/">Week 5</Link>
          <Link class={textStyles} href="./week-6/">Week 6</Link>
          <Link class={textStyles} href="./week-7/">Week 7</Link>
          <Link class={textStyles} href="./week-8/">Week 8</Link>
          <Link class={textStyles} href="./week-9/">Week 9</Link>
          <Link class={textStyles} href="./week-10/">Week 10</Link>
          <div>01</div>
          <div>01</div>
          <div>01</div>
        </uL>
        
    </main>
  );
}
