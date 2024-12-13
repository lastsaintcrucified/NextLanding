"use client";
import ArroIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import CylinderImage from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

	return (
		<section
			ref={heroRef}
			className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'
		>
			<div className='px-5'>
				<div className='md:flex items-center'>
					<div className='md:w-[478px]'>
						<div className='tag'>Version 2.0 is here</div>
						<h1 className='mt-6 text-5xl md:text-7xl tracking-tighter font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>
							Welcome to productivity
						</h1>
						<p className='text-xl text-[#010D3E] tracking-tight mt-6'>
							I am Towhidul Islam Bhy, a Front-end engineer, working to make
							your digital presence more lively and wonderful!
						</p>
						<div className='flex items-center mt-[30px]'>
							<button className='btn btn-primary'>Contact me</button>
							<button className='btn btn-text gap-1'>
								<span>Hire me</span>
								<ArroIcon className='h-5 w-5' />
							</button>
						</div>
					</div>
					<div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
						<motion.img
							src={CogImage.src}
							alt='Cog image for Hero'
							className='md:absolute md:h-full md:w-auto md:max-w-none lg:left-2'
							animate={{
								translateY: [-30, 30],
							}}
							transition={{
								repeat: Infinity,
								repeatType: "mirror",
								duration: 3,
								ease: "easeInOut",
							}}
						/>
						<motion.img
							src={CylinderImage.src}
							alt='Cylinder image'
							width={220}
							height={220}
							className='hidden md:block -top-8 -left-32 md:absolute'
							style={{
								translateY: translateY,
							}}
						/>
						<motion.img
							src={NoodleImage.src}
							alt='Noodle Image'
							width={220}
							height={220}
							className='hidden md:block top-[524px] left-[448px] md:absolute rotate-[30deg]'
							style={{
								rotate: 30,
								translateY: translateY,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
