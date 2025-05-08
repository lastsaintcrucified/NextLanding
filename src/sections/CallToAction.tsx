"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
	return (
		<section
			id='contact'
			ref={sectionRef}
			className='py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip'
		>
			<div className='container'>
				<div className='section-heading relative'>
					<h2 className='section-title'>
						Hire me today for a seamless experience!
					</h2>
					<p className='section-description mt-5'>
						Celebrate the joy of accomplishment with an app designed to track
						your progress and motivate your efforts.
					</p>
					<motion.img
						src={StarImage.src}
						alt='Star Image'
						width={360}
						className='hidden md:block absolute -left-[350px] -top-[137px]'
						style={{
							translateY: translateY,
						}}
					/>
					<motion.img
						src={SpringImage.src}
						alt='Tube Image'
						width={360}
						style={{
							translateY: translateY,
						}}
						className='hidden md:block absolute -right-[331px] -top-[19px]'
					/>
				</div>
				<div className='flex justify-center gap-2 mt-10'>
					<button
						className='btn btn-primary'
						onClick={() =>
							(window.location.href = "mailto:itowhidul876@gmail.com")
						}
					>
						Contact Now
					</button>
					<button className='btn bnt-text gap-1'>
						<span>Learn more</span>
						<ArrowRight className='h-5 w-5' />
					</button>
				</div>
			</div>
		</section>
	);
};
