'use client';

import Image from 'next/image';

import styles from '@/styles/Titlebar.module.css';

interface TitlebarProps {
  onOpenCommandPalette?: () => void;
  onToggleTerminal?: () => void;
  onShowHelp?: () => void;
}

const Titlebar = ({ onOpenCommandPalette, onToggleTerminal, onShowHelp }: TitlebarProps) => {
  const handleViewClick = () => {
    if (onOpenCommandPalette) {
      onOpenCommandPalette();
    }
  };

  return (
    <section className={styles.titlebar}>
      <Image
        src="/logos/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p onClick={handleViewClick} className={styles.menuItem} title="Open Command Palette (Ctrl+Shift+P)">View</p>
        <p>Go</p>
        <p>Run</p>
        <p onClick={onToggleTerminal} className={styles.menuItem}>Terminal</p>
        <p onClick={onShowHelp} className={styles.menuItem}>Help</p>
      </div>
      <p className={styles.title}>Kunal - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
