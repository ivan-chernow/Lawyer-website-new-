"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import useModalCall from "@/store/ModalCall";
import BaseHeader from "@/components/BaseHeader";
import ModalOrder from "@/components/ModalOrder";
import PaginationSvg from "@/components/PaginationSvg";
import Button from "@/components/Button/Button";
import IconHeader from "@/components/IconHeader";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { modalCall, openModal } = useModalCall();
  const images = [
    "/img/Header/fon1.png",
    "/img/Header/fon2.jpg",
    "/img/Header/fon3.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="relative bg-black w-full z-1 " id="header">
      <div className="relative bg-black">
        <div className="container flex items-center justify-between py-[16px] flex-wrap 480:justify-center">
          <div className="flex items-center">
            <div className="flex justify-items-center mr-[24px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] h-[20px] mr-[8px]"
              >
                <path
                  d="M13.3332 0.833252H6.6665C5.28317 0.833252 4.1665 1.94992 4.1665 3.33325V16.6666C4.1665 18.0499 5.28317 19.1666 6.6665 19.1666H13.3332C14.7165 19.1666 15.8332 18.0499 15.8332 16.6666V3.33325C15.8332 1.94992 14.7165 0.833252 13.3332 0.833252ZM14.1665 14.9999H5.83317V3.33325H14.1665V14.9999ZM11.6665 17.4999H8.33317V16.6666H11.6665V17.4999Z"
                  fill="#4F8FF0"
                />
              </svg>
              <a
                href="tel:+79220229482"
                className="text-[14px] text-white hover:text-blue hover:transition-all"
              >
                +7 (922) 022-94-82
              </a>
            </div>
            <div className="flex justify-items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] h-[20px] mr-[8px]"
              >
                <path
                  d="M3.33317 16.6666C2.87484 16.6666 2.48234 16.5033 2.15567 16.1766C1.82901 15.8499 1.66595 15.4577 1.66651 14.9999V4.99992C1.66651 4.54159 1.82984 4.14909 2.15651 3.82242C2.48317 3.49575 2.87539 3.3327 3.33317 3.33325H16.6665C17.1248 3.33325 17.5173 3.49659 17.844 3.82325C18.1707 4.14992 18.3337 4.54214 18.3332 4.99992V14.9999C18.3332 15.4583 18.1698 15.8508 17.8432 16.1774C17.5165 16.5041 17.1243 16.6671 16.6665 16.6666H3.33317ZM9.99984 10.8333L3.33317 6.66659V14.9999H16.6665V6.66659L9.99984 10.8333ZM9.99984 9.16659L16.6665 4.99992H3.33317L9.99984 9.16659ZM3.33317 6.66659V4.99992V14.9999V6.66659Z"
                  fill="#4F8FF0"
                />
              </svg>
              <a
                href="mailto:janis62@yahoo.com"
                className="text-[14px] text-white hover:text-blue hover:transition-all"
              >
                janis62@yahoo.com
              </a>
            </div>
          </div>
          <button
            className="font-bold text-[14px] text-white hover:text-blue hover:transition-all"
            onClick={() => openModal()}
          >
            Заказать звонок
          </button>
          {modalCall && <ModalOrder />}
        </div>
        <BaseHeader />
      </div>

      <div className="relative w-full h-[700px] overflow-hidden 480:h-[400px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentImageIndex]}
              alt="слайдер"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10" />
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 pt-8 pb-24">
              <h2 className="text-white text-[30px] font-light mb-[8px] text-center uppercase 480:text-[24px] 480:mb-0">
                Оказываем весь комплекс
              </h2>
              <h3 className="text-blue text-[32px] sm:text-[56px] mb-[8px] text-center uppercase 480:text-[24px]">
                Юридических услуг
              </h3>
              <p className="text-white text-[16px] sm:text-[20px] font-normal mb-[24px] sm:mb-[48px] text-center max-w-[1090px] 480:text-[14px] 480:mb-[10px]">
                С нами вы получите не только профессиональную правовую помощь,
                но и уверенность в том, что ваши интересы находятся в надежных
                руках. Мы нацелены на достижение максимальных результатов для
                каждого клиента.
              </p>
              <Link to="services" smooth={true} duration={700}>
                <Button
                  text="Наши услуги"
                  className="bg-blue border-blue text-white hover:text-blue active:bg-gray-300 active:text-black active:border-gray-300 hover:bg-white"
                />
              </Link>
            </div>
            <div className="container absolute bottom-4 left-1/2 transform -translate-x-1/2  max-w-4xl flex items-center justify-between px-4 sm:px-8 z-20">
              <PaginationSvg currentImageIndex={currentImageIndex} />
              <IconHeader />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
