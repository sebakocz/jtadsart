import styles from "../styles/Footer.module.css"
import personaIcon from "../public/persona_icon.jpg"
import Image from "next/image";
import {Zoom} from "react-reveal";


export default function Footer() {
    return (
        <div className={styles.main}>
            <Zoom>
                <h2 className={styles.text}>Jtad. Just a totally awesome dude.</h2>
            </Zoom>
            <div className={styles.personaIconBackground}>
                <div className={styles.personaIcon}>
                    <Image src={personaIcon} alt={"Jtad's cool persona"}/>
                </div>
            </div>
            <div className={styles.backgroundShape}>

            </div>
        </div>
    )
}