import clsx from 'clsx'
import { useEffect, useState } from 'react'
import './styles.css'

/* 1. В папке src/assets хранятся изображения, которые нужно поместить в переменную IMAGES
 * и отобразить их в виде галереи случайным образом.
 *
 * 2. По умолчанию, контент должен быть отцентрирован и вмещать не более 5 изображений в строку.
 * При изменении ширины, количество изображение должно адаптироваться под видимую область.
 * Минимальная ширина - ~360px.
 *
 * 3. Переменная IMAGES_COUNT - суммарное количество картинок на странице,
 * которое будет сгенерировано. Это значение можно менять.
 *
 * 4. По нажатию на картинку, открывать её в диалоговом окне.
 */

export const IMAGES = [
	require('./assets/Ferrari.jpg'),
	require('./assets/GriffithPark.jpg'),
	require('./assets/Houses.jpg'),
	require('./assets/NorthVancouver.jpg'),
	require('./assets/Sunset.jpg'),
] as const

export const IMAGES_COUNT = 20 as const

const App: React.FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const [selectedImage, setSelectedImage] = useState<string | null>(null)

	const getRandomImages = (): string[] => {
		const images = []
		for (let i = 0; i < IMAGES_COUNT; i++) {
			const randomIndex = Math.floor(Math.random() * IMAGES.length)
			images.push(IMAGES[randomIndex])
		}
		return images
	}

	const [imagesToDisplay, setImagesToDisplay] = useState<string[]>(
		getRandomImages()
	)

	const openPopup = (image: string) => {
		setSelectedImage(image)
		setIsVisible(true)
	}

	const closePopup = () => {
		setIsVisible(false)
		setSelectedImage(null)
	}

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isVisible) {
				closePopup()
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [isVisible])

	return (
		<div className='App'>
			<header>
				<h1 className='heading'>Pinterest</h1>
			</header>

			<div className='gallery'>
				{imagesToDisplay.map((image, index) => (
					<div
						key={index}
						className='gallery__item'
						onClick={() => openPopup(image)}
					>
						<img src={image} className='image' alt='lol' />
					</div>
				))}
			</div>

			<div
				className={clsx('popup', {
					popup_visible: isVisible,
				})}
				onClick={closePopup}
			>
				<div className='popup__window'>
					{selectedImage && (
						<img src={selectedImage} alt='Selected' className='popup__image' />
					)}
				</div>
			</div>

			<footer className='footer'>Made with ❤️</footer>
		</div>
	)
}

export default App
