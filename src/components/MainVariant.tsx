import React from "react";
import Line from "@/components/Line";
import Image from "next/image";

const MainVariant = () => {
  return (
    <div className="flex justify-between items-center flex-wrap main">
      <div className="basis-1/2 ">
        <h2 className="text-[23px] font-extrabold uppercase mb-[10px] ">
          Юридическая компания{" "}
          <span className=" text-blue font-black">правозащитник</span>
        </h2>
        <Line />
        <p className="font-normal mb-[32px] mt-[24px] ">
          Мы предоставляем комплексную правовую поддержку. Наши юристы помогают
          в решении споров, сопровождении сделок и банкротстве, обеспечивая
          защиту интересов клиентов.
          <br />
          <br />
          Мы работаем в сферах гражданского, семейного, трудового и уголовного
          права. Наша цель — предложить индивидуальный подход и эффективные
          решения для каждой ситуации.
          <br />
          <br />
          &#34;Правозащитник&#34; — ваш надежный партнер в правовых вопросах. Мы
          гарантируем профессиональную помощь и защиту ваших прав. Доверьтесь
          нам, и мы найдем лучшее решение.
        </p>
      </div>
      <Image
        src="/img/About/img1.png"
        alt="img"
        width={535}
        height={359}
        className=" h-[359px] block object-cover"
      />
    </div>
  );
};

export default MainVariant;
