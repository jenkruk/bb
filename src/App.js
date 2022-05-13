

export default function App() {


	return (
		<div className='App'>
			<video
        preload="true"
				controls
				controlslist='nodownload'
				autoplay='true'
				loop
				poster='https://lh3.googleusercontent.com/IXafC13izthRy8zgOmo2vlY2f1b0Yis7GyAgcM_uHIRnx0NopRRekdtDl7j-5HBdSAh54jrkQP3MBL6Jugj3mB5k-pdZoJu78loDvQ'
				style={{
					borderRadius: "initial",
					maxHeight: "100vh",
					position: "fixed",
					top: "0",
					left: "50%",
					transform: "translateX(-50%)",
					backgroundColor: "black",
					boxShadow: "5px 10px 8px 10px black",
					zIndex: "0",
				}}
			>
				<source
					data-testid='AssetMedia--video'
					src='https://openseauserdata.com/files/3e7d787427a6bc454a20b2db030dea7c.mp4#t=0.001'
					type='video/mp4'
				/>
			</video>

			<div className='announcement'>Music Library Coming Soon!</div>
		</div>
	);
}
