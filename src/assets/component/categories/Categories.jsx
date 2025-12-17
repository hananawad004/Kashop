import style from './Categories.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { CircularProgress, Typography } from '@mui/material';
// import useCategories from '../../../hooks/useCategories';
 import useCategories from './../../../hooks/useCategories'
function Categories() {
    const { isLoading, isError, data } = useCategories();
    if (isLoading) return <CircularProgress></CircularProgress>
    if (isError) return <Typography>error</Typography>
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
                {data.map((cat) => (
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
