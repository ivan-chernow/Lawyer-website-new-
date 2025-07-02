import React, { useState } from "react";
import Line from "@/components/Line";
import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import HoveredStyles from "@/components/hoveredStyles";

const CertificateVariant = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="flex  flex-col items-center justify-center certificate">
      <h2 className="text-[26px] font-extrabold uppercase mb-[10px] text-center">
        Наши <span className="text-blue font-black">сертификаты</span>
      </h2>
      <div className="flex  justify-center">
        <Line />
      </div>
      <p className="text-center mb-8 max-w-[800px] mt-[24px]">
        Мы гордимся тем, что наша компания соответствует высочайшим стандартам
        качества и безопасности. Ознакомьтесь с нашими сертификатами:
      </p>
      <ul className=" flex grid-cols-3 gap-8 flex-wrap">
        {certificates.map((cert, index) => (
          <motion.li
            className={`   flex flex-col  w-[380px] items-center justify-center min-h-[420px]  bg-white pb-[24px] ${
              hoveredCard === index ? "drop-shadow-2xl" : "drop-shadow-md"
            }  transition-shadow duration-300`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.img
              src={cert.img}
              alt="img"
              className="w-auto object-cover h-[320px] mb-[20px]"
            />
            <p className="text-gray-600 text-center text-[14px]">
              {cert.title}
            </p>
            {hoveredCard === index && <HoveredStyles className="bg-blue" />}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateVariant;
