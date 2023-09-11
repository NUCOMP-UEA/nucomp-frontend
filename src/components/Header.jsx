import styles from './Header.module.css'
import {ReactComponent as HamburgerIcon} from '../assets/hamburger.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <HamburgerIcon />
            <div className={styles.hcontent}>
                NUCOMP | Núcleo de Computação da UEA
            </div>
        </header>
    );
}