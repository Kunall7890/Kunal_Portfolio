'use client';

import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Hello, I&apos;m</p>
            
            <h1 className={styles.name}>Kunal Jaiswal</h1>
            
            <p className={styles.role}>React Developer & Full Stack Engineer</p>
            
            <div className={styles.divider} />
            
            <p className={styles.description}>
              I build interactive and responsive web applications with React.js, Next.js, 
              and modern technologies. Specialized in creating pixel-perfect UIs, 
              state management, and delivering high-quality solutions with a focus on 
              performance and user experience.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>View Projects</span>
              <VscArrowRight size={18} />
            </Link>
            
            <Link href="/about" className={styles.secondaryAction}>
              <span>Learn More</span>
            </Link>
          </div>

          <div className={styles.links}>
            <a 
              href="https://github.com/Kunall7890" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>
            
            <span className={styles.linkSeparator}>/</span>
            
            <a 
              href="mailto:jaiswallkunal786@gmail.com" 
              className={styles.link}
            >
              <VscMail size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
