import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
function Content() {
  return (


    <div>
      <div className='grid grid-cols-3 mt-4 gap-8 ml-32'>
        <div className='col-span-2'>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //     clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/5ef563e60c6474802ae5fe8ae0b4f9ee.jpg" className="block w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/1d869d0922c453d6ee938253dcb3a871.png" className="block w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/5ef563e60c6474802ae5fe8ae0b4f9ee.jpg" className="block w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/1d869d0922c453d6ee938253dcb3a871.png" className="block w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/1d869d0922c453d6ee938253dcb3a871.png" className="block w-full" />
            </SwiperSlide>
          </Swiper>
          <ul className='flex items-center'>
            <button><li className='w-32 h-12 mt-2 border-r-2 border-r-gray-300 border-t-4 border-gray-100 hover:border-t-rose-500 '>Lên đời Laptop giá ưu đãi</li></button>
            <button><li className='w-32 h-12 mt-2 border-r-2 border-r-gray-300 border-t-4 border-gray-100 hover:border-t-rose-500 '>Lên đời Laptop giá ưu đãi</li></button>
            <button><li className='w-32 h-12 mt-2 border-r-2 border-r-gray-300 border-t-4 border-gray-100 hover:border-t-rose-500 '>Lên đời Laptop giá ưu đãi</li></button>
            <button><li className='w-32 h-12 mt-2 border-r-2 border-r-gray-300 border-t-4 border-gray-100 hover:border-t-rose-500 '>Lên đời Laptop giá ưu đãi</li></button>
            <button><li className='w-32 h-12 mt-2  border-t-4 border-gray-100 hover:border-t-rose-500 '>Lên đời Laptop giá ưu đãi</li></button>

          </ul>
          <div className='w-full mt-2 h-8 bg-[#4eac4b] grid grid-cols-3 gap-4 text-lg text-white items-center '>
            <button>Sản phẩm mới</button>
            <button>Sản phẩm khuyến mãi</button>
            <button>Sản phẩm bán chạy</button>
          </div>
          <div className='grid grid-cols-4 gap-x-4 mt-2'>
            <div className='bg-gray-100 h-auto w-auto p-2 shadow-xl'>
              <div>
                <img src='https://laptop2.webdaitin.net/wp-content/uploads/2020/08/ASUS-TUF-Gaming-FX705DT-510x510-1-247x296.jpg'></img>
              </div>
              <a href='#'><div className='mt-12 hover:text-rose-500'>
                ASUS TUF Gaming FX705DT-H7138T Gaming
              </div></a>
              <div className='font-bold text-red-600 items-center mt-3'>
                42.600.000₫
              </div>
            </div>
            <div className='bg-gray-100 h-auto w-auto p-2 shadow-xl'>
              <div>
                <img src='https://laptop2.webdaitin.net/wp-content/uploads/2020/08/ASUS-TUF-Gaming-FX705DT-510x510-1-247x296.jpg'></img>
              </div>
              <a href='#'><div className='mt-12 hover:text-rose-500'>
                LG Gram 14ZD90N-V.AX55A5 Laptop - Silver
              </div></a>
              <div className='font-bold text-red-600 items-center mt-3'>
              29.600.000₫
              </div>
            </div>
            <div className='bg-gray-100 h-auto w-auto p-2 shadow-xl'>
              <div>
                <img src='https://laptop2.webdaitin.net/wp-content/uploads/2020/08/ASUS-TUF-Gaming-FX705DT-510x510-1-247x296.jpg'></img>
              </div>
              <a href='#'><div className='mt-12 hover:text-rose-500'>
                ASUS ROG Zephyrus M GU502GU-AZ090T
              </div></a>
              <div className='font-bold text-red-600 items-center mt-3'>
              34.600.000₫
              </div>
            </div>
            <div className='bg-gray-100 h-auto w-auto p-2 shadow-xl'>
              <div>
                <img src='https://laptop2.webdaitin.net/wp-content/uploads/2020/08/ASUS-TUF-Gaming-FX705DT-510x510-1-247x296.jpg'></img>
              </div>
              <a href='#'><div className='mt-12 hover:text-rose-500'>
                Acer Swift 7 SF714-52T-7134 Laptop - Black
              </div></a>
              <div className='font-bold text-red-600 items-center mt-3'>
              49.600.000₫
              </div>
            </div>
          </div>

        </div>
        <div className='col-span-1 mr-24'>
          <div>
            <div className='w-20 h-10 p-2 text-white bg-[#4eac4b]'>
              TIN TỨC

            </div>
            <div className='h-1 w-f bg-[#4eac4b]'></div>
          </div>
          <div>
            <a href='#'><div className='grid grid-cols-4 gap-x-20 mt-2 pb-4 border-b-2 border-gray-400'>
              <div className='col-span-1 w-24 h-12'><img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/photo1536787648594-15367876485951618993598-300x188.jpg"></img></div>
              <div className='col-span-3 text-sm text-start hover:text-rose-500 '>	Giá iPhone XS và iPhone XR tại VN được tiết lộ: Thấp nhất 22 triệu, cao nhất 43 triệu, bán cuối tháng 10</div>

            </div></a>
            <a href='#'><div className='grid grid-cols-4 gap-x-20 mt-2 pb-4 border-b-2 border-gray-400'>
              <div className='col-span-1 w-24 h-12'><img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/iphone-x-plus-768x507-1.jpg"></img></div>
              <div className='col-span-3 text-sm text-start hover:text-rose-500 '>	Cận cảnh iPhone X Plus sắp ra mắt có 3 camera sau “đẹp không thể kìm lòng”</div>

            </div></a>
            <a href='#'><div className='grid grid-cols-4 gap-x-20 mt-2 pb-4 border-b-2 border-gray-400'>
              <div className='col-span-1 w-24 h-12'><img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/photo1536787648594-15367876485951618993598-300x188.jpg"></img></div>
              <div className='col-span-3 text-sm text-start hover:text-rose-500'>Cách khắc phục lỗi iPhone bị nóng, văng ứng dụng và tự động khóa màn hình!</div>

            </div></a>
          </div>
          <div>
            <img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/398x366_Laptop_Dell.jpg"></img>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Content