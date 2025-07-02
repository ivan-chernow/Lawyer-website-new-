import React from 'react';
import Line from "@/components/Line";
import Image from "next/image";

const OurHistoryVariant = () => {
	return (
		<>
			<div className="flex justify-between items-center flex-wrap history">
				<div className='basis-1/2 '>
					<h2 className="text-[26px] font-extrabold uppercase mb-[10px]">Наша <span
						className=' text-blue font-black'>история</span></h2>
					<div className='flex justify-start '>
						<Line/>
					</div>
					<p className="font-normal mb-[32px] mt-[24px]  history__subtitle">
						История компании — это путь от небольшой команды единомышленников до надежного партнера для сотен
						клиентов.
						Мы
						гордимся каждым этапом нашего развития.
					</p>
					<div className="container">
						<div className="relative">
							<div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200 "></div>
							<div className="flex items-center mb-8">
								<div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full z-10">
									📅
								</div>
								<div className="ml-8 ">
									<h3 className="text-xl font-semibold">2010 год</h3>
									<p className="text-gray-600 ">Основание компании. Начало работы с частными клиентами.</p>
								</div>
							</div>

							<div className="flex items-center mb-8">
								<div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full z-10">
									🚀
								</div>
								<div className="ml-8">
									<h3 className="text-xl font-semibold">2015 год</h3>
									<p className="text-gray-600 ">Расширение команды и начало работы с корпоративными клиентами.</p>
								</div>
							</div>

							<div className="flex items-center mb-8">
								<div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full z-10">
									🏆
								</div>
								<div className="ml-8">
									<h3 className="text-xl font-semibold">2020 год</h3>
									<p className="text-gray-600 ">Получение награды за лучшую юридическую практику в регионе.</p>
								</div>
							</div>

							<div className="flex items-center ">
								<div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full z-10">
									😃
								</div>
								<div className="ml-6 ">
									<h3 className="text-xl font-semibold">2025 год</h3>
									<p className="text-gray-600 ">Продолжаем радовать клиентов общими победами.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Image src="/img/About/history/our-history1.jpg" alt="img" width={535} height={359}
							 className='w-[535px] h-[359px]'/>
			</div>
		</>
	);
};

export default OurHistoryVariant;
