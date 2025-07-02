import React from 'react';
const PrivacyPolicy = () => {
	return (
		<div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 privacy">
			<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
					Политика обработки персональных данных
				</h1>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">1. Введение</h2>
					<p className="text-gray-600 leading-relaxed">
						Настоящая Политика обработки персональных данных (далее — «Политика») определяет порядок
						обработки персональных данных и меры по обеспечению безопасности персональных данных,
						предпринимаемые [Название компании] (далее — «Оператор»).
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">2. Основные понятия</h2>
					<ul className="list-disc list-inside text-gray-600 space-y-2">
						<li>
							<strong>Персональные данные</strong> — любая информация, относящаяся к прямо или
							косвенно определенному или определяемому физическому лицу.
						</li>
						<li>
							<strong>Обработка персональных данных</strong> — любое действие (операция) или
							совокупность действий (операций), совершаемых с использованием средств автоматизации
							или без использования таких средств с персональными данными.
						</li>
						<li>
							<strong>Оператор</strong> — государственный орган, юридическое или физическое лицо,
							самостоятельно или совместно с другими лицами организующие и (или) осуществляющие
							обработку персональных данных.
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						3. Цели обработки персональных данных
					</h2>
					<p className="text-gray-600 leading-relaxed">
						Оператор обрабатывает персональные данные в следующих целях:
					</p>
					<ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
						<li>Обеспечение соблюдения законодательства.</li>
						<li>Заключение и исполнение договоров с клиентами.</li>
						<li>Обратная связь с пользователями.</li>
						<li>Маркетинговые исследования и рассылка рекламных материалов.</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						4. Состав персональных данных
					</h2>
					<p className="text-gray-600 leading-relaxed">
						Оператор может обрабатывать следующие персональные данные:
					</p>
					<ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
						<li>Фамилия, имя, отчество.</li>
						<li>Контактные данные (телефон, электронная почта).</li>
						<li>Адрес доставки.</li>
						<li>Данные о платежных реквизитах.</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						5. Права субъектов персональных данных
					</h2>
					<p className="text-gray-600 leading-relaxed">
						Субъект персональных данных имеет право:
					</p>
					<ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
						<li>Получать информацию об обработке своих персональных данных.</li>
						<li>Требовать уточнения, блокирования или уничтожения персональных данных.</li>
						<li>Отозвать согласие на обработку персональных данных.</li>
						<li>Обращаться в уполномоченные органы для защиты своих прав.</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-gray-800 mb-4">6. Заключение</h2>
					<p className="text-gray-600 leading-relaxed">
						Настоящая Политика может быть изменена Оператором в одностороннем порядке. Новая редакция
						Политики вступает в силу с момента ее размещения на сайте, если иное не предусмотрено
						новой редакцией Политики.
					</p>
				</section>
			</div>
		</div>
	);
};

export default PrivacyPolicy;