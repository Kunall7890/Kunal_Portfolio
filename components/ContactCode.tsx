import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'jaiswallkunal786@gmail.com',
    href: 'mailto:jaiswallkunal786@gmail.com',
  },
  {
    social: 'phone',
    link: '+91 9119747693',
    href: 'tel:+919119747693',
  },
  {
    social: 'github',
    link: 'Kunall7890',
    href: 'https://github.com/Kunall7890',
  },
  {
    social: 'linkedin',
    link: 'kunaljaiswal7877',
    href: 'https://www.linkedin.com/in/kunaljaiswal7877',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
