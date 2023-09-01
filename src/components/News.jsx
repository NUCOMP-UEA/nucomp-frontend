import React from 'react';
import styles from './News.module.css';

export function News({ headline, date, lead }){
    return (
        <div className={styles.newsContainer}>
            <h2 className={styles.newsTitle}>NOTÍCIAS</h2>
            <div className={styles.newsCard}>
                <div className={styles.newsImage}>
                </div>
                <div className={styles.newsContent}>
                    <h2>{headline}</h2>
                    <span className={styles.newsDate}>{date}</span>  {/* Aplicando a classe à data */}
                    <p className={styles.newsParagraph}>{lead}</p>
                </div>
            </div>
            <div className={styles.morePublicationsButton}>
            <div className={styles.morePublicationsText}>+ Notícias</div>
            <div className={styles.morePublicationsIcon}>{'>>'}</div>
        </div>
        </div>
    );
};
