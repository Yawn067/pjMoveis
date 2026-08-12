import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Carousel.css";

function Carousel({
  listaProdutos,
  type = "loop",
  perPage = 3,
  gap = "1.5rem",
  autoplay = true,
  pauseOnHover = true,
  arrows = true,
  pagination = true,
  width = "100%",
  interval = 3000,
  className = "",
  backgroundMode = false,
}) {
  return (
    <section className={`carousel ${className || ""}`}>
      <Splide
        options={{
          type: type,
          perPage: perPage,
          gap: gap,
          autoplay: autoplay,
          interval: interval,
          pauseOnHover: pauseOnHover,
          arrows: arrows,
          pagination: pagination,
          width: width,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {listaProdutos.map((produto, index) => (
          <SplideSlide key={index}>
            <div
              className={`carousel-item${backgroundMode ? " background-mode" : ""}`}
              style={
                backgroundMode
                  ? {
                      backgroundImage: `url(${produto.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }
                  : undefined
              }
            >
              {!backgroundMode && (
                <>
                  <img
                    className="carousel-image"
                    src={produto.img}
                    alt={produto.title}
                  />
                  <h3>{produto.title}</h3>
                </>
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default Carousel;
