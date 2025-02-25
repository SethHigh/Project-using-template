import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css"; 

export default function login() {
    return (
    <>
        <Head>
          <title>Login page</title>
          <meta name="description" content="Login to account" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2 className={styles.title_login}>Login to account</h2>
        <div className={styles.box}>
        <div className="container-sm">
            <div className="card-body">
                <form action="/index" method="POST">
                    <div className="form-group">
                        <label htmlFor="Username">Username </label>
                        <input type="text" name="Username" required className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password </label>
                        <input type="text" name="Password" required className="form-control" />
                    </div>
                    <button type="submit" className={styles.button_login}>Login</button>
                </form>
                <Link href="/">
                    <button className={styles.button_login}>Cancel</button>
                </Link>
            </div>
        </div>
        </div>
    </>
    );
}