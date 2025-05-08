"use client";
import ProductImage from "@/assets/prj.png";
import Image from "next/image";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
	return (
		<section
			id='product'
			ref={sectionRef}
			className='py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip'
		>
			<div className='container'>
				<div className='section-heading'>
					<div className='flex justify-center'>
						<div className='tag'>Boost your productivity.</div>
					</div>
					<h2 className='section-title mt-5'>
						Modern and effective web solution for you.
					</h2>
					<p className='section-description mt-5'>
						Effortlessly turn your ideas into fully functional ,responsive,Sass
						website with this template within minutes.
					</p>
				</div>
				<div className='relative'>
					<Image
						src={ProductImage}
						alt='Product Image'
						className='mt-10'
					/>
					<motion.img
						src={PyramidImage.src}
						alt='Pyramid Image'
						height={262}
						width={262}
						className='hidden md:block absolute -top-32 -right-36'
						style={{
							translateY: translateY,
						}}
					/>
					<motion.img
						src={TubeImage.src}
						alt='Tube Image'
						height={248}
						width={248}
						className='hidden md:block absolute bottom-24 -left-36'
						style={{
							translateY: translateY,
						}}
					/>
				</div>
			</div>
		</section>
	);
};
