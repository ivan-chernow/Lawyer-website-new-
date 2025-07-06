"use client";

import React from "react";
import Logo from "@/components/Logo";
import Image from "next/image";
import Button from "@/components/Button/Button";
import useStore from "@/store/ModalCall";
import Link from "next/link";
import { NavLink } from "@/components/NavLink/NavLink";

const Footer = () => {
  const { openModal } = useStore();
  return (
    <div>
      <footer className="py-[80px] bg-[#222222] footer" id="contacts">
        <div className="container flex flex-col">
          <div className="flex items-center justify-between mb-[45px] 1150:justify-center">
            <NavLink to="header">
              <Logo />
            </NavLink>
            <p className="font-normal text-white max-w-[862px] footer_desc 1150:hidden">
              Предварительные выводы неутешительны: синтетическое тестирование,
              а также свежий взгляд на привычные вещи — безусловно открывает
              новые горизонты для экономической целесообразности принимаемых
              решений.
            </p>
          </div>
          <div className="flex items-start justify-between 1150:flex-col 1150:items-center 1150:justify-center">
            <ul className="flex flex-col 1150:mb-[25px]">
              <li className="flex items-center mb-[24px]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[24px]"
                >
                  <path
                    d="M15.9998 8.66675C16.8839 8.66675 17.7317 9.01794 18.3569 9.64306C18.982 10.2682 19.3332 11.116 19.3332 12.0001C19.3332 12.4378 19.247 12.8713 19.0794 13.2757C18.9119 13.6801 18.6664 14.0476 18.3569 14.3571C18.0473 14.6666 17.6799 14.9122 17.2754 15.0797C16.871 15.2472 16.4376 15.3334 15.9998 15.3334C15.1158 15.3334 14.2679 14.9822 13.6428 14.3571C13.0177 13.732 12.6665 12.8841 12.6665 12.0001C12.6665 11.116 13.0177 10.2682 13.6428 9.64306C14.2679 9.01794 15.1158 8.66675 15.9998 8.66675ZM15.9998 2.66675C18.4752 2.66675 20.8492 3.65008 22.5995 5.40042C24.3498 7.15076 25.3332 9.52473 25.3332 12.0001C25.3332 19.0001 15.9998 29.3334 15.9998 29.3334C15.9998 29.3334 6.6665 19.0001 6.6665 12.0001C6.6665 9.52473 7.64983 7.15076 9.40017 5.40042C11.1505 3.65008 13.5245 2.66675 15.9998 2.66675ZM15.9998 5.33341C14.2317 5.33341 12.536 6.03579 11.2858 7.28604C10.0355 8.53628 9.33317 10.232 9.33317 12.0001C9.33317 13.3334 9.33317 16.0001 15.9998 24.9467C22.6665 16.0001 22.6665 13.3334 22.6665 12.0001C22.6665 10.232 21.9641 8.53628 20.7139 7.28604C19.4636 6.03579 17.7679 5.33341 15.9998 5.33341Z"
                    fill="#F8F5F4"
                  />
                </svg>
                <div className="flex flex-col ">
                  <p className="font-bold text-[12px]  text-gray-500 uppercase mb-[2px]">
                    Наш адрес
                  </p>
                  <a
                    href="https://yandex.ru/maps/-/CHqsjDpO"
                    target="_blank"
                    className="text-white font-bold hover:text-blue hover:transition-all footer_address"
                  >
                    г. Одинцово, улица Маршала Жукова, 28
                  </a>
                </div>
              </li>
              <li className="flex items-center mb-[24px]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[24px]"
                >
                  <path
                    d="M21.3332 1.33325H10.6665C8.45317 1.33325 6.6665 3.11992 6.6665 5.33325V26.6666C6.6665 28.8799 8.45317 30.6666 10.6665 30.6666H21.3332C23.5465 30.6666 25.3332 28.8799 25.3332 26.6666V5.33325C25.3332 3.11992 23.5465 1.33325 21.3332 1.33325ZM22.6665 23.9999H9.33317V5.33325H22.6665V23.9999ZM18.6665 27.9999H13.3332V26.6666H18.6665V27.9999Z"
                    fill="#F8F5F4"
                  />
                </svg>

                <div className="flex flex-col">
                  <p className="font-bold text-[12px]  text-gray-500 uppercase mb-[2px]">
                    Запись на консультанцию
                  </p>
                  <a
                    href="tel:"
                    className="text-white font-bold hover:text-blue hover:transition-all"
                  >
                    +7 (922) 022-94-82
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[24px]"
                >
                  <path
                    d="M5.33317 27.1666C4.59984 27.1666 3.97184 26.9053 3.44917 26.3826C2.92651 25.8599 2.66562 25.2324 2.66651 24.4999V8.49992C2.66651 7.76659 2.92784 7.13859 3.45051 6.61592C3.97317 6.09325 4.60073 5.83237 5.33317 5.83325H26.6665C27.3998 5.83325 28.0278 6.09459 28.5505 6.61725C29.0732 7.13992 29.3341 7.76748 29.3332 8.49992V24.4999C29.3332 25.2333 29.0718 25.8613 28.5492 26.3839C28.0265 26.9066 27.399 27.1675 26.6665 27.1666H5.33317ZM15.9998 17.8333L5.33317 11.1666V24.4999H26.6665V11.1666L15.9998 17.8333ZM15.9998 15.1666L26.6665 8.49992H5.33317L15.9998 15.1666ZM5.33317 11.1666V8.49992V24.4999V11.1666Z"
                    fill="#F8F5F4"
                  />
                </svg>
                <div className="flex flex-col">
                  <p className="font-bold text-[12px]  text-gray-500 uppercase mb-[2px]">
                    Корреспонденция
                  </p>
                  <a
                    href="mailto:"
                    className="text-white font-bold hover:text-blue hover:transition-all"
                  >
                    janis62@yahoo.com
                  </a>
                </div>
              </li>
            </ul>
            <ul className="flex flex-col 1150:hidden">
              <li className="font-bold text-[14px] text-white mb-[16px] 1150:mr-[10px]">
                <NavLink
                  to="services"
                  smooth={true}
                  duration={700}
                  className="hover:text-blue hover:transition-all cursor-pointer"
                >
                  Услуги
                </NavLink>
              </li>
              <li className="font-bold text-[14px] text-white mb-[16px] cursor-pointer 1150:mr-[10px]">
                <NavLink
                  to="about"
                  smooth={true}
                  duration={700}
                  className="hover:text-blue hover:transition-all"
                >
                  О компании
                </NavLink>
              </li>
              <li className="font-bold text-[14px] text-white mb-[16px] cursor-pointer 1150:mr-[10px]">
                <NavLink
                  to="about"
                  smooth={true}
                  duration={700}
                  className="hover:text-blue hover:transition-all"
                >
                  Сертификаты
                </NavLink>
              </li>
              <li className="font-bold text-[14px] text-white mb-[16px] 1150:mr-[10px]">
                <NavLink
                  to="clients"
                  smooth={true}
                  duration={700}
                  className="hover:text-blue hover:transition-all cursor-pointer"
                >
                  Отзывы
                </NavLink>
              </li>
              <li className="font-bold text-[14px] text-white mb-[16px] cursor-pointer 1150:mr-[10px]">
                <NavLink
                  to="materials"
                  smooth={true}
                  duration={700}
                  className="hover:text-blue hover:transition-all"
                >
                  Полезные материалы
                </NavLink>
              </li>
              <li className="font-bold text-[14px] text-white cursor-pointer ">
                <Link
                  href="/philantropy"
                  className="hover:text-blue hover:transition-all"
                >
                  Благотворительность
                </Link>
              </li>
            </ul>
            <div className="flex flex-col items-start 1150:items-center 1150:justify-center">
              <div className="flex items-center mb-[16px]">
                <Image
                  src="/img/Footer/footer-img.png"
                  alt="img"
                  className="mr-[24px]"
                  width={65}
                  height={65}
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-[20px] text-white mb-[4px]">
                    Миронов Александр
                  </h3>
                  <p className="text-[14px] font-light text-gray-300">
                    Ведущий юрист
                  </p>
                </div>
              </div>
              <p className="text-white font-normal text-[14px] mb-[24px] max-w-[424px] 1150:text-center 1150:max-w-[320px]">
                Есть над чем задуматься: тщательные исследования конкурентов
                разоблачены. Идейные соображения высшего порядка, а также
                перспективное планирование играет{" "}
              </p>
              <Button
                text="Задать вопрос юристу"
                click={openModal}
                className="bg-blue border-blue 
						 			text-white hover:text-blue active:bg-gray-300 active:text-black active:border-gray-300 hover:bg-white mr-[24px]"
              />
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-black">
        <div className="container flex flex-wrap items-center justify-between py-[16px] 480:justify-center">
          <p className="font-normal text-[14px] text-white footer_defence">
            Все права защищены, 2025
          </p>
          <Link
            href="/philantropy"
            className="hover:text-blue hover:transition-all cursor-pointer font-normal text-[14px] text-white hidden adaptive"
          >
            Благотворительность
          </Link>
          <Link
            href="/privacy"
            className="hover:text-blue hover:transition-all cursor-pointer font-normal text-[14px] text-white "
          >
            Политика обработки персональных данных
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
