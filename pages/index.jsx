import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<section
				style={{
					backgroundImage:
						'url(https://raw.githubusercontent.com/ShivamBhasin2002/Design-Heist/master/public/landingPage1.svg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPositionX: 'center'
				}}
				className='h-screen w-full md:flex flex-wrap'
			>
				<aside className='flex-[0.7] md:pl-[100px] lg:pl-[146px] py-16  md:h-full flex flex-col justify-center text-center md:text-left'>
					<article className='md:text-[84px] text-[40px] font-recursive tracking-[6.5%]'>
						SSS Edutech
					</article>
					<article className='md:text-[40px] text-[20px] font-overpass'>
						One Stop solution for all your learning needs
					</article>
					<article className='flex justify-evenly md:justify-start whitespace-nowrap'>
						<Link href='/courses/'>
							<a className='bg-black hover:bg-[#171717] text-[#7422FF] text-sm md:text-lg rounded-[24px] px-10 py-3 md:mr-4'>
								Our Courses
							</a>
						</Link>
						<a
							href='#contact'
							className='bg-black hover:bg-[#171717] text-[#7422FF] text-sm md:text-lg rounded-[24px] px-10 py-3'
						>
							Contact Us
						</a>
					</article>
				</aside>
				<aside className='flex-1 flex justify-center items-center'>
					<Image
						src='/landingPagePhones.svg'
						width='640.8'
						height='615.06'
						layout='fixed'
					/>
				</aside>
			</section>
			<section
				id='contact'
				style={{
					backgroundImage:
						'url(https://raw.githubusercontent.com/ShivamBhasin2002/Design-Heist/master/public/landingPage2.svg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
					// backgroundPositionX: 'center'
				}}
				className='h-screen w-full md:flex flex-wrap'
			></section>
		</div>
	);
}
