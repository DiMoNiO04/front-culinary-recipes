'use client';

import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import styles from './Slider.module.scss';
import { slides } from '@/data';
import Link from 'next/link';
import Image from 'next/image';

const Slider: React.FC = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        pagination={{ el: `.${styles.pagination}`, clickable: true }}
        navigation={{
          nextEl: `.nextButtonSlider`,
          prevEl: `.prevButtonSlider`,
        }}
        speed={700}
        // autoplay={{ delay: 4000 }}
        className={styles.swiper}
      >
        {slides.map(({ id, title, description, link, img }) => (
          <SwiperSlide key={id} className={styles.slide}>
            <Link href={link}>
              <div className={styles.img}>
                <Image src={img} alt="" width={1440} height={634} />
              </div>
              <div className={`${styles.info}`}>
                <div className={styles.description}>
                  <Image src={'/icons/trendingUp.svg'} alt="" width={20} height={20} />
                  <span>{description}</span>
                </div>
                {id === 1 ? <h1 className={styles.title}>{title}</h1> : <h2 className={styles.title}>{title}</h2>}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.btns}>
        <button className="prevButtonSlider" aria-label="Предыдущий слайд">
          <Image src={'/icons/arrowLeft.svg'} alt="Prev" width={16} height={16} />
        </button>
        <button className="nextButtonSlider" aria-label="Следующий слайд">
          <Image src={'/icons/arrowRight.svg'} alt="Next" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
