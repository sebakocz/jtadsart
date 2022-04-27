import styles from "../styles/Layout.module.css"
import Footer from "./Footer";
import Topper from "./Topper";


export default function Layout({children}) {
    return(
        <div>
            <Topper/>
            {children}
            <Footer/>
        </div>
    )
}