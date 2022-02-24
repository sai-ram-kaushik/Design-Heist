import { useEffect } from 'react';

export default function Home() {
	return (
		<div
			className='h-screen w-screen'
			style={{
				backgroundImage: `${require('../public/landingPage1.svg')}`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}
		></div>
	);
}
