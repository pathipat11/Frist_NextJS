import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Welcome to Next.js</h1>
          <p className={styles.subtitle}>Building Modern Web Applications with Ease</p>
          <a href="./about_me" className={styles.button}>Learn More About Me</a>
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>Why Next.js?</h2>
        <p className={styles.text}>
          Next.js is a powerful React framework that enables you to build 
          server-side rendered and static web applications effortlessly. 
          With built-in features like automatic code splitting, optimized 
          performance, and an easy-to-use API, Next.js is a popular choice 
          for developers looking to create fast, scalable, and SEO-friendly 
          websites.
        </p>
      </div>
    </div>
  );
}
