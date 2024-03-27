import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Importa los estilos CSS (opcional)
import './style.css'
import san_marcos from "../../assets/san-marcos.png"
import pintuland from "../../assets/pintuland.jpg"

const carouselData = [
    {
      title: 'Slide 1',
      imageUrl: san_marcos,
    },
    {
      title: 'Slide 2',
      imageUrl: pintuland,
    },
    {
      title: 'Slide 3',
      imageUrl: san_marcos,
    },
    {
      title: 'Slide 4',
      imageUrl: pintuland,
    },
    {
      title: 'Slide 5',
      imageUrl: san_marcos,
    },
    {
      title: 'Slide 4',
      imageUrl: pintuland,
    },
  ];
  

const CarouselComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // Número de elementos para desplazarse al hacer clic en los botones de navegación
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const data = carouselData

  const carouselSettings = {
    responsive: responsive,
    infinite: true, // Habilita el scroll infinito
    autoPlay: true, // Habilita el scroll automático
    autoPlaySpeed: 3000, // Establece el intervalo de tiempo entre desplazamientos automáticos (en milisegundos)
    // Otros props que desees configurar
  };

  return (
    <Carousel
      responsive={responsive}
      {...carouselSettings}
      // Otros props que desees configurar
    >
      {data.map((item, index) => (
        <div key={index} className='carousel-item-container'>
          <img src={item.imageUrl} alt="" />
          {/* <h3>{item.title}</h3>
          <p>{item.description}</p> */}
        </div>
      ))}
    </Carousel>
  );
};

export {CarouselComponent};
