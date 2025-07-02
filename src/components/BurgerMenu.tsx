import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from "@/components/NavLink/NavLink";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="p-2 focus:outline-none">
        {isOpen ? (
          <RxCross2 className="w-[40px] h-[40px] text-white" />
        ) : (
          <RxHamburgerMenu className="w-[40px] h-[40px] text-white" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-64 bg-gray-400 shadow-lg z-50"
            >
              <ul className="flex flex-col items-start p-6">
                <li className="menu-item">
                  <NavLink to="services">Услуги</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="about">О компании</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="lawyers">Наши юристы</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="clients">Отзывы</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="materials">Новости</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="contacts">Контакты</NavLink>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
