import React, { useState } from 'react'
import Header from './Header'
import { Link, useParams } from 'react-router-dom'
import "./main.css"
import { useSelector } from 'react-redux'
function ProductDetail() {
  const [check, setCheck] = useState(false)
  const { id } = useParams();

  const sanpham = useSelector((state) => state.product)
  const { product } = sanpham

  const temptData = product.find(p => p.id === 1);
  console.log(temptData)
  const handleCheckboxChange = () => {
    setCheck(!check);
  };
  return (
    <div>
      <Header />
      <div className='grid grid-cols-3 gap-8 mx-20 my-12'>
        <div className='grid-col-1 h-56 w-48 border-2 border-gray-500 rounded-sm shadow-md mx-auto '>
          <img src={temptData.img}></img>

        </div>
        <div className='text-start grid-cols-1'>
          <Link to="/#"><div>Trang chủ</div></Link>
          <div className='text-2xl font-bold mt-3'>
            {temptData.name}
          </div>
          <div className='text-2xl font-bold text-red-500 mt-2'>
            {temptData.price}
          </div>
          <div>
            <div>
              <div className='grid grid-cols-2 gap-4 mt-5'>
                <label className={!check ? 'border-2 border-gray-400 rounded-sm px-4 p-2 bg-yellow-200 isures-option active' : " isures-option "} onClick={handleCheckboxChange}>
                  <span className='option-child relative'>Core i5 / Ram 8GB / SSD 128GB </span>

                  <div className='text-red-500 font-bold'>39.600.000 đ</div>
                </label>
                <label className={check ? 'border-2 border-gray-400 rounded-sm px-4 py-2 bg-yellow-200 isures-option active' : " isures-option "} onClick={handleCheckboxChange}>
                  <div>
                    <label>Core i5 / Ram 16GB / SSD 256GB </label>
                    <div className='text-red-500 font-bold'>39.600.000 đ</div>
                  </div>
                </label>
                {/* <fieldset>

                <label className=' bg-yellow-500'>
                  <input id="draft" class="peer/draft" type="radio" name="status" checked />
                  <button for="draft" className='px-7 py-2 peer-checked/draft:bg-yellow-200' onClick={handleCheckboxChange}>
                    <div>
                      <label >Core i5 / Ram 8GB / SSD 128GB </label>
                    </div>
                    <span className='text-red-500 font-bold'>39.600.000 đ</span>
                  </button>
                  <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>

                </label>
                <input id="published" class="peer/published" type="radio" name="status" />
                <label for="published" class="peer-c/published:text-sky-500">Published</label>

                <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
              </fieldset> */}
                {/* <fieldset>
                <legend>Published status</legend>

                <input id="draft" class="peer/draft" type="radio" name="status" checked />
                <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>

                <input id="published" class="peer/published" type="radio" name="status" />
                <label for="published" class="peer-checked/published:text-sky-500">Published</label>

                <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
                <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
              </fieldset> */}
                {/* <div className='grid grid-cols-2 gap-8'>
              <button className='px-7 py-2 bg-yellow-200'>
                <div>
                  <input id="draft" class="peer/draft" type="radio" name="status" checked />
                  <label for="draft" class="peer-checked/draft:text-sky-800">Core i5 / Ram 8GB / SSD 128GB </label>
                </div>
                <span className='text-red-500 font-bold'>39.600.000 đ</span>
              </button>
              <button className='px-7 py-2 bg-yellow-200'>
                <div>
                  <input id="published" class="peer/published" type="radio" name="status" />
                  <label for="published" class="peer-checked/published:text-sky-800">Core i5 / Ram 16GB / SSD 256GB </label>
                  <span className='text-red-500 font-bold'>39.600.000 đ</span>
                </div>
              </button>
               <div class="hidden peer-checked/draft:block">
                Mainboard: HP Chipset Q87 - 4 Khe Ram
                CPU: Intel® Xeon® Processor Core I5
                Tản Nhiệt Khí: HP 800 G1 Tiêu Chuẩn
                RAM: 8GB DDR3 800Mhz
                Ổ cứng: SSD 128G + HDD 1TB NEW
                Card đồ họa: NVIDIA Geforce GTX 1650 4G DDR5 128bit 896 CUDA Core
                </div>
              <div class="hidden peer-checked/published:block">
                Mainboard: HP Chipset Q87 - 4 Khe Ram
                CPU: Intel® Xeon® Processor Core I7
                Tản Nhiệt Khí: HP 1600 G1 Tiêu Chuẩn
                RAM: 16GB DDR3 1600Mhz
                Ổ cứng: SSD 256G + HDD 1TB NEW
                Card đồ họa: NVIDIA Geforce GTX 1650 4G DDR5 128bit 896 CUDA Core
              </div>
              </div> */}

              </div>

            </div>

            <div>
              <span className={!check?"":"hidden"}>Hello</span>
              <span className={check?"":"hidden"}>Hello2</span>
            </div>
          </div>

        </div>
        <div className='grid-cols-1'>
          hello

        </div>
      </div>
    </div>
  )
}

export default ProductDetail