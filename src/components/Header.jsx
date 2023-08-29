import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    ); // .header eh por causa da classe do css header
}
