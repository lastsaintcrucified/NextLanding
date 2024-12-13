"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulselogo from "@/assets/logo-pulse.png";
import quantamLogo from "@/assets/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
	return (
		<section
			id='logoTicker'
			className='py-8 md:py-12 bg-white '
		>
			<div className='px-5'>
				<div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
					<motion.div
						className='flex gap-14 flex-none pr-14'
						animate={{
							translateX: "-50%",
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: "linear",
							repeatType: "loop",
						}}
					>
						<Image
							src={acmeLogo}
							alt='Acme Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={celestialLogo}
							alt='Celestial Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={apexLogo}
							alt='Apex Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={echoLogo}
							alt='Echo Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={pulselogo}
							alt='Pulse Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={quantamLogo}
							alt='Quantam Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={acmeLogo}
							alt='Acme Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={celestialLogo}
							alt='Celestial Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={apexLogo}
							alt='Apex Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={echoLogo}
							alt='Echo Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={pulselogo}
							alt='Pulse Logo'
							className='logo-ticker-image'
						/>
						<Image
							src={quantamLogo}
							alt='Quantam Logo'
							className='logo-ticker-image'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
