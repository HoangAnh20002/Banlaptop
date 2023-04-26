import React from 'react'

function Header() {
    return (
        <div>
            <div className='container flex justify-between'>
                <div className='col-lg-3 mt-6 ml-12'>
                    <img className='h-12' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/logo.png">
                    </img>
                </div>
                <div className='col-lg-3 pt-6 pl-8' style={{ width: '400px' }}>
                    <div>
                        <input className="h-10 w-22 pl-2 border-solid border-2 rounded-full text-sm focus:outline-none focus:bg-white focus:text-gray-900"
                            type="search" placeholder="Nhập sản phẩm cần tìm ..." style={{ width: '250px' }}></input>
                        <button className='h-12 w-28 border-solid border-2 bg-[#4eac4b] rounded-full  '>Tìm kiếm</button>
                    </div>
                    <div className='flex  justify-between mt-2'>
                        <div className=' w-18 col-lg-3'>
                            <img className='h-12 w-12' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/sieu-thi-dien-thoai-chinh-hang.png"></img>
                            <div>Sản Phẩm Chính Hãng</div>
                        </div>
                        <div className=' w-18 col-lg-3'>
                            <img className='h-12 w-12' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/vận-chuyển-toàn-quốc.png"></img>
                            <div>Miễn Phí Vận Chuyển</div>
                        </div>
                        <div className=' w-18 col-lg-3'>
                            <img className='h-12 w-12' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/s%E1%BB%ADa-ch%E1%BB%AFa.png"></img>
                            <div>Sửa Chữa Miễn Phí</div>
                        </div>
                        <div className=' w-18 col-lg-3'>
                            <img className='h-12 w-12' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/linh-kien-chinh-hang.png"></img>
                            <div>Hỗ Trợ Trả Góp</div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 pt-6 pl-8'>
                    <div className='text-xl text-left'>
                        Gọi ngay để nhận ưu đãi
                    </div>
                    <div className='text-2xl font-bold text-left font-mono'>0123456789</div>
                    <div className='text-xl text-left'>
                        Gọi ngay để nhận ưu đãi
                    </div>
                    <div className='text-2xl font-bold text-left font-mono'>0123456789</div>
                </div>
                <div className='col-lg-3 pt-6 pl-8'>
                    <div className='flex bg-[#4eac4b] text-white'>
                        <a href='#'>Giới thiệu </a>|
                        <a href='#'>Khuyến mãi</a>|
                        <a href='#'>Liên hệ </a>
                    </div>
                    <div className='flex justify-around mt-2'>
                        <a href='#' className='text-2xl'><i class="fa-brands fa-facebook"></i></a>
                        <a href='#' className='text-2xl'><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" className='text-2xl'><i class="fa-brands fa-youtube"></i></a>
                    </div>
                    <div className='flex justify-center bg-[#4eac4b] h-8 w-32 rounded ml-6 mt-2'>
                        <div><i class="fa-regular fa-clock"></i></div>
                        <div><p className='text-white pl-1'>8h30-17h30</p></div>
                    </div>

                </div>
            </div>
            <div className='mt-2'>
                <ul className='grid grid-cols-8 h-10 w-full pl-16 pr-16 text-lg bg-[#4eac4b] text-white justify-center items-center'>

                    <li className='w-32 mr-4 border-r-2 border-white flex justify-around'>
                        <div><i class='fa fa-home' /></div>
                        <div className=''>Trang chủ</div>
                    </li>
                    <li className='w-32 mr-4 border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-laptop" /></div>
                        <div className=''>Laptop Acer</div>
                    </li>
                    <li className='w-32 mr-4 border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-laptop" /></div>
                        <div className=''>Laptop Asus</div>
                    </li>
                    <li className='w-32 mr-4 border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-laptop" /></div>
                        <div className=''>Laptop Dell</div>
                    </li>
                    <li className='w-32 mr-4 border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-laptop" /></div>
                        <div className=''>Laptop HP</div>
                    </li>
                    <li className='w-32 mr-4 border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-shopping-bag" /></div>
                        <div className=''>Khuyến mãi</div>
                    </li>
                    <li className='w-32 mr-4 border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-list-alt" /></div>
                        <div className=''>Tin tức</div>
                    </li>
                    <li className='w-32 mr-4 border-r-2 border-white flex justify-around'>
                        <div><i class="fa-regular fa-address-book"></i></div>
                        <div className=''>Liên hệ</div>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default Header