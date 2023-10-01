import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import styles from './walks.module.scss';
import 'swiper/css';
import 'swiper/css/free-mode';

import pic1 from './imgs/1.jpg';
import pic2 from './imgs/2.jpg';
import pic3 from './imgs/3.jpg';
import { Link } from 'react-router-dom';

function Walks({ setColor }) {
	const [cards, setCards] = useState([{ title: 'title', pic: 'not found' }]);

	useEffect(() => {
		setColor('dark');
		setCards([
			{
				title: 'islington',
				pic: pic1,
			},
			{
				title: "king's cross",
				pic: pic2,
			},
			{
				title: 'through the ages',
				pic: pic3,
			},
			{
				title: 'london dungeon',
				pic: `https://img5.arrivo.ru/1679/52/63959/0/ragpickinghistory.co.uk.jpg`,
			},
			{
				title: 'Jack the Ripper',
				pic: `https://media.tacdn.com/media/attractions-splice-spp-674x446/08/4b/12/e1.jpg`,
			},
			{
				title: 'coming soon',
				pic: 'https://avatars.dzeninfra.ru/get-zen_doc/3499786/pub_63396f8ab84d20324a9aae1a_633971c106655440f39f193e/scale_1200',
			},
		]);

		// control.slideTo(1);
	}, [setColor]);

	return (
		<>
			<Swiper
				direction={'vertical'}
				slidesPerView={3}
				initialSlide="2"
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
				}}
				loop={true}
				tag="section"
				freeMode={true}
				effect={'coverflow'}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 50,
					modifier: 1,
					slideShadows: true,
				}}
				id="walks"
				modules={[Autoplay, EffectCoverflow]}
				className={styles.walks}
			>
				{cards.map((card, id) => (
					<SwiperSlide key={id}>
						{({ isNext }) => (
							<Link
								to={`/walks/${card.title}`}
								className={
									isNext ? `${styles.card} ${styles.card__active}` : styles.card
								}
								style={{
									background: `center / cover no-repeat url(${card.pic})`,
								}}
							>
								<h2 className={styles.card__title}>{card.title}</h2>{' '}
							</Link>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default Walks;
