import Link from "next/link";

export default function StudentInfoComponent() {
    return(
        <div>
            <h2> Student Information</h2>
            <p><b>Name: </b>Daniel Asefa</p>
            <b>GitHub: </b> 
            <Link href="https://github.com/CoffeeMug975/cprg306-assignments">CoffeeMug975</Link>
        </div>
    )
}