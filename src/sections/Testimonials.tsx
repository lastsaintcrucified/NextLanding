"use client";
import avatar1 from "@/assets/abc.png";
import avatar2 from "@/assets/def.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/ghi.jpg";
import avatar5 from "@/assets/def.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
	{
		text: " Fix-It is a full-stack web application built to streamline the connection between clients and local service providers, offering a robust, secure, and real-time experience across devices",
		imageSrc: avatar1.src,
		name: "Fix-ut",
		username: "NextJs,Shadcn,Firebase",
		link: "https://fix-it-three.vercel.app/",
	},
	{
		text: " This is actually a simple project management apps where you can sign up as an admin( For testing ,although it is recommended to have this feature unprotected for public) and also as an user.  ",
		imageSrc: avatar2.src,
		name: "Project Dashboard",
		username: "NextJs,Shadcn,Firebase",
		link: "https://project-dashboard-django.vercel.app/",
	},
	{
		text: " DailyPrompt provides completely new and random topic every day based on ai.",
		imageSrc: avatar3.src,
		username: "NextJs,Shadcn,Firebase",
		name: "Daily Prompt",
		link: "https://daily-prompt.vercel.app/",
	},
	{
		text: " Clone of a Scholarship platform .",
		imageSrc: avatar4.src,
		username: "NextJs,Shadcn,Firebase",
		name: "AlterYouth",
		link: "https://alter-youth-phi.vercel.app/",
	},
	{
		text: " A chatting apps created to communicate between friends. Used socket.io for real-time chat",
		username: "ReactJs,SocketIo,Firebase",
		imageSrc: avatar6.src,
		name: "Bro Chat",
		link: "https://react-fb-chat.firebaseapp.com/",
	},

	{
		text: " DailyPrompt provides completely new and random topic every day based on ai.",
		imageSrc: avatar3.src,
		name: "Daily Prompt",
		link: "https://daily-prompt.vercel.app/",
	},
	{
		text: " This is actually a simple project management apps where you can sign up as an admin( For testing ,although it is recommended to have this feature unprotected for public) and also as an user.  ",
		imageSrc: avatar2.src,
		name: "Project Dashboard",
		link: "https://project-dashboard-django.vercel.app/",
	},
	{
		text: " Clone of a Scholarship platform .",
		imageSrc: avatar4.src,
		name: "AlterYouth",
		link: "https://alter-youth-phi.vercel.app/",
	},
	{
		text: " A chatting apps created to communicate between friends. Used socket.io for real-time chat",
		username: "ReactJs,SocketIo,Firebase",
		imageSrc: avatar6.src,
		name: "Bro Chat",

		link: "https://react-fb-chat.firebaseapp.com/",
	},
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialColumn = (props: {
	className?: string;
	testimonials: typeof testimonials;
	duration?: number;
}) => (
	<div
		id='testimonial'
		className={props.className}
	>
		<motion.div
			className='flex flex-col gap-6 pb-6'
			animate={{
				translateY: "-50%",
			}}
			transition={{
				duration: props.duration || 10,
				repeat: Infinity,
				ease: "linear",
				repeatType: "loop",
			}}
		>
			{[...new Array(2)].fill(0).map((_, index) => (
				<React.Fragment key={index}>
					{props.testimonials.map(
						({ text, imageSrc, name, username, link }) => (
							<div
								key={text}
								className='card'
							>
								<a
									href={link}
									target='_blank'
									rel='noopener noreferrer'
								>
									<div>{text}</div>
									<div className='flex mt-5 gap-2 items-center'>
										<Image
											src={imageSrc}
											alt={name}
											width={40}
											height={40}
											className='h-10 w-10 rounded-full'
										/>
										<div className='flex flex-col'>
											<div className='font-medium leading-5 tracking-tight'>
												{name}
											</div>
											<div className='tracking-tight leading-5'>{username}</div>
										</div>
									</div>
								</a>
							</div>
						)
					)}
				</React.Fragment>
			))}
		</motion.div>
	</div>
);

export const Testimonials = () => {
	return (
		<section className='bg-white'>
			<div className='container'>
				<div className='section-heading'>
					<div className='flex justify-center'>
						<div className='tag'>Projects</div>
					</div>
					<h2 className='section-title mt-5'>Quality over Quantity</h2>
					<p className='section-description mt-5'>
						From intuitive design to powerful features, our app has become an
						essential tool for users.
					</p>
				</div>
				<div className='flex justify-center gap-6  mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden'>
					<TestimonialColumn
						testimonials={firstColumn}
						duration={15}
					/>
					<TestimonialColumn
						testimonials={secondColumn}
						className='hidden md:block'
						duration={19}
					/>
					<TestimonialColumn
						testimonials={thirdColumn}
						className='hidden lg:block'
						duration={17}
					/>
				</div>
			</div>
		</section>
	);
};
