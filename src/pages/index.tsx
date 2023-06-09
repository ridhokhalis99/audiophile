import Categories from "@/sections/categories";
import Hero from "@/sections/hero";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Categories />
    </main>
  );
}
