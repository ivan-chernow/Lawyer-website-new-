import React from 'react';

const Philanthropy = () => {
	return (
		<div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 philanthropy">
			<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
					Благотворительность
				</h1>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">О нашей благотворительности</h2>
					<p className="text-gray-600 leading-relaxed">
						Мы верим, что каждый может сделать мир лучше. Наша компания активно участвует в
						благотворительных программах, направленных на помощь нуждающимся, поддержку образования,
						здравоохранения и защиты окружающей среды.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">Наши программы</h2>
					<div className="space-y-6">
						{/* Программа 1 */}
						<div className="bg-gray-100 p-6 rounded-lg">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Помощь детям-сиротам
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Мы поддерживаем детские дома и приюты, обеспечивая детей всем необходимым для
								комфортной жизни и развития.
							</p>
						</div>

						<div className="bg-gray-100 p-6 rounded-lg">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Защита окружающей среды
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Наша программа направлена на сохранение природы, поддержку экологических инициатив и
								борьбу с загрязнением.
							</p>

						</div>

						<div className="bg-gray-100 p-6 rounded-lg">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Поддержка образования
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Мы помогаем школам и университетам, предоставляя учебные материалы, стипендии и
								оборудование для обучения.
							</p>

						</div>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">Как вы можете помочь</h2>
					<p className="text-gray-600 leading-relaxed">
						Вы можете внести свой вклад, сделав пожертвование или став волонтером. Каждая помощь,
						даже самая маленькая, имеет значение.
					</p>
					<div className="mt-6  flex flex-wrap gap-4">
						<a href='https://dobro.ru'
							 className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
							Сделать пожертвование
						</a>
						<a href='https://dobro.ru/'
							 className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
							Стать волонтером
						</a>
					</div>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-gray-800 mb-4">Контакты</h2>
					<p className="text-gray-600 leading-relaxed">
						Если у вас есть вопросы или предложения, свяжитесь с нами:
					</p>
					<ul className="mt-4 space-y-2 text-gray-600">
						<li>Телефон: <a href="tel:+79220229482" className="text-blue-500 hover:text-blue-700">+7 (922)
							022-94-82</a>
						</li>
						<li>Email: <a href="mailto:info@charity.com"
													className="text-blue-500 hover:text-blue-700">info@charity.com</a></li>
					</ul>
				</section>
			</div>
		</div>

	);
};

export default Philanthropy;