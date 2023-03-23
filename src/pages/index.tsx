import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import TextField from "@/components/TextField";
import { useForm } from "react-hook-form";

export default function Home() {
  const useFormObj = useForm();

  return (
    <>
      <Head>
        <title>Audiophile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TextField useFormObj={useFormObj} name="test" />
      </main>
    </>
  );
}
