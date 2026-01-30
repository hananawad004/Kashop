import style from './Categories.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { CircularProgress, Typography } from '@mui/material';
import useCategories from './../../../hooks/useCategories';


import categoryImg from '../../../assets/images/category.png';

function Categories() {
    const { isLoading, isError, data } = useCategories();
{console.log(data)}
    if (isLoading) return <CircularProgress />;
    if (isError) return <Typography>Error</Typography>;

    return (
        <section className={style.categoriesSection}>
            <h2 className={style.title}>Top Categories Book</h2>

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
                            
                            <div className={style.imageWrapper}>
                                <img src={categoryImg} alt={cat.name} />
                                <span className={style.badge}>25 Books</span>
                            </div>

                            <h4 className={style.categoryName}>
                                {cat.name}
                            </h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Categories;
