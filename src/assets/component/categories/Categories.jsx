import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../API/axiosInstance';
import style from './Categories.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const res = await axiosInstance.get('/Categories');
            setCategories(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className={style.categoriesSection}>
            <h2 className={style.title}>Top Categories</h2>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={4}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {categories.map((cat) => (
                    <SwiperSlide key={cat.id}>
                        <div className={style.categoryCard}>
                            <span className={style.badge}>10 </span>
                            <h4>{cat.name}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Categories;
