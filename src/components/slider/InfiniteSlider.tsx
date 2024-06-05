// "use client"
// import { useState, useEffect, useRef } from 'react';
// import ImageSlider from './ImageSlider';
// import BoxParticipant from './BoxParticipant';
// import styles from './slider.module.css';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const InfiniteSlider = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </>
//   );
//   // return (

//   //   // <div className="w-full h-full overflow-hidden relative flex flex-row gap-5">
//   //   //     <ImageSlider
//   //   //       src="/event/1.png"
//   //   //       alt="Example Image"
//   //   //       width="500px"
//   //   //       height="500px"
//   //   //       id="example-image"
//   //   //       subtitle='.'
//   //   //       />
//   //   //     <div className='flex flex-col gap-5'>

//   //   //       <ImageSlider
//   //   //         src="/event/2.png"
//   //   //         alt="Example Image"
//   //   //         width="240px"
//   //   //         height="240px"
//   //   //         id="example-image"
//   //   //         subtitle='.'
//   //   //         />
//   //   //       <BoxParticipant/>
//   //   //     </div>
//   //   //     <ImageSlider
//   //   //       src="/event/3.png"
//   //   //       alt="Example Image"
//   //   //       width="500px"
//   //   //       height="500px"
//   //   //       id="example-image"
//   //   //       subtitle='.'
//   //   //       />
//   //   //     <div className='flex flex-col gap-5'>

//   //   //       <ImageSlider
//   //   //         src="/event/4.png"
//   //   //         alt="Example Image"
//   //   //         width="240px"
//   //   //         height="240px"
//   //   //         id="example-image"
//   //   //         subtitle='.'
//   //   //         />
//   //   //       <BoxParticipant/>
//   //   //     </div>  
//   //   // </div>
//   // );
// };

// export default InfiniteSlider;
