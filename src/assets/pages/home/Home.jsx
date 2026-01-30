import React from 'react'
import Categories from '../../component/categories/Categories';
import ProductsSlider from './../../component/productSlider/ProductSlider';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from '../../../LanguageSwitcher';
import HeroSection from '../../component/HeroSection/HeroSection';
import LatestNewsSection from '../../component/LatestNewsSection';
import BasicHeroSection from '../../component/BasicHeroSection';
function Home() {
  // const { t } = useTranslation();

  return (
    <div>
         {/* <LanguageSwitcher />  */}
      <BasicHeroSection />
      <Categories />
      <ProductsSlider />
      <HeroSection/>
      <LatestNewsSection />
    </div>
  )
}

export default Home;
