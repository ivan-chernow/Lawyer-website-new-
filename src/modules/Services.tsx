"use client";

import React from "react";
import Button from "@/components/Button/Button";
import { ServicesData, servicesData } from "@/data/services";
import Line from "@/components/Line";
import useStore from "@/store/ModalCall";
import { motion } from "motion/react";
import HoveredStyles from "@/components/hoveredStyles";

const Services = () => {
  const { openModal } = useStore();
  return (
    <section className="bg-grey py-[80px] services" id="services">
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-[28px] text-black font-extrabold uppercase mb-[10px] text-center ">
          Наши услуги
        </h2>
        <Line />
        <p className="text-black font-normal text-[16px] mb-[48px]  mt-[24px] max-w-[910px] text-center">
          Ваш надежный партнер в решении любых юридических вопросов:
          качественно, оперативно, конфиденциально
        </p>
        <ul className="flex flex-wrap justify-center gap-6">
          {servicesData.map((service: ServicesData) => (
            <motion.li
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col  items-center justify-center bg-white  max-w-[400px]  min-h-[250px]  flex-auto cursor-pointer
							hover:bg-blue hover:text-white duration-300 svg-hover relative shadow-lg group
							"
              key={service.title}
            >
              <svg
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[35px] h-[35px] mb-[15px] transition-colors duration-300"
              >
                <path
                  d="M29.6665 5.83329V23.3333H12.1665V5.83329H29.6665ZM29.6665 2.91663H12.1665C10.5623 2.91663 9.24984 4.22913 9.24984 5.83329V23.3333C9.24984 24.9375 10.5623 26.25 12.1665 26.25H29.6665C31.2707 26.25 32.5832 24.9375 32.5832 23.3333V5.83329C32.5832 4.22913 31.2707 2.91663 29.6665 2.91663ZM18.6853 20.4166L13.6248 15.3125L15.6665 13.2562L18.6853 16.2895L26.1665 8.74996L28.2082 10.8062L18.6853 20.4166ZM6.33317 8.74996H3.4165V29.1666C3.4165 30.7708 4.729 32.0833 6.33317 32.0833H26.7498V29.1666H6.33317V8.74996Z"
                  fill="currentColor"
                  className="text-blue group-hover:text-white"
                />
              </svg>
              <h4 className="font-extrabold text-[20px]  mb-[10px]">
                {service.title}
              </h4>
              <p className="font-normal text-[14px] text-center max-w-[360px]">
                {service.subtitle}
              </p>
              <HoveredStyles className="bg-white" />
            </motion.li>
          ))}
        </ul>
        <Button
          text="Все услуги"
          click={openModal}
          className="bg-blue border-blue mt-[20px]
						 			text-white hover:text-blue active:bg-gray-300 active:text-black active:border-gray-300 hover:bg-white mr-[24px]"
        />
      </div>
    </section>
  );
};

export default Services;
