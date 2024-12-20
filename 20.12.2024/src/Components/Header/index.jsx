import styles from "./index.module.scss"

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.logo}>Quickly</h1>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Featurs</a>
                            </li>
                            <li>
                                <a href="#">our blog</a>
                            </li>
                            <li>
                                <a href="#">Downloads</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.btns}>
                        <button className={styles["btn-sing-Up"]}>Sing Up</button>
                        <button className={styles["btn-log-in"]}>Log in</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header