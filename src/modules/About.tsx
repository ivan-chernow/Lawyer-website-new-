"use client";

import React, { useState } from "react";
import Button from "@/components/Button/Button";
import { motion } from "framer-motion";
import MainVariant from "@/components/MainVariant";
import CertificateVariant from "@/components/CertificateVariant";
import OurHistoryVariant from "@/components/OurHistoryVariant";

const About = () => {
  const [showContent, setShowContent] = useState("about");

  const handleButtonClick = (content: string) => {
    setShowContent(content);
  };

  const handleBackClick = () => {
    setShowContent("about");
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="bg-white py-[80px] about" id="about">
      <div className="container">
        <div className="flex flex-col">
          {showContent === "about" && (
            <motion.div
              key="about"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <MainVariant />
            </motion.div>
          )}
          {showContent === "certificate" && (
            <motion.div
              key="certificate"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <CertificateVariant />
            </motion.div>
          )}
          {showContent === "history" && (
            <motion.div
              key="history"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <OurHistoryVariant />
            </motion.div>
          )}
          <div className="btn-column">
            {showContent === "about" ? (
              <>
                <Button
                  text="История компании"
                  click={() => handleButtonClick("history")}
                  className="bg-blue border-blue text-white hover:text-blue active:bg-gray-300 active:text-black active:border-gray-300 hover:bg-white mr-[24px]"
                />
                <Button
                  text="Сертификаты"
                  click={() => handleButtonClick("certificate")}
                  className="border-gray-300 border-[2px] bg-gray-300 border-solid text-black px-[24px] hover:bg-white active:bg-gray-300"
                />
              </>
            ) : (
              <div
                className={`${
                  showContent === "certificate"
                    ? "flex items-center justify-center self-center"
                    : ""
                }`}
              >
                <Button
                  text="Назад"
                  click={handleBackClick}
                  className="bg-blue border-blue text-white hover:text-blue active:bg-gray-300 active:text-black active:border-gray-300 hover:bg-white mr-[24px] mt-[30px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
