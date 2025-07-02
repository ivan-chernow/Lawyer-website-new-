"use client";
import React from "react";
import Line from "@/components/Line";
import { clients } from "@/data/clients";
import Button from "@/components/Button/Button";
import { motion } from "framer-motion";
import useModalReviews from "@/store/modalReviews";

const Clients = () => {
  const { modalReviews, openModalReviews, reviewsCount, setReviewsCount } =
    useModalReviews();

  const handleExpand = () => {
    setReviewsCount(clients.length);
  };

  return (
    <section
      className="py-[80px] bg-client-bg bg-cover bg-center bg-grey clients"
      id="clients"
    >
      <div className="container column">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-[28px] mb-[10px] uppercase text-center">
            Что о нас говорят клиенты
          </h3>
          <svg
            width="71"
            height="30"
            viewBox="0 0 71 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[70px] h-[28px]"
          >
            <path
              d="M14.3055 23.8334L5.97217 15.5L14.3055 7.16669L15.7847 8.64585L8.9305 15.5L15.7847 22.3542L14.3055 23.8334Z"
              fill="#4F8FF0"
            />
            <line
              x1="28.0734"
              y1="29.4424"
              x2="42.1012"
              y2="0.680956"
              stroke="#4F8FF0"
              strokeWidth="2"
            />
            <path
              d="M57.6874 23.8334L56.2	083 22.3542L63.0624 15.5L56.2083 8.64585L57.6874 7.16669L66.0208 15.5L57.6874 23.8334Z"
              fill="#4F8FF0"
            />
          </svg>
        </div>
        <div className="flex justify-start">
          <Line />
        </div>
        <motion.ul
          className="mt-[48px] flex items-center justify-center  gap-3 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {clients.slice(0, reviewsCount).map((client, index) => (
            <motion.li
              className="flex flex-col max-w-[600px] bg-white shadow-lg p-[32px]  h-auto overflow-hidden"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-[16px]">
                <img
                  src={client.img}
                  alt={`${client.name} logo`}
                  className="w-[80px] h-[80px] mr-[24px] rounded-[100px] object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-light text-[14px] mb-[4px]">
                    {client.company}
                  </p>
                  <p className="text-[20px] font-bold">{client.name}</p>
                </div>
              </div>
              <p className="font-normal text-[14px]">{client.description}</p>
            </motion.li>
          ))}
        </motion.ul>
        <div className="flex mt-[32px]">
          {reviewsCount <= 2 && (
            <Button
              text="Все отзывы"
              className="bg-blue border-blue text-white hover:text-blue active:bg-gray-300 active:text-black
									active:border-gray-300 hover:bg-white mr-[24px]"
              click={handleExpand}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
