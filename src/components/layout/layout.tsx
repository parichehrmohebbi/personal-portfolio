import Header from "@components/layout/hedear";
import Footer from "@components/layout/footer";
import styles from "@styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  );
}
