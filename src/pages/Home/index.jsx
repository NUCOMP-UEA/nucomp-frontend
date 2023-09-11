import { News } from "../../components/News";
import { LatestPublications } from "../../components/LatestPublications";
import EventList from "../../components/EventList";
import Tools from "../../components/Tools";
import Footer from "../../components/Footer";
import styles from "../../App.module.css";

export default function Home() {
  const publications = [
    {
      authors:
        "Rafael Barbosa de Carvalho, Elloá B. Guedes, Carlos Maurício Serodio Figueiredo.",
      title:
        " Detecção Inteligente de Falhas em Pavimentações Asfálticas com Redes Neurais Convolucionais Regionais.",
      venue: " Em WBCI 2022, 2022."
    },
    {
      authors:
        "Rafael Barbosa de Carvalho, Elloá B. Guedes, Carlos Maurício Serodio Figueiredo.",
      title:
        " Detecção Inteligente de Falhas em Pavimentações Asfálticas com Redes Neurais Convolucionais Regionais.",
      venue: " Em WBCI 2022, 2022."
    },
    {
      authors:
        "Rafael Barbosa de Carvalho, Elloá B. Guedes, Carlos Maurício Serodio Figueiredo.",
      title:
        " Detecção Inteligente de Falhas em Pavimentações Asfálticas com Redes Neurais Convolucionais Regionais.",
      venue: " Em WBCI 2022, 2022."
    }

    // Outras publicações aqui
  ];

  const events = [
    {
      date: new Date(),
      title: "SBAI - Simpósio Brasileiro de Automação",
      locale: "Studio 5, AM"
    },
    {
      date: new Date(),
      title: "SBAI - Simpósio Brasileiro de Automação",
      locale: "Studio 5, AM"
    },
    {
      date: new Date(),
      title: "SBAI - Simpósio Brasileiro de Automação",
      locale: "Studio 5, AM"
    }
  ];
  return (
    <>
      <News
        headline="NUCOMP/UEA abre inscrições para pós-graduação em Desenvolvimento Web Full stack"
        date="31/08/2023"
        lead="Estudos premiados oram desenvolvidos por membros do Laboratório de Ecologia e Evolução de Sistemas Socioecológicos (LEIA)..."
      />
      <div className={styles.section}>
        <LatestPublications publications={publications} />
        <EventList events={events} />
      </div>
      <Tools />
      <Footer />
    </>
  );
}
