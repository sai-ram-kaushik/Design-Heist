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
				className='h-screen w-screen flex'
			>
				<div className='flex-[0.7] pl-[146px] h-full flex flex-col justify-center'>
					<div className='text-[84px] font-ptsans'>SSS Edutech</div>
					<div className='text-[48px] font-overpass'>
						One Stop solution for all your learning needs
					</div>
				</div>
				<div className='flex-1'>hello</div>
			</div>
		</div>
	);
}
