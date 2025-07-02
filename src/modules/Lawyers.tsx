'use client';
import React, {useState} from 'react';
import {lawyers} from "@/data/lawyers";
import Line from "@/components/Line";
import HoveredStyles from "@/components/hoveredStyles";
import {motion} from 'motion/react';

const Lawyers = () => {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);

	return (
		<section className="flex flex-col items-center bg-grey py-[80px] lawyers"
		>
			<h3 className="font-extrabold text-[28px] uppercase mb-[10px]">Наши юристы</h3>
			<Line/>
			<p className="font-normal mt-[24px] mb-[48px] max-w-[920px] text-center">
				Наша команда юристов состоит из высококвалифицированных специалистов с богатым опытом в различных областях
				права. Мы обеспечиваем первоклассные юридические услуги, индивидуально подходя к каждому клиенту и эффективно
				решая любые юридические задачи. Ваши интересы — наша главная приоритет!
			</p>
			<ul className="flex  justify-between flex-wrap ">
				{lawyers.map((lawyer, index) => (
					hoveredCard === index ? (
						<motion.li
							className="flex flex-col   items-center w-[312px] min-h-[320px] bg-white  drop-shadow-2xl mr-[24px]  justify-center"
							whileHover={{scale: 1.05}}
							transition={{type: 'spring', stiffness: 300}}
							key={index}
							onMouseEnter={() => setHoveredCard(index)} //
							onMouseLeave={() => setHoveredCard(null)}
						>
							<h4 className="font-bold mb-[10px]">{lawyer.name}</h4>
							<p className="font-light text-[14px] mb-[40px]">{lawyer.job}</p>
							<p className="font-light text-[14px] mb-[40px] text-center max-w-[265px]">{lawyer.description}</p>
							<p className="font-semibold ">{lawyer.experience}</p>
							<HoveredStyles className='bg-blue'/>
						</motion.li>
					) : (
						<motion.li
							className="flex flex-col items-center min-h-[320px] w-[312px] bg-white pb-[24px] drop-shadow-2xl mr-[24px] "
							whileHover={{scale: 1.05}}
							transition={{type: 'spring', stiffness: 300}}
							key={index}
							onMouseEnter={() => setHoveredCard(index)}
							onMouseLeave={() => setHoveredCard(null)}
						>
							<img src={lawyer.img} alt="img" className="w-[312px] h-[320px] mb-[24px] object-cover"/>
							<h4 className="font-bold mb-[10px]">{lawyer.name}</h4>
							<p className="font-light text-[14px]">{lawyer.job}</p>
						</motion.li>
					)
				))}
			</ul>
		</section>
	);
};

export default Lawyers;
