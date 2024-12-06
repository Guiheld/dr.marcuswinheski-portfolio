import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "“A atenção e o cuidado que recebi foram excepcionais. O Dr. Marcus me explicou cada etapa do tratamento, tornando tudo mais tranquilo e seguro.”",
    },
    {
      img: profilePic2,
      review:
        "“Equipe extremamente dedicada. Senti-me acolhido e confiante desde a primeira consulta até a recuperação completa.”",
    },
    {
      img: profilePic3,
      review:
        "“O Dr. Marcus demonstrou grande conhecimento e sensibilidade ao lidar com meu caso. Sou muito grato pelo profissionalismo e empatia.”",
    },
    {
      img: profilePic4,
      review:
        "“Fui tratada com respeito, paciência e competência. Recomendo a todos que buscam um cuidado oncológico humanizado.”",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Veja os depoimentos dos pacientes</span>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
