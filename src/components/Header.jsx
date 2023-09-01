import styles from './Header.module.css'
import hamburgerIcon from '../assets/hamburger.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.hcontent}>
                NUCOMP | Núcleo de Computação da UEA
            </div>
        </header>
    );
}