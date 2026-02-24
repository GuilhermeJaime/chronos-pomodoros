import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, } from 'lucide-react';
import React from 'react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {

  const [theme,setTheme ] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storageTheme ; });

      const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
      };


  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {


    event.preventDefault(); //Não segue o link


    setTheme(prevTheme => {  
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });


   

  }

   useEffect(() => {
     
     document.documentElement.setAttribute('data-theme', theme);
     localStorage.setItem('theme', theme)
   }, [theme]); // Executa o efeito sempre que o tema mudar
    
 


  return (
    <nav className={styles.menu}>
     
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a home'
        title='Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para o histórico'
        title='Histórico'
      >
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Ir para as configurações' title='Configurações'>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Alternar tema' title='Alternar tema'
      onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}