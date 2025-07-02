import React from "react";
import { RxCross2 } from "react-icons/rx";
import useStore from "@/store/ModalCall";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailJs from "emailjs-com";
import { Flip, toast } from "react-toastify";
import { AnimatePresence, motion } from "motion/react";

const ModalOrder = () => {
  const { closeModal, setLoading, loadingCall } = useStore();

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Имя обязательно")
      .matches(
        /^[A-Za-zА-Яа-яЁё\s-]+$/,
        "Имя должно содержать только буквы и пробелы"
      )
      .min(2, "Имя должно содержать минимум 2 символа")
      .max(30, "Имя не должно превышать 30 символов"),
    phone: Yup.string()
      .required("Телефон обязателен")
      .matches(/^[0-9]{11}$/, "Введите корректный номер телефона"),
    message: Yup.string().required("Сообщение обязательно"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      emailJs
        .send(
          "service_17kz74y",
          "template_zlybo3o",
          values,
          "igmhWkl9x5vvkcYeT"
        )
        .then(() => {
          toast.success("Ваша заявка отправлена" + `\n` + "Ожидайте звонка!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            style: {
              paddingLeft: "15px",
            },
          });
          resetForm();
          closeModal();
        })
        .catch(() => {
          toast.error("Произошла ошибка при отправке.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: "dark",
            transition: Flip,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10"
        onClick={handleBackdropClick}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
      >
        <div className="h-[520px] w-[600px] bg-white flex flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-transform transform  relative">
          <RxCross2
            className="w-[30px] h-[30px] cursor-pointer text-gray-600 hover:text-red-500 transition-colors duration-200 absolute top-4 right-4"
            onClick={closeModal}
          />
          <h2 className="text-2xl font-bold mb-6 text-gray-800 mt-5 text-left">
            Оставьте нам заявку и <br /> мы с вами свяжемся!
          </h2>
          <form
            className="w-full flex flex-col items-center justify-center"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-5">
              {formik.errors.name && (
                <div className="text-red-500 text-xs">{formik.errors.name}</div>
              )}
              {formik.errors.phone && (
                <div className="text-red-500 text-xs">
                  {formik.errors.phone}
                </div>
              )}
              {formik.errors.message && (
                <div className="text-red-500 text-xs">
                  {formik.errors.message}
                </div>
              )}
            </div>
            <input
              minLength={2}
              maxLength={30}
              type="text"
              name="name"
              placeholder="Ваше имя"
              style={
                formik.errors.name
                  ? { borderColor: "red" }
                  : { borderColor: "gray" }
              }
              className="w-[95%] max-w-[500px] mb-4 p-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <input
              maxLength={11}
              minLength={11}
              type="tel"
              name="phone"
              placeholder="Ваш номер телефона"
              style={
                formik.errors.phone
                  ? { borderColor: "red" }
                  : { borderColor: "gray" }
              }
              className="w-[95%] max-w-[500px] mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow"
              onChange={(e) => {
                const onlyDigits = e.target.value.replace(/\D/g, "");
                formik.setFieldValue("phone", onlyDigits);
              }}
              value={formik.values.phone}
            />

            <textarea
              maxLength={200}
              name="message"
              placeholder="Ваш вопрос"
              style={
                formik.errors.message
                  ? { borderColor: "red" }
                  : { borderColor: "gray" }
              }
              className="w-[95%] max-w-[500px] mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none shadow"
              rows={5}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {loadingCall ? (
              <button
                disabled={loadingCall}
                type="submit"
                className="uppercase font-semibold text-[14px]   px-6 py-3
								transition duration-200 border-[2px]    text-white border-green-500 bg-green-500"
              >
                Загрузка...
              </button>
            ) : (
              <button
                disabled={loadingCall}
                type="submit"
                className="uppercase font-semibold text-[14px] bg-blue border-blue text-white px-6 py-3
								transition duration-200 border-[2px] hover:bg-white hover:text-blue active:bg-gray-300 active:text-black active:border-gray-300"
              >
                Отправить
              </button>
            )}
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalOrder;
