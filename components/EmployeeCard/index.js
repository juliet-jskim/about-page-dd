import Image from "next/image"
import styles from './styles.module.css'

export default function EmployeeCard ({
    colour = "purple",
    font= "0",
    quote = '',
    department = '',
    specialSkills = '',
    image=""

}) {
    return (
       
        <div className={styles.employee__container}>
            <Image
            src={image}
            alt={quote}
            width={300}
            height={300}
        />  
        <div className='stats'>
        <p><>Quote: </>{quote}</p>
        <p><>Department: </>{department}</p>
        <p><>Special Skills: </>{specialSkills}</p>
        </div>
    </div>

    )
}