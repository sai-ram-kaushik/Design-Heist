import { useEffect } from 'react';

export default function Home() {
	return (
		<div>
			<div
				style={{
					backgroundImage:
						'url(https://raw.githubusercontent.com/ShivamBhasin2002/Design-Heist/master/public/landingPage1.svg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPositionX: 'center'
				}}
				className='h-screen w-screen flex flex-row'
			>
				<div className='flex-1 h-full flex-col justify-center items-center'>
					<div className='text-[80px]'>SSS Edutech</div>
					<div className='text-[30px]'>SSS Edutech</div>
				</div>
				<div className='flex-1'>hello</div>
			</div>
		</div>
	);
}
