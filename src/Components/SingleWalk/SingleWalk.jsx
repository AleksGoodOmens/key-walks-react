import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import pic1 from '../Walks/imgs/1.jpg';
import pic2 from '../Walks/imgs/2.jpg';
import pic3 from '../Walks/imgs/3.jpg';

import styles from './singleWalk.module.scss';

const data = {
	islington: {
		title: 'Islington Walk Tour: Unveiling History and Culture',
		author: 'Mario',
		text: [
			"The Islington Walk Tour is a captivating journey through the heart of one of London's most vibrant neighborhoods. Nestled in the heart of the city, Islington is a treasure trove of history, culture, and hidden gems waiting to be discovered.",
			"As you stroll along its charming streets, you'll be transported back in time, exploring centuries-old architecture and landmarks that whisper tales of bygone eras. From the historic Angel district to the picturesque Regents Canal, every corner of Islington has a story to tell.",
			"This tour isn't just about the past; it's a vibrant snapshot of modern life in London. Islington is renowned for its eclectic mix of shops, eateries, and cultural venues. You'll have the opportunity to savor delectable cuisines, browse unique boutiques, and soak in the neighborhood's contemporary arts scene.",
			"Led by knowledgeable guides, the Islington Walk Tour is an immersive experience that caters to history enthusiasts, foodies, and culture seekers alike. Whether you're captivated by the Victorian architecture, intrigued by literary connections, or simply eager to explore a dynamic London neighborhood, this tour promises a memorable adventure.",
			'Come join us on the Islington Walk Tour and uncover the rich tapestry of stories that make this neighborhood a true London gem.',
		],
		pic: pic1,
	},
	"king's cross": {
		title: "King's Cross Walking Tour: Where History Meets Modernity",
		author: 'Aleks Goodomens',
		text: [
			"Embark on a fascinating journey through King's Cross, a district that seamlessly blends history and modernity in the heart of London. This walking tour unveils the captivating stories and transformations of an area that has evolved from a gritty industrial hub into a thriving cultural and architectural masterpiece.",
			"Your adventure begins at the iconic King's Cross Station, where you'll stand in awe of its stunning Victorian architecture and learn about its rich railway history. As you wander through the cobbled streets, you'll discover hidden gems like Coal Drops Yard, a vibrant shopping and dining destination housed in converted industrial buildings.",
			"The tour also explores the transformation of the Granary Square and Regent's Canal, where contemporary art installations harmonize with the historic surroundings. Along the way, you'll hear tales of the area's industrial past, literary connections, and regeneration projects that have shaped its modern identity.",
			"Led by knowledgeable guides, the King's Cross Walking Tour is a captivating blend of history, art, and urban development. Whether you're a history buff, a lover of architecture, or simply curious about London's ever-changing landscape, this tour promises an engaging and enlightening experience.",
			"Join us on the King's Cross Walking Tour and witness the captivating fusion of old and new in this dynamic London district.",
		],
		pic: pic2,
	},
	'through the ages': {
		title: `"Through the Ages" Walking Tour: A Timeless Journey through London's History`,
		author: 'Aleks Goodomens',
		text: [
			`Step back in time and traverse the centuries with the "Through the Ages" Walking Tour in London. This enchanting tour offers a unique opportunity to explore the city's rich and diverse history, from its ancient origins to its vibrant modern-day culture.`,
			"Your adventure commences at the historic heart of London, where you'll visit iconic landmarks such as the Tower of London, a fortress with a history dating back nearly a thousand years. As you meander through winding streets, you'll encounter Tudor architecture, medieval markets, and tales of Shakespearean London.",
			"The tour then transports you to the elegant Georgian era, showcasing the grandeur of Bath's Crescent and the splendor of Regent Street. You'll also delve into the Victorian age, with a visit to the opulent Royal Albert Hall and the Dickensian charm of Covent Garden.",
			`But "Through the Ages" is not just about history; it's a celebration of London's enduring spirit. You'll explore its contemporary side, with stops at trendy neighborhoods, art hubs, and modern architectural marvels.`,
			`Led by passionate guides, this walking tour is a captivating fusion of history, culture, and urban exploration. Whether you're a history enthusiast, an architecture buff, or simply curious about London's evolution, "Through the Ages" promises an unforgettable journey through the city's captivating narrative.`,
			`Join us on the "Through the Ages" Walking Tour and uncover the layers of London's extraordinary past, beautifully interwoven with its vibrant present.`,
		],
		pic: pic3,
	},
	'london dungeon': {
		title: `London Dungeon Walking Tour: A Hauntingly Thrilling Adventure`,
		author: 'Mario',
		text: [
			`Prepare to be transported into the eerie depths of London's dark history with the London Dungeon Walking Tour. This spine-tingling experience offers a captivating blend of entertainment and education, immersing you in the city's most chilling tales and gruesome events.`,
			"Your journey begins at the entrance to the London Dungeon, a foreboding structure that sets the stage for what lies ahead. As you step inside, you'll find yourself navigating a labyrinthine world filled with sinister characters, historical reenactments, and immersive storytelling.",
			"The tour leads you through a series of chilling scenes, each depicting a different period in London's macabre past. From the plague-ridden streets of the medieval era to the horrors of the Victorian era, you'll come face to face with infamous criminals, torturers, and legendary figures who once haunted the city.",
			`Along the way, expert actors and interactive exhibits bring these dark tales to life, ensuring an unforgettable and spine-tingling experience. The London Dungeon Walking Tour is not for the faint of heart, as it delves into the city's gruesome history, complete with ghastly surprises and heart-pounding thrills.`,
			`Ideal for history enthusiasts, thrill-seekers, and those with a morbid curiosity, this tour offers a unique and unforgettable exploration of London's sinister side. Whether you're intrigued by the Jack the Ripper mystery or captivated by medieval torture methods, the London Dungeon Walking Tour promises an unforgettable adventure into the city's darkest recesses.`,
			`Join us on the London Dungeon Walking Tour and journey through the chilling annals of London's past, where history and horror collide in a hair-raising experience like no other.`,
		],
		pic: `https://img5.arrivo.ru/1679/52/63959/0/ragpickinghistory.co.uk.jpg`,
	},
	'jack the ripper': {
		title: `Jack the Ripper Walking Tour: Uncover the Mystery of London's Most Notorious Killer`,
		author: 'Mario',
		text: [
			`Step into the shadowy alleys of Victorian London and embark on a chilling journey to unravel the enigma of Jack the Ripper, one of history's most infamous serial killers. The Jack the Ripper Walking Tour invites you to walk in the footsteps of terror and suspense, exploring the haunting tales and unsolved mysteries that still captivate the world today.`,
			"Your adventure begins in the dimly lit streets of Whitechapel, the very place where the gruesome murders took place in 1888. Led by expert guides, you'll delve into the sinister atmosphere of the era, as gas lamps cast eerie glows on cobblestone streets.",
			"As you walk through the hauntingly atmospheric lanes, you'll visit the murder sites, hear the horrifying stories of the victims, and learn about the bungled investigations that left the identity of Jack the Ripper shrouded in mystery. The tour takes you to historic landmarks, including the Ten Bells Pub, where the victims were known to frequent.",
			`With vivid storytelling and authentic period details, the Jack the Ripper Walking Tour offers a spine-tingling experience that transports you back in time. It's a gripping exploration of London's darkest past, filled with suspense, intrigue, and a quest to unmask the world's most infamous killer.`,
			`Whether you're a true-crime enthusiast or simply intrigued by the mysteries of the past, this tour promises a captivating and haunting adventure through the chilling annals of Jack the Ripper's reign of terror.`,
			`Join us on the Jack the Ripper Walking Tour and become a detective for the night, as you strive to decipher the cryptic clues and secrets that have baffled investigators for over a century.`,
		],
		pic: `https://media.tacdn.com/media/attractions-splice-spp-674x446/08/4b/12/e1.jpg`,
	},
};

function SingleWalk({ setColor }) {
	const { singleWalk } = useParams();
	const navigate = useNavigate();

	const [tour, setTour] = useState(null);

	useEffect(() => {
		if (singleWalk === 'coming soon') {
			navigate('/walks');
		}
		setTour(data[singleWalk]);
	}, [singleWalk, navigate]);

	useEffect(() => {
		setColor('');
	}, [setColor]);

	const view = (tour) => {
		const { title, text, author, pic } = tour;
		const pageTitleDivider = (string) =>
			string.split(' ').map((item, id) => {
				return <div key={id}>{item}</div>;
			});

		return (
			<section className={`${styles.container} fadeIn`}>
				<header
					className={styles.header}
					style={{ background: `no-repeat center /cover url(${pic})` }}
				>
					<h1 className={styles.header__title}>
						{pageTitleDivider(singleWalk)}walk
					</h1>
					<Link
						className={styles.header__button}
						to="/walks"
					>
						X
					</Link>
				</header>
				<section className={styles.content}>
					<h2 className={styles.content__title}>{title}</h2>
					<p className={styles.content__author}>{author}</p>
					<div className={styles.content__texts}>
						{text.map((item, id) => (
							<p
								className={styles.content__text}
								key={id}
							>
								{item}
							</p>
						))}
					</div>
				</section>
				<Link
					className={`${styles.button} button`}
					to={`/tickets/${singleWalk}`}
				>
					Book Your Historic <br /> Walk Now
				</Link>
			</section>
		);
	};

	return <>{tour && view(tour)}</>;
}

export default SingleWalk;
