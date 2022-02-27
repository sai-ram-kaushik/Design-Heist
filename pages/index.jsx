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
				className='min-h-screen w-full md:flex flex-wrap'
			>
				<aside className='flex-[0.7] md:pl-[100px] lg:pl-[146px] py-16  md:h-screen flex flex-col justify-center text-center md:text-left'>
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
						height='450'
						layout='fixed'
					/>
				</aside>
			</section>
			<section
				id='contact'
				style={{
					backgroundImage:
						'url(https://raw.githubusercontent.com/ShivamBhasin2002/Design-Heist/master/public/landingPage2.png)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPositionX: 'center',
					backgroundPositionY: '-150px'
				}}
				className='min-h-screen w-full md:flex flex-col flex-wrap md:px-[90px] bg-[#7422FF]'
			>
				<section>
					<h1 className='font-pragatiNarrow my-16 font-bold text-[20px] md:text-[60px] lg:text-[72px]  text-center'>
						"Our moto is to create
						<br /> a one stop solution for all your learning needs"
					</h1>
				</section>
				<section className='flex flex-row flex-wrap justify-evenly mt-20'>
					<article className='w-[360px]'>
						<h2 className='font-pragatiNarrow my-1 font-bold text-[20px] md:text-[25px] lg:text-[30px]  text-center'>
							What We are
						</h2>
						<p className='text-[10px] md:text-[15px]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Voluptatem, asperiores labore obcaecati ex alias molestias facere
							molestiae iusto a harum quod optio rem temporibus porro, adipisci,
							sequi doloribus qui tempora? Lorem ipsum dolor sit amet
							consectetur, adipisicing elit. Voluptatem, asperiores labore
							obcaecati ex alias molestias facere molestiae iusto a harum quod
							optio rem temporibus porro, adipisci, sequi doloribus qui
							tempora?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Voluptatem, asperiores labore obcaecati ex alias molestias facere
							molestiae iusto a harum quod optio rem temporibus porro, adipisci,
							sequi doloribus qui tempora?
						</p>
					</article>
					<article className='w-[360px]'>
						<h2 className='font-pragatiNarrow my-1 font-bold text-[20px] md:text-[25px] lg:text-[30px]  text-center'>
							What we do
						</h2>
						<p className='text-[10px] md:text-[15px]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Voluptatem, asperiores labore obcaecati ex alias molestias facere
							molestiae iusto a harum quod optio rem temporibus porro, adipisci,
							sequi doloribus qui tempora? Lorem ipsum dolor sit amet
							consectetur, adipisicing elit. Voluptatem, asperiores labore
							obcaecati ex alias molestias facere molestiae iusto a harum quod
							optio rem temporibus porro, adipisci, sequi doloribus qui
							tempora?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Voluptatem, asperiores labore obcaecati ex alias molestias facere
							molestiae iusto a harum quod optio rem temporibus porro, adipisci,
							sequi doloribus qui tempora?
						</p>
					</article>
					<article className='w-[360px]'>
						<h2 className='font-pragatiNarrow my-1 font-bold text-[20px] md:text-[25px] lg:text-[30px]  text-center'>
							Why we do it
						</h2>
						<p className='text-[10px] md:text-[15px]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Voluptatem, asperiores labore obcaecati ex alias molestias facere
							molestiae iusto a harum quod optio rem temporibus porro, adipisci,
							sequi doloribus qui tempora? Lorem ipsum dolor sit amet
							consectetur, adipisicing elit. Voluptatem, asperiores labore
							obcaecati ex alias molestias facere molestiae iusto a harum quod
							optio rem temporibus porro, adipisci, sequi doloribus qui
							tempora?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Voluptatem, asperiores labore obcaecati ex alias molestias facere
							molestiae iusto a harum quod optio rem temporibus porro, adipisci,
							sequi doloribus qui tempora?
						</p>
					</article>
				</section>
			</section>
		</div>
	);
}
