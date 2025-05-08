"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
	{
		title: "Usua",
		monthlyPrice: 15,
		buttonText: "Get started immediately",
		popular: false,
		inverse: false,
		features: [
			"Up to 2 revisions",
			"Standard support",
			"Pixel perfect code implementation",
			"Responsive design",
			"Basic analytics",
			"Basic security features",
		],
	},
	{
		title: "Pro",
		monthlyPrice: 10,
		buttonText: "Hire me now",
		popular: true,
		inverse: true,
		features: [
			"Up to 5 revisions",
			"Good support",
			"Pixel perfect code implementation",
			"Responsive design",
			"Basic analytics",
			"Basic security features",
			"Light/Dark mode",
		],
	},
	{
		title: "Business",
		monthlyPrice: 25,
		buttonText: "Contact me",
		popular: false,
		inverse: false,
		features: [
			"Up to 10 revisions",
			"Best support",
			"Pixel perfect code implementation",
			"Responsive design",
			"Basic analytics",
			"Basic security features",
			"Light/Dark mode",
			"Advanced analytics",
			"Custom features",
		],
	},
];

export const Pricing = () => {
	return (
		<section
			id='pricing'
			className='py-24 bg-white'
		>
			<div className='container '>
				<div className='section-heading'>
					<h2 className='section-title'>Pricing</h2>
					<p className='section-description mt-5'>
						Quality forever, update for unlimited tasks, better security and
						exclusive features
					</p>
				</div>

				<div className='mt-10 flex flex-col gap-6 items-center lg:flex lg:flex-row lg:items-end lg:justify-center'>
					{pricingTiers.map(
						({
							title,
							monthlyPrice,
							buttonText,
							popular,
							inverse,
							features,
						}) => (
							<div
								className={twMerge(
									"card",
									inverse === true && "border-black bg-black text-white/60"
								)}
								key={title}
							>
								<div className='flex justify-between'>
									<h3
										className={twMerge(
											"text-lg font-bold text-black/50",
											inverse === true && "text-white/60"
										)}
									>
										{title}
									</h3>
									{popular === true && (
										<div
											key={monthlyPrice}
											className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'
										>
											<motion.span
												className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium'
												animate={{
													backgroundPositionX: "100%",
												}}
												transition={{
													duration: 1,
													repeat: Infinity,
													ease: "linear",
													repeatType: "loop",
												}}
											>
												Popular
											</motion.span>
										</div>
									)}
								</div>
								<div className='flex items-baseline gap-1 mt-[30px]'>
									<span className='leading-none text-4xl font-bold tracking-tighter'>
										${monthlyPrice}
									</span>
									<span className='tracking-tight font-bold text-black/50'>
										/hour
									</span>
								</div>
								<button
									className={twMerge(
										"btn btn-primary w-full mt-[30px]",
										inverse === true && "bg-white text-black"
									)}
									onClick={() =>
										(window.location.href = "mailto:itowhidul876@gmail.com")
									}
								>
									{buttonText}
								</button>
								<ul className='flex flex-col mt-8 gap-5'>
									{features.map((feature) => (
										<li
											className='flex items-center gap-4 text-sm'
											key={feature}
										>
											<CheckIcon className='h-6 w-6' />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};
