import ProjectViewer from "@/components/ProjectViewer";
import * as C from "./styles.page";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";

const libre_baskerville = Libre_Baskerville({weight: ["400"], style: ["italic"], subsets: ["latin"]});
const source_sans = Source_Sans_3({weight: ["400"], subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <C.PresentationContainer>
        <img src="/assets/imgs/my-wolf.png" alt="Lobo" title="Lobo"/>
        <h1>Trabalhe com quem tem GARRA</h1>
        <h2>Sou Um Desenvolvedor Brasileiro Que Trabalha Na Construção De Sites Responsivos E Cativantes</h2>
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
          <p>Essa frase nos conta muito sobre Bruno e sua personalidade. Um cara que enxerga o mundo não apenas como ele se apresenta, mas também pelos conceitos.</p>
          <p>Equipado com diversos significados, ele busca entender o Desenvolvimento de Software como algo além da máquina...<br /><strong>Algo que carrega Vida consigo!</strong></p>
          <p>Formado como Técnico em Informática, pelo IFMG, Bruno agora está cursando Análise e Desenvolvimento de Sistemas.</p>
          <p>Ele carrega disposição e determinação para continuar desenvolvendo sistemas, buscando continuamente aprender e melhorar em todos os aspectos possíveis na criação de aplicações Web.</p>
        </C.AboutMeTextsContainer>
        <C.AboutMePicture src="/assets/imgs/picture.jpg" alt="Foto de Bruno" title="Bruno"/>
      </C.AboutMeContainer>
    </>
  );
}
