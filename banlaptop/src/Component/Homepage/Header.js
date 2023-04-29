import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <img className='w-68 h-24 hidden mx-auto max-[1023px]:block max-[639px]:hidden  ' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/logo.png">
            </img>
            <div className='grid grid-cols-5 mx-auto gap-8 max-[639px]:hidden'>
                <div className='col-span-1 mt-6 ml-12 '>
                    <img className='w-full h-auto max-[1023px]:hidden  ' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/logo.png">
                    </img>
                </div>
                <div className='col-span-2 pt-6  w-fit '>
                    <div>
                        <input className="h-10 w-22 pl-2 border-solid border-2 rounded-full text-sm focus:outline-none focus:bg-white focus:text-gray-900"
                            type="search" placeholder="Nhập sản phẩm cần tìm ..." style={{ width: '70%' }}></input>
                        <button className='h-12 w-28 border-solid border-2 bg-[#4eac4b] rounded-full  '>Tìm kiếm</button>
                    </div>
                    <div className='flex text-lg justify-between mt-2'>
                        <div className=' w-18 col-lg-3'>
                            <img className='h-12 w-12 mx-auto' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/sieu-thi-dien-thoai-chinh-hang.png"></img>
                            <div>Sản Phẩm Chính Hãng</div>
                        </div>
                        <div className=' w-18 col-lg-3 '>
                            <img className='h-12 w-12 mx-auto' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/vận-chuyển-toàn-quốc.png"></img>
                            <div>Miễn Phí Vận Chuyển</div>
                        </div>
                        <div className=' w-18 col-lg-3 '>
                            <img className='h-12 w-12 mx-auto' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/s%E1%BB%ADa-ch%E1%BB%AFa.png"></img>
                            <div>Sửa Chữa Miễn Phí</div>
                        </div>
                        <div className=' w-18 col-lg-3'>
                            <img className='h-12 w-12 mx-auto' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/linh-kien-chinh-hang.png"></img>
                            <div>Hỗ Trợ Trả Góp</div>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 max-[767px]:hidden pt-6 '>
                    <div className='text-xl text-left'>
                        Gọi ngay để nhận ưu đãi
                    </div>
                    <div className='text-2xl font-bold text-left font-mono'>0123456789</div>
                    <div className='text-xl text-left'>
                        Gọi ngay để nhận ưu đãi
                    </div>
                    <div className='text-2xl font-bold text-left font-mono'>0123456789</div>
                </div>
                <div className='col-span-1 pt-6  w-fit'>
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
            {/* responsive */}
            <div>
                <nav class="bg-gray-200 sm:hidden">
                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div class="relative flex items-center justify-between h-16">
                            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button onClick={() => setIsShown(!isShown)} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span class="sr-only">Open main menu</span>
                                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <img className='h-12 ' src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/logo.png"></img>

                            </div>
                        </div>
                    </div>
                    {/* <!-- Mobile menu, toggle classes based on menu state --> */}
                    <div class={`sm:hidden ${isShown ? 'block' : 'hidden'}`} id="mobile-menu">
                        <div class="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" class="text-gray-800 hover:bg-[#4eac4b] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Trang chủ</a>
                            <a href="#" class="text-gray-800 hover:bg-[#4eac4b] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Laptop Acer</a>
                            <a href="#" class="text-gray-800 hover:bg-[#4eac4b] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Laptop HP</a>
                            <a href="#" class="text-gray-800 hover:bg-[#4eac4b] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Laptop Asus</a>
                            <a href="#" class="text-gray-800 hover:bg-[#4eac4b] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Laptop Dell</a>
                            <a href="#" class="text-gray-800 hover:bg-[#4eac4b] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Liên Hệ</a>
                            <a href="#" class="text-gray-800 hover:bg-[#4eac4b] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Khuyến mãi</a>
                            <a href="#" class="text-gray-800 hover:bg-[#4eac4b] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tin tức</a>
                            <a href="#" class="text-gray-800 hover:bg-[#4eac4b] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Đăng nhập</a>
                        </div>
                    </div>
                </nav>



            </div>
            <div className='mt-2'>
                <ul className='grid grid-cols-8 h-fit w-full pl-16 pr-16 text-lg bg-[#4eac4b] max-[639px]:hidden max-[1125px]:grid-cols-4 gap-4 text-white justify-center'>

                    <Link to='/'><li className='w-fit p-3 items-center border-r-2 border-white flex justify-around'>
                        <div><i class='fa fa-home' /></div>
                        <div className='ml-2'>Trang chủ</div>
                    </li></Link>
                    <Link  to='/LaptopAcer'><li className='w-fit p-3 items-center border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-laptop" /></div>
                        <div className='ml-2'>Laptop Acer</div>
                    </li></Link>
                    <Link to='/LaptopAsus'><li className='w-fit p-3 items-center border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-laptop" /></div>
                        <div className='ml-2'>Laptop Asus</div>
                    </li></Link>
                    <Link to='/LaptopDell'><li className='w-fit p-3 items-center border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-laptop" /></div>
                        <div className='ml-2'>Laptop Dell</div>
                    </li></Link>
                    <Link to='/LaptopHp'><li className='w-fit p-3 items-center border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-laptop" /></div>
                        <div className='ml-2'>Laptop HP</div>
                    </li></Link>
                    <Link to='/Promotion'><li className='w-fit p-3 items-center border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-shopping-bag" /></div>
                        <div className='ml-2'>Khuyến mãi</div>
                    </li></Link>
                    <Link to='/News'><li className='w-fit p-3 items-center border-r-2 border-white flex justify-around'>
                        <div><i class="fa fa-list-alt" /></div>
                        <div className='ml-2'>Tin tức</div>
                    </li></Link>
                    <Link to='/Contact'><li className='w-fit p-3 items-center border-r-2 border-white flex justify-around'>
                        <div><i class="fa-regular fa-address-book"></i></div>
                        <div className='ml-2'>Liên hệ</div>
                    </li></Link>
                </ul>
            </div>

        </div>

    )
}

export default Header