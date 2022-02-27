import Link from 'next/link';

const home = () => {
	return (
		<div
			id='contact'
			className='lg:flex pt-10 flex-wrap-reverse min-h-screen lg:h-screen '
		>
			<div className='flex flex-col flex-1 h-full justify-center px-5 lg:px-24'>
				<h1 className='text-[25px] lg:text-[80px] font-recursive'>
					Welcome User
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
					asperiores labore obcaecati ex alias molestias facere molestiae iusto
					a harum quod optio rem temporibus porro, adipisci, sequi doloribus qui
					tempora?
				</p>
				<div className='flex px-5'>
					<a
						className='bg-black hover:bg-[#171717] text-[#7422FF] text-sm md:text-lg rounded-[24px] px-10 py-3 my-5 '
						href='#categories'
					>
						Our Courses
					</a>
				</div>
			</div>
			<div className='contact-image-holder flex flex-col flex-1 h-full justify-center'>
				<span>
					<img
						src='/study.gif'
						alt='gif'
						className='text-[100%] w-[100%] max-w-[500px] mx-auto'
					/>
				</span>
			</div>
		</div>
	);
};

export default home;
