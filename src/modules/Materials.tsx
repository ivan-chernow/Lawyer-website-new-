"use client";
import Line from "@/components/Line";
import { materials } from "@/data/materials";
import Button from "@/components/Button/Button";
import { motion } from "framer-motion";
import HoveredStyles from "@/components/hoveredStyles";
import Link from "next/link";
import useMaterials from "@/store/Materials";
import Image from "next/image";

const Materials = () => {
  const {
    setIsAnimating,
    isAnimating,
    setCountMaterials,
    countMaterials,
    setHovered,
    hovered,
  } = useMaterials();
  const handleShowAll = () => {
    setIsAnimating(true);
    setCountMaterials(materials.length);
  };

  return (
    <section className="py-[80px] bg-white materials" id="materials">
      <div className="container flex flex-col items-center">
        <h2 className="text-[28px] mb-[13px] uppercase font-extrabold">
          Полезные материалы
        </h2>
        <Line />
        <p className="mt-[24px] mb-[48px] text-center max-w-[920px] font-normal">
          Актуальные новости и экспертные материалы из мира права: всё, что
          нужно знать для защиты ваших интересов
        </p>
        <motion.ul
          className="flex items-center   mb-10 gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {materials.slice(0, countMaterials).map((material, index) => (
            <motion.li
              className="max-w-[400px] h-[491px] cursor-pointer relative group hover:brightness-75 transition-all duration-300"
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/materials/${material.id}`}>
                <div className="relative">
                  <Image
                    src={material.img}
                    alt=""
                    className="h-[270px] object-cover mb-[24px] bg-cover w-[415px] "
                    width={415}
                    height={270}
                  />
                  {hovered === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <HoveredStyles className="bg-white" />
                      <div className="p-[15px] bg-white rounded-lg shadow-lg">
                        <Image
                          src={material.img}
                          alt=""
                          className="h-[270px] object-cover mb-[24px] bg-cover w-[415px] "
                          width={415}
                          height={270}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
                <p className="font-bold mb-[16px] group-hover:text-[#4F8FF0] duration-[0.5s] materials__title">
                  {material.title}
                </p>
                <p className="mb-[16px] font-light text-[12px]">
                  {material.date}
                </p>
                <p className="font-normal text-[14px]">{material.subtitle}</p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        {!isAnimating && countMaterials <= 3 && (
          <Button
            text="Все новости"
            className="bg-blue border-blue text-white hover:text-blue active:bg-gray-300 active:text-black active:border-gray-300 hover:bg-white mr-[24px]"
            click={handleShowAll}
          />
        )}
      </div>
    </section>
  );
};

export default Materials;
