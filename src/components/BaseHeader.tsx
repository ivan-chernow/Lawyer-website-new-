"use client";

import React, { useEffect } from "react";
import Logo from "@/components/Logo";
import { scroller } from "react-scroll";
import { usePathname } from "next/navigation";
import { NavLink } from "@/components/NavLink/NavLink";
import BurgerMenu from "@/components/BurgerMenu";

const BaseHeader = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");

        window.history.replaceState(null, "", window.location.pathname);

        setTimeout(() => {
          scroller.scrollTo(sectionId, {
            smooth: true,
            duration: 800,
            offset: -100,
          });
        }, 0);
      }
    }
  }, [pathname]);

  return (
    <div className="relative z-1  bg-opacity-[0.7] bg-black">
      <div className="container flex items-center justify-between pt-[22px] pb-[28px] bg-opacity-[0.7]">
        <NavLink to="header">
          <Logo />
        </NavLink>
        <div className="hidden 1018:block">
          <BurgerMenu />
        </div>
        <ul className="flex items-center 1018:hidden">
          <li className="text-[18px] text-white font-bold mr-[32px] cursor-pointer hover:text-blue hover:transition-all hover:underline">
            <NavLink to="services">Услуги</NavLink>
          </li>
          <li className="text-[18px] text-white font-bold mr-[32px] cursor-pointer hover:text-blue hover:transition-all hover:underline">
            <NavLink to="about">О компании</NavLink>
          </li>
          <li className="text-[18px] text-white font-bold mr-[32px] cursor-pointer hover:text-blue hover:transition-all hover:underline">
            <NavLink to="lawyers">Наши юристы</NavLink>
          </li>
          <li className="text-[18px] text-white font-bold mr-[32px] cursor-pointer hover:text-blue hover:transition-all hover:underline">
            <NavLink to="clients">Отзывы</NavLink>
          </li>
          <li className="text-[18px] text-white font-bold mr-[32px] cursor-pointer hover:text-blue hover:transition-all hover:underline">
            <NavLink to="materials">Новости</NavLink>
          </li>
          <li className="text-[18px] text-white font-bold cursor-pointer hover:text-blue hover:transition-all hover:underline">
            <NavLink to="contacts">Контакты</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BaseHeader;
