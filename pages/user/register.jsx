import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faKey } from '@fortawesome/free-solid-svg-icons';

const Input = (attr) => {
	return (
		<div
			className={`${attr.width} relative inline-block my-[10px] text-lg font-bold`}
		>
			<input
				{...attr}
				autoComplete='off'
				className='w-[97%] py-[10px] text-[18px] mx-auto mb-[30px]  border-b outline-none bg-transparent'
			/>
			<label
				id={`${attr.id}Label`}
				className='absolute top-0 left-0 py-[10px] text-[16px] pointer-events-none duration-[0.5s]'
			>
				<FontAwesomeIcon icon={attr.icon} /> {attr.label}
			</label>
			<Script strategy='lazyOnload'>
				{`
				input = document.querySelector('#${attr.id}');
				input.addEventListener('focusin', (e) => {
				if (!e.target.value)
					document
						.querySelector('#${attr.id}Label')
						.classList.toggle('active-label');
				});
						input.addEventListener('focusout', (e) => {
				if (!e.target.value)
					document
						.querySelector('#${attr.id}Label')
						.classList.toggle('active-label');
				});`}
			</Script>
		</div>
	);
};

const Login = () => {
	return (
		<section
			id='contact'
			className='flex flex-wrap lg:h-screen overflow-hidden'
		>
			<article className=' flex flex-col flex-1 justify-center items-center'>
				<Image
					className='!left-[-100px] md:left-0'
					src='/loginImage.svg'
					alt='gif'
					width='500%'
					height='390%'
					layout='fixed'
				/>
			</article>
			<form className='flex-1' method='POST' autoComplete='off'>
				<aside className='flex flex-col h-full justify-center mx-auto w-[70%] text-lg min-w-[300px]'>
					<Input
						id='email'
						type='email'
						name='email'
						label='Email Address'
						width='flex-grow-1'
						icon={faEnvelopeOpen}
					/>
					<Input
						id='password'
						type='password'
						name='password'
						label='New Password'
						width='flex-grow-1'
						icon={faKey}
					/>
					<Input
						id='password'
						type='password'
						name='password'
						label='Confirm Password'
						width='flex-grow-1'
						icon={faKey}
					/>

					<button className='mt-10 mb-3 mx-auto outline-none bg-purple-800 h-[50px] w-[70%] rounded-2xl font-bold text-white text-2xl hover:bg-purple-900'>
						Sign Up
					</button>
					<span className='mx-auto'>
						Have an account?{' '}
						<Link href='/user/login'>
							<a>
								<strong>Sign In</strong>
							</a>
						</Link>
					</span>
				</aside>
			</form>
		</section>
	);
};

export default Login;
