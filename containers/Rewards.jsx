import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { images } from '../constants/images';

const {
	Scene_BluePurpleGold_Farming,
	Scene_BluePurpleGold_Trading,
	Scene_BluePurpleGold_NoLimits,
} = images;

const Rewards = () => {
	return (
		<section id='section-fundamentals' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>Reward Tiers</h2>
			</motion.div>
			
			<div className='cards-wrapper'>
				<div className='card'>
				        <figure>
						<Image src={Scene_BluePurpleGold_Farming} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Tier 1 Rewards</span>
						<span className='card__content'>
							<p>
								The first tier is the most basic one, where you can earn rewards by simply holding LNT tokens in your wallet. Hold LNT and earn BNB. The rewards are distributed daily from transactions and bi weekly from the LNT mining Facility.
						        </p>
							</span>
						{/* <Link href='https://docs.kromatika.finance/'>
							<a
								className='btn btn-solid btn-block'
								target='_blank'
								rel='noopener noreferrer'>
								Let’s go
							</a>
						    </Link> */}
					</div>
				</div>

				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_Trading} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Tier 2 Rewards</span>
						<span className='card__content'>
							<p>
								The second tier is a bit more advanced. By holding 20M+ LNT tokens and reinvesting your rewards, you will earn a higher yield from the mining facility that compounds as you reinvest. 
							</p>
						</span>
						
					</div>
				</div>

				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_NoLimits} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Tier 3 Rewards</span>
						<span className='card__content'>
							<p>
								Hold on, we’re not done yet. The third tier requires you to hold  50M+ LNT tokens, and reinvest your rewards. This allows you to make the highest earnings from the mining facility that will also compound as you reinvest.
							</p>
						</span>
						
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rewards;
