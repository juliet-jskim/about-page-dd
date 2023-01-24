import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import data from "@/data/employee.json"
import EmployeesCard from "@/components/EmployeeCard"
import styles from "@/styles/About.module.css"


export default function About() {

    const [employee, setEmployee] = useState([...data])

    return (
        <>
            <Head>
                <title>Employees</title>
                <meta name="description" content="Top Artists" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
               <h1 className="Dwight" style={{position:'absolute', top:280, left:280, zIndex: -1, fontSize:60}}>Dwight Schrute</h1>
               <h1 className="Michael" style={{position:'absolute', top:280, left:850, zIndex: -1, fontSize:60}}>Michael Scott</h1>
               <h1 className="Nellie" style={{position:'absolute', top:700, left:280, zIndex: -1, fontSize:60}}>Nellie Bertram</h1>
               <h1 className="Jim" style={{position:'absolute', top:700, left:850, zIndex: -1, fontSize:60}}>Jim Halpert</h1>
               <h1 className="Pam" style={{position:'absolute', top:1210, left:280, zIndex: -1, fontSize:60, width:600}}>Pam Beasley</h1> 
               <h1 className="kevin" style={{position:'absolute', top:1210, left:850, zIndex: -1, fontSize:60, width:600}}>Kevin Malone</h1>   
               <h1 className="creed" style={{position:'absolute', top:1680, left:620, zIndex: -1, fontSize:60}}>Creed Bratton</h1>   
        
                <div className={styles.description}>
                    <Link className={styles} href="/">Home</Link>
                </div>
                    <div className={styles.center}>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.employee}>
                            {employee && employee.map((info, index) => {
                                return (
                                    <EmployeesCard
                                        key={index}
                                        quote={info.quote}
                                        firstName={info.firstName}
                                        lastName={info.lastName}
                                        department={info.department}
                                        specialSkills={info.specialSkills}
                                        image={info.image}
                                    />
                                )
                            })}
                        </div>
                    </div>
            </main>
        </>
    )

}