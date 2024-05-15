import { Swiper, SwiperSlide } from 'swiper/react'
import opa from './woman.png'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import './style.scss'
const Carousels = () => {
  return (
    <div className='container'>
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <h1 className='title__carus'>We have millions of best wishers</h1>
      <SwiperSlide className='slide'>
        <h1 className='carusels-title'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</h1>
        <div className="slide-box">
          <img className='img' src={opa} alt="" />
          <h1 className='title'>Cameron Williamson, <span>CEO</span></h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide1'>
        <h1 className='carusels-title'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</h1>
        <div className="slide-box">
          <img className='img' src={opa} alt="" />
          <h1 className='title'>Cameron Williamson, <span>CEO</span></h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide2' >
        <h1 className='carusels-title'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</h1>
        <div className="slide-box">
          <img className='img' src={opa} alt="" />
          <h1 className='title'>Cameron Williamson, <span>CEO</span></h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide3' >
        <h1 className='carusels-title'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</h1>
        <div className="slide-box">
          <img className='img' src={opa} alt="" />
          <h1 className='title'>Cameron Williamson, <span>CEO</span></h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide4' >
        <h1 className='carusels-title'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</h1>
        <div className="slide-box">
          <img className='img' src={opa} alt="" />
          <h1 className='title'>Cameron Williamson, <span>CEO</span></h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
        <h1 className='carusels-title'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</h1>
        <div className="slide-box">
          <img className='img' src={opa} alt="" />
          <h1 className='title'>Cameron Williamson, <span>CEO</span></h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide1'>
        <h1 className='carusels-title'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</h1>
        <div className="slide-box">
          <img className='img' src={opa} alt="" />
          <h1 className='title'>Cameron Williamson, <span>CEO</span></h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide2' >
        <h1 className='carusels-title'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</h1>
        <div className="slide-box">
          <img className='img' src={opa} alt="" />
          <h1 className='title'>Cameron Williamson, <span>CEO</span></h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide3' >
        <h1 className='carusels-title'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</h1>
        <div className="slide-box">
          <img className='img' src={opa} alt="" />
          <h1 className='title'>Cameron Williamson, <span>CEO</span></h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide4' >
        <h1 className='carusels-title'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</h1>
        <div className="slide-box">
          <img className='img' src={opa} alt="" />
          <h1 className='title'>Cameron Williamson, <span>CEO</span></h1>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
export default Carousels