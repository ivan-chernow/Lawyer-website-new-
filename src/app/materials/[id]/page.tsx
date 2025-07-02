"use client";
import React from "react";
import { materials } from "@/data/materials";
import { useParams } from "next/navigation";
import BaseHeader from "@/components/BaseHeader";
import { MdArrowBack } from "react-icons/md";
import Line from "@/components/Line";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useMaterials from "@/store/Materials";
import "@/section/Materials/Materials.scss";
import Footer from "@/modules/Footer";

const materialPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const material = materials.find((material) => material.id === id);

  const {
    setIsAnimating,
    isAnimating,
    setCountMaterials,
    countMaterials,
    setHovered,
    hovered,
  } = useMaterials();

  const handleShowAll = () => {
    router.back();
    setIsAnimating(true);
    setCountMaterials(materials.length);
  };

  if (!material) {
    return <div>Статья не найдена</div>;
  }
  return (
    <div>
      <BaseHeader />
      <section className="py-[40px] container">
        <div className="flex items-center mb-[80px] justify-between ">
          <motion.div
            className="flex items-center cursor-pointer    hover:text-blue  active:text-black  hover:bg-white mr-[24px]"
            onClick={handleShowAll}
          >
            <MdArrowBack className="w-[32px] h-[32px] mr-[10px]" />
            <p>Вернуться</p>
          </motion.div>
          <p className="text-[14px]">
            Дата публикации:{" "}
            <span className=" text-[15px] text-blue">{material.date}</span>
          </p>
        </div>
        <div className="flex-title">
          <h1 className="text-center mb-[15px]  text-[28px] text-black font-extrabold uppercase">
            {material.title}
          </h1>
        </div>
        <div className="flex justify-center items-center mb-[20px]">
          <Line />
        </div>
        <div className="flex justify-center w-full">
          <img
            src={material.img}
            alt="img"
            className="object-cover w-full h-auto mb-[15px]"
          />
        </div>
        <div className="flex justify-center items-center mb-[20px]">
          <Line />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[15px] font-bold  max-w-[1150px] text-left materials__desc">
            {material.content}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default materialPage;
