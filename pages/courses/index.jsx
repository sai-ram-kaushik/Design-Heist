import Link from 'next/link';

const Category = () => {
	return (
		<div className='flex-shrink-0 w-[250px] h-[200px] rounded-3xl bg-slate-100 mb-3 '>
			<span className='w-full h-full flex justify-center items-center invisible hover:visible '>
				hello
			</span>
		</div>
	);
};

const categories = [{}, {}, {}, {}, {}, {}, {}];

const home = () => {
	return (
		<div>
			<section
				id='contact'
				className='lg:flex pt-10 flex-wrap-reverse min-h-screen lg:h-screen '
			>
				<aside className='flex flex-col flex-1 h-full justify-center  px-5 lg:px-24'>
					<h1 className='text-[25px] lg:text-[80px] font-recursive'>
						Welcome User
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Voluptatem, asperiores labore obcaecati ex alias molestias facere
						molestiae iusto a harum quod optio rem temporibus porro, adipisci,
						sequi doloribus qui tempora?
					</p>
					<article className='flex px-5'>
						<a
							className='bg-black hover:bg-[#171717] text-[#7422FF] text-sm md:text-lg rounded-[24px] px-10 py-3 my-5 font-bold'
							href='/courses/#categories'
						>
							Our Courses
						</a>
					</article>
				</aside>
				<aside className='contact-image-holder flex flex-col flex-1 h-full justify-center'>
					<>
						<img
							src='/study.gif'
							alt='gif'
							className='text-[100%] w-[100%] max-w-[500px] mx-auto'
						/>
					</>
				</aside>
			</section>
			<section id='categories' className='min-h-screen w-fulls py-5 px-24'>
				<header className='font-recursive font-bold	text-[50px] mb-10'>
					Top Categories
				</header>
				<section className='flex flex-row flex-wrap justify-evenly'>
					{categories.map((category) => (
						<Category />
					))}
				</section>
			</section>
		</div>
	);
};

export default home;
