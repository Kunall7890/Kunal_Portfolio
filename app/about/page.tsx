'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Kunal Jaiswal</h1>
              <p className={styles.role}>React Developer at NEXEM Technologies</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Dehradun, India
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/Kunall7890" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;m a React Developer and Full Stack Engineer passionate about building 
                interactive, responsive web applications that users love. I specialize in modern 
                JavaScript/TypeScript, React, and Next.js, creating pixel-perfect UIs with a focus 
                on performance, scalability, and clean code architecture.
              </p>
              
              <p className={styles.paragraph}>
                With experience at NEXEM Technologies and working on collaborative platforms like 
                Figma Clone with real-time synchronization, I&apos;m skilled in state management, 
                RESTful APIs, and cross-browser compatibility. I believe in translating designs 
                into production-ready code while maintaining best practices and high-quality standards.
              </p>
              
              <p className={styles.paragraph}>
                Bachelor of Technology in Computer Science from Graphic Era Hill University (2020-2024).
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Feb 2025 – Dec 2025</span>
                </div>
                <h3 className={styles.expRole}>React Developer</h3>
                <p className={styles.expCompany}>NEXEM Technologies (Remote)</p>
                <ul className={styles.expList}>
                  <li>Built interactive and responsive web applications using React.js, creating reusable component libraries that reduced development time by 30%</li>
                  <li>Implemented state management solutions using React Hooks and Redux, integrated RESTful APIs for seamless data flow</li>
                  <li>Optimized component rendering to improve application performance by 25%</li>
                  <li>Translated Figma designs into pixel-perfect, production-ready code with cross-browser compatibility</li>
                  <li>Collaborated with cross-functional teams using Git and Agile methodology, conducted code reviews to maintain high-quality standards</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>July 2025 – Aug 2025</span>
                </div>
                <h3 className={styles.expRole}>Freelance Web Developer</h3>
                <p className={styles.expCompany}>Vardhaman Sports (Roorkee, India)</p>
                <ul className={styles.expList}>
                  <li>Developed a custom bill generator web application for streamlining invoice creation and management</li>
                  <li>Implemented automated billing features with PDF export functionality for professional invoice generation</li>
                  <li>Designed a responsive user interface ensuring seamless operation across desktop and mobile devices</li>
                  <li>Collaborated directly with client stakeholders to gather requirements and deliver tailored solutions</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>2020 – Present</span>
                </div>
                <h3 className={styles.expRole}>Freelance Web Developer</h3>
                <p className={styles.expCompany}>Live Demo | GitHub</p>
                <ul className={styles.expList}>
                  <li>Developed multiple production-ready web applications using React, Next.js, and Node.js</li>
                  <li>Built AI-powered platforms, real-time collaborative tools, and animation-rich interactive websites</li>
                  <li>Specialized in responsive design, performance optimization, and modern development practices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>TypeScript</span>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>HTML/CSS</span>
                    <span className={styles.skillTag}>SQL</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React.js</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                    <span className={styles.skillTag}>GSAP</span>
                    <span className={styles.skillTag}>Fabric.js</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express.js</span>
                    <span className={styles.skillTag}>Flask</span>
                    <span className={styles.skillTag}>FastAPI</span>
                    <span className={styles.skillTag}>RESTful APIs</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Databases & Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>PostgreSQL</span>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>GitHub</span>
                    <span className={styles.skillTag}>Docker</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Specialized Skills</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Real-time Collaboration</span>
                    <span className={styles.skillTag}>WebSockets</span>
                    <span className={styles.skillTag}>PDF Generation</span>
                    <span className={styles.skillTag}>Performance Optimization</span>
                    <span className={styles.skillTag}>AI Integration</span>
                    <span className={styles.skillTag}>Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Writing Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Writing</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;ve had the pleasure of writing for some amazing publications 
                as a freelance technical author:
              </p>
              
              <div className={styles.writingLinks}>
                <a 
                  href="https://www.100ms.live/blog/author/nitin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>100ms Blog</span>
                  <VscLinkExternal size={14} />
                </a>
                
                <a 
                  href="https://blog.logrocket.com/author/nitinranganath/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>LogRocket Blog</span>
                  <VscLinkExternal size={14} />
                </a>
                
                <a 
                  href="https://dev.to/itsnitinr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>DEV.to</span>
                  <VscLinkExternal size={14} />
                </a>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Aside from programming and writing, I enjoy reading dystopian novels, 
                listening to calm piano music, or just enjoying some downtime.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
