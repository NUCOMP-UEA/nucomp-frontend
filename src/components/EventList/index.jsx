import React from 'react';
import { Container, SectionTitle, EventsListContent, EventContainer, ContentDate, EventInfo } from './styles';
import { Icon } from '@iconify/react';
import styles from '../LatestPublications.module.css';

export default function EventList({ events }) {
  return (
    <Container>
      <SectionTitle>EVENTOS</SectionTitle>
      <EventsListContent>
        {events.map((event) => (
          <EventContainer>
            <ContentDate>
              <div>
                <strong>
                  {event.date.getDay()}
                </strong>
              </div>
              <footer>
                <strong>
                  AGO
                </strong>
                <span>{event.date.getFullYear()}</span>
              </footer>
            </ContentDate>
            <EventInfo>
              <span>
                {event.title}
              </span>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44" fill="none">
                  <path d="M24 21.0837C22.6739 21.0837 21.4021 20.6008 20.4645 19.7412C19.5268 18.8817 19 17.7159 19 16.5003C19 15.2847 19.5268 14.119 20.4645 13.2594C21.4021 12.3999 22.6739 11.917 24 11.917C25.3261 11.917 26.5979 12.3999 27.5355 13.2594C28.4732 14.119 29 15.2847 29 16.5003C29 17.1022 28.8707 17.6982 28.6194 18.2543C28.3681 18.8104 27.9998 19.3156 27.5355 19.7412C27.0712 20.1668 26.52 20.5044 25.9134 20.7348C25.3068 20.9651 24.6566 21.0837 24 21.0837ZM24 3.66699C20.287 3.66699 16.726 5.01907 14.1005 7.42579C11.475 9.83251 10 13.0967 10 16.5003C10 26.1253 24 40.3337 24 40.3337C24 40.3337 38 26.1253 38 16.5003C38 13.0967 36.525 9.83251 33.8995 7.42579C31.274 5.01907 27.713 3.66699 24 3.66699Z" fill="#0F7C94"/>
                </svg>
                <p>{event.locale}</p>
              </div>
            </EventInfo>
          </EventContainer>
        ))}
      </EventsListContent>
      <div className={styles.morePublicationsButton}>
        <div className={styles.morePublicationsText}>+ Eventos</div>
        <div className={styles.morePublicationsIcon}>{'>>'}</div>
      </div>
    </Container>
  );
};

