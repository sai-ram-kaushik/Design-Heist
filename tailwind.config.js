module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		fontFamily: {
			recursive: 'Recursive',
			overpass: 'Overpass',
			pragatiNarrow: 'Pragati Narrow'
		},
		screen: {
			sm: '480px',
			md: '780px',
			lg: '830px'
		}
	},
	plugins: []
};
