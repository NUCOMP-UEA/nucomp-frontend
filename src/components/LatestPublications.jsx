import React from 'react';
import styles from './LatestPublications.module.css';
import { Icon } from '@iconify/react';

export function LatestPublications ({ publications }) {
    return (
      <div className={styles.latestPublicationsContainer}>
      <h2 className={styles.latestPublicationsTitle}>ÚLTIMAS PUBLICAÇÕES</h2>
      <div className={styles.latestPublicationsList}>
        {publications.map((publication, index) => (
          <div key={index} className={styles.latestPublication}>
            <div className={styles.latestPublicationIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13c0 1-.6 3-3 3m0 0H6c-1 0-3-.6-3-3v-2h12v2c0 2.4 2 3 3 3zM9 7h8m-8 4h4"/>
              </svg>
            </div>
            <div className={styles.latestPublicationText}>
              <span className={styles.latestPublicationAuthors}>
                {publication.authors}
              </span>
              <span className={styles.latestPublicationTitle}>
                {` ${publication.title} `}
              </span>
              <span className={styles.latestPublicationVenue}>
                {`Em ${publication.venue}, ${publication.year}.`}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.morePublicationsButton}>
      <div className={styles.morePublicationsText}>+ Publicações</div>
      <div className={styles.morePublicationsIcon}>{'>>'}</div>

      </div>
    </div>
      );
};

