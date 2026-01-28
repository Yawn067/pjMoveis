import "./ProjectsCarousel.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProjectCard from "./ProjectCard";

const ProjectsCarousel = ({ listaProdutos }) => {
  return (
    <Splide
      options={{
        perPage: 2, // Quantos cards aparecem por vez
        gap: "2rem",
        breakpoints: {
          768: { perPage: 1 }, // No celular mostra apenas 1
        },
      }}
    >
      {listaProdutos.map((produto) => (
        <SplideSlide key={produto.id}>
          <ProjectCard produto={produto} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ProjectsCarousel;
