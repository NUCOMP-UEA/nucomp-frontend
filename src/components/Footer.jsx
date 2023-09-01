import React from 'react';
import styles from './Footer.module.css';


export default function Footer() {
    return (
<footer className={styles.footer}>
  <div className={styles.footertop}>
    <div className={styles.footercolumn}>
    <div className={styles.footsubsection}>
      <h3>Institucional</h3>
      <p>Sobre</p>
      <p>Localização</p>
      <p>Corpo Docente</p>
      <p>Formas de ingresso</p>
      <p>Publicações</p>
    </div>
    <div>
      <h3>Pesquisa</h3>
      <p>LSI</p>
      <p>SALTU</p>
      <p>ThinkTED</p>
      <p>LSE</p>
      <p>Academia STEM</p>
      <p>Samsung OCEAN</p>
      <p>FEMTOLAB</p>
      </div>

    </div>
    <div className={styles.footercolumn}>
      <h3>Estágio</h3>
      <p>Orientações</p>
      <p>Formulários</p>

    </div>
    <div className={styles.footercolumn}>
      <h3>Cursos</h3>
      <p>Engenharia de Computação</p>
      <p>Sistemas de Informação</p>
      <p>Licenciatura em Computação</p>
      <p>Pós-Graduação</p>
      <p>Cursos Inativos</p>

    </div>
  </div>
  <div className={styles.footerbottom}>
    UEA © Copyright 2023 - Todos os direitos reservados
  </div>
</footer>
    );
};
