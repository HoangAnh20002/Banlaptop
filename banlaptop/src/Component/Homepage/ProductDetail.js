import React, { useState } from 'react'
import Header from './Header'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
function ProductDetail() {
  const [check, setCheck] = useState(false)
  const { id } = useParams();
  const sanpham = useSelector((state) => state.product)
  const { product } = sanpham
  const temptData = product.find(p => p.id == id);
  const handleCheckboxChange = () => {
    setCheck(!check);
  };
  return (
    <div>
      <Header />
      <div className='grid grid-cols-3 gap-8 mx-20 my-12'>
        <div className='grid-col-1 h-76 w-72 border-2 border-gray-300 rounded-sm shadow-md mx-auto '>
          <img src={temptData.img}></img>

        </div>
        <div className='text-start grid-cols-1'>
          <Link to="/#"><div className='text-bold text-lg'>Trang chủ</div></Link>
          <div className='text-2xl font-bold mt-3'>
            {temptData.name}
          </div>
          <div className='text-2xl font-bold text-red-500 mt-2'>
            {temptData.price}
          </div>
          <div>
            <div>
              <div className='grid grid-cols-2 gap-4 mt-5'>
                <label style={{ padding: '8px 16px', borderWidth: '3px' }} className={!check ? 'border-2 border-gray-400 rounded-sm px-4 p-2 bg-yellow-200 isures-option active' : " isures-option "} onClick={handleCheckboxChange}>
                  <span className='option-child relative'>Core i5 / Ram 8GB / SSD 128GB </span>

                  <div className='text-red-500 font-bold'>39.600.000 đ</div>
                </label>
                <label style={{ padding: '8px 16px', borderWidth: '3px' }} className={check ? 'border-2 border-gray-400 rounded-sm px-4 py-2 bg-yellow-200 isures-option active' : " isures-option "} onClick={handleCheckboxChange}>
                  <div>
                    <label>Core i5 / Ram 16GB / SSD 256GB </label>
                    <div className='text-red-500 font-bold'>39.600.000 đ</div>
                  </div>
                </label>
              </div>

            </div>

            <div className='mt-5 text-sm'>
              <span  className={!check ? "" : "hidden"}>
                Mainboard: HP Chipset Q87 - 4 Khe Ram
                CPU: Intel® Xeon® Processor Core I5
                Tản Nhiệt Khí: HP 800 G1 Tiêu Chuẩn
                RAM: 8GB DDR3 1600Mhz
                Ổ cứng: SSD 128G + HDD 1TB NEW
                Card đồ họa: NVIDIA Geforce GTX 1650 4G DDR5 128bit 896 CUDA Core</span>
              <span className={check ? "" : "hidden"}>
                Mainboard: HP Chipset Q87 - 4 Khe Ram
                CPU: Intel® Xeon® Processor Core I7
                Tản Nhiệt Khí: HP 800 G1 Tiêu Chuẩn
                RAM: 16GB DDR3 1600Mhz
                Ổ cứng: SSD 256G + HDD 1TB NEW
                Card đồ họa: NVIDIA Geforce GTX 1650 4G DDR5 128bit 896 CUDA Core</span>
            </div>
          </div>
        </div>
        <div className='grid-cols-1'>
          <div className='text-2xl text-pink-500 texxt-bold'>Danh sách cửa hàng</div>
          <div>
            <div className='w-fit px-5 py-2 flex border-2 border-gray-300 mt-3'>
              <div className='text-center m-2 text-3xl'>
              <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className='text-start ml-3'>
                <div className='text-bold'>Chi nhánh 1</div>
                <div>196 Hoàng Diệu - Hà Nội</div>
              </div>
            </div>
            <div className='w-fit px-5 py-2 flex border-2 border-gray-300 mt-3'>
              <div className='text-center m-2 text-3xl'>
              <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className='text-start ml-3'>
                <div className='text-bold'>Chi nhánh 1</div>
                <div>196 Hoàng Diệu - Hà Nội</div>
              </div>
            </div><div className='w-fit px-5 py-2 flex border-2 border-gray-300 mt-3'>
              <div className='text-center m-2 text-3xl'>
              <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className='text-start ml-3'>
                <div className='text-bold'>Chi nhánh 1</div>
                <div>196 Hoàng Diệu - Hà Nội</div>
              </div>
            </div><div className='w-fit px-5 py-2 flex border-2 border-gray-300 mt-3'>
              <div className='text-center m-2 text-3xl'>
              <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className='text-start ml-3'>
                <div className='text-bold'>Chi nhánh 1</div>
                <div>196 Hoàng Diệu - Hà Nội</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail