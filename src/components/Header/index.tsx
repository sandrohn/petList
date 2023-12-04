import { IonApp, IonHeader, IonIcon } from "@ionic/react"
import { logoIonic } from 'ionicons/icons';
import style from './Header.module.css'

export const Header: React.FC = () => {
    return(
        <section className={style.headerContainer}>         
            <header>
               <h2>Pet List</h2>
               </header>
        </section>
    )
}