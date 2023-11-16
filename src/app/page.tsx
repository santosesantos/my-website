import ProjectViewer from "@/components/ProjectViewer";
import * as C from "./styles.page";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";

const libre_baskerville = Libre_Baskerville({ weight: ["400"], style: ["italic"], subsets: ["latin"] });
const source_sans = Source_Sans_3({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <C.PresentationContainer>
        <img src="./assets/imgs/my-wolf.webp" alt="Lobo" title="Lobo" />
        <h1>Trabalhe com quem tem GARRA</h1>
        <h2>Sou Um Desenvolvedor Brasileiro Que Trabalha Na Construção De Sites Responsivos E Cativantes</h2>
        <C.PresentationTechs>
          <h3>Tecnologias</h3>
          <div className="techs">
            <img src="./assets/icons/typescript.webp" alt="TypeScript" title="TypeScript" />
            <img src="./assets/icons/javascript.webp" alt="JavaScript" title="JavaScript" />
            <img src="./assets/icons/react.webp" alt="React" title="React" />
            <img src="./assets/icons/sass.webp" alt="Sass" title="Sass" />
            <img src="./assets/icons/kotlin.webp" alt="Kotlin" title="Kotlin" />
            <img src="./assets/icons/java.webp" alt="Java" title="Java" />
            <img src="./assets/icons/android.webp" alt="Android" title="Android" />
          </div>
        </C.PresentationTechs>
      </C.PresentationContainer>
      <C.ProjectsContainer id="projects">
        <ProjectViewer />
      </C.ProjectsContainer>
      <C.AboutMeContainer id="aboutme">
        <C.AboutMeTitleContainer className={libre_baskerville.className}>
          <h2>SIC PARVIS MAGNA</h2>
          <hr />
          <h3>Grandezas têm pequenos começos.</h3>
          <hr />
        </C.AboutMeTitleContainer>
        <C.AboutMeTextsContainer className={source_sans.className}>
          <p>Desde a minha infância, a tecnologia sempre foi uma parte essencial da minha vida. Cresci ao lado do meu pai, um experiente técnico de informática, absorvendo conhecimento enquanto ele trabalhava com PCs. Minha jornada formal começou no IFMG, onde cursei <strong>Técnico de Informática</strong> em paralelo ao ensino médio.</p>
          <p>Atualmente, estou me graduando em <strong>Análise e Desenvolvimento de Sistemas</strong> na Estácio, consolidando minha formação e adquirindo habilidades sólidas em desenvolvimento de software. Minha atuação tem sido notável, principalmente no <strong>Front-end</strong> de aplicações Web, embora eu também tenha experiência em projetos que envolvem <strong>Back-end e APIs REST</strong>. Além disso, estou investindo meu tempo e energia no aprimoramento das minhas habilidades em <strong>Desenvolvimento Mobile (Android)</strong>, visando desafios futuros.</p>
          <p>Minha filosofia é a busca constante pela excelência em todas as áreas da vida. Tenho uma natureza disciplinada, dedicada e perseverante, acreditando que a resolução de problemas é uma das minhas maiores habilidades, tanto no desenvolvimento de software quanto em desafios cotidianos.</p>
        </C.AboutMeTextsContainer>
        <C.AboutMePicture src="./assets/imgs/picture.webp" alt="Foto de Bruno" title="Bruno" />
      </C.AboutMeContainer>
    </>
  );
}
