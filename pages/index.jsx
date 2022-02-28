import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

const Input = (attr) => {
	return (
		<div className={`${attr.width} relative inline-block my-[10px]`}>
			<input
				{...attr}
				autoComplete='off'
				className='w-[97%] py-[10px] text-[18px] text-white mx-auto mb-[30px]  border-b border-white outline-none bg-transparent'
			/>
			<label
				id={`${attr.id}Label`}
				className='absolute top-0 left-0 py-[10px] text-[16px] text-white pointer-events-none duration-[0.5s]'
			>
				{attr.label}
			</label>
			<Script strategy='lazyOnload'>
				{`
				let ${attr.id}Input = document.querySelector('#${attr.id}');
				${attr.id}Input.addEventListener('focusin', (e) => {
				if (!e.target.value)
					document
						.querySelector('#${attr.id}Label')
						.classList.toggle('active-label');
				});
				${attr.id}Input.addEventListener('focusout', (e) => {
				if (!e.target.value)
					document
						.querySelector('#${attr.id}Label')
						.classList.toggle('active-label');
				});`}
			</Script>
		</div>
	);
};

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
						<Link href='/courses/#categories'>
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
			<div
				id='contact'
				className='flex flex-wrap-reverse lg:h-screen bg-[#7422FF]'
			>
				<form
					className='flex-grow-[2]'
					action='https://formsubmit.co/bhasinshivam2002@gmail.com'
					method='POST'
					autoComplete='off'
				>
					<div className='flex flex-col h-full justify-center mx-auto w-[70%]'>
						<span className='flex flex-wrap'>
							<Input
								id='name'
								type='text'
								name='name'
								label='Full Name'
								width='flex-1'
							/>
							<Input
								id='email'
								type='email'
								name='email'
								label='Email Address'
								width='flex-1'
							/>
						</span>
						<span>
							<Input
								id='subject'
								type='text'
								name='_subject'
								label='Subject'
								width='w-full'
							/>
						</span>
						<div className='relative inline-block my-[10px]'>
							<textarea
								id='message'
								type='text-area'
								name='message'
								className='w-[97%] h-[100px] max-h-[300px] py-[10px] text-[18px] text-white mx-auto mb-[30px]  border-b border-white outline-none bg-transparent overflow-y-hidden'
							/>
							<label
								id='messageLabel'
								className='absolute top-0 left-0 py-[10px] text-[16px] text-white pointer-events-none duration-[0.5s]'
							>
								Message
							</label>
						</div>

						<input type='hidden' name='_captcha' value='false' />
						<input type='hidden' name='_next' />
						<input type='hidden' name='_template' value='table' />
						<span className='mt-[20px] px-[10px] flex flex-wrap '>
							<span>
								<button
									type='submit'
									className='btn btn-lg rounded-[15px] text-[#7422FF] font-bold bg-white px-[20px] py-[14px] mb-[20px] mr-[20px] hover:bg-white hover:text-[#3DD6D6]'
								>
									Submit
								</button>
							</span>
						</span>
					</div>
				</form>
				<div className='contact-image-holder flex flex-col flex-grow-1 h-full justify-center'>
					<span>
						<img
							src='/contact.gif'
							alt='gif'
							className='text-[100%] w-[100%] max-w-[500px] mx-auto'
						/>
					</span>
				</div>
				<Script>{`let messageInput = document.querySelector('#message');
					messageInput.addEventListener('focusin', (e) => {
						if (!e.target.value)
							document
								.querySelector('#messageLabel')
								.classList.toggle('active-label');
					});
					messageInput.addEventListener('focusout', (e) => {
						if (!e.target.value)
							document
								.querySelector('#messageLabel')
								.classList.toggle('active-label');
					});
					messageInput.addEventListener('input', ({ target }) => {
						target.style.height = 'auto';
						target.style.height = target.scrollHeight + 'px';
					});`}</Script>
			</div>
		</div>
	);
}
