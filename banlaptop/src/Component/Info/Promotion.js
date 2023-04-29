import React from 'react'
import Header from '../Homepage/Header'
import Footer from '../Homepage/Footer'
import { Link } from 'react-router-dom'
import Newproduct from './Newproduct'

function Promotion() {
    return (
        <div>
            <Header />
            <div className=' m-12 grid grid-cols-4 gap-8'>
                <div className='col-span-3'>
                <div className=''>
                    <div className='w-fit h-10 p-2 text-white bg-[#4eac4b]'>
                        Khuyến Mãi
                    </div>
                    <div className='h-[2px] w-full bg-[#4eac4b] '></div>
                </div>
                <div>
                <div className='grid grid-cols-4 max-[767px]:grid-cols-1 gap-20 mt-5 pb-4  border-2 shadow-2xl border-gray-400'>
                        <div className='col-span-1 w-fit h-fit'><img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/iphone-x-plus-768x507-1.jpg"></img></div>
                        <div className='col-span-3 my-auto'>
                            <Link to='#'><div className='text-start font-bold hover:text-rose-500'>Cận cảnh iPhone X Plus sắp ra mắt có 3 camera sau “đẹp không thể kìm lòng” </div> </Link>
                            <div className='text-start'>Dựa trên những thông tin rò rỉ gần đây, trang LetsGoDigital dựng một bản concept chi tiết, có độ chân thực cao về hình ảnh của chiếc iPhone X Plus với cụm camera ba ống kính. Trung tuần tháng 6/2018, ...</div>
                        </div>
                    </div>
                   
                    
                    <div className='grid grid-cols-4 max-[767px]:grid-cols-1 gap-20 mt-5 pb-4  border-2 shadow-2xl border-gray-400'>
                        <div className='col-span-1 w-fit h-fit'><img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/iphone-x-plus-768x507-1.jpg"></img></div>
                        <div className='col-span-3 my-auto'>
                            <Link to='#'><div className='text-start font-bold hover:text-rose-500'>Cận cảnh iPhone X Plus sắp ra mắt có 3 camera sau “đẹp không thể kìm lòng” </div> </Link>
                            <div className='text-start'>Dựa trên những thông tin rò rỉ gần đây, trang LetsGoDigital dựng một bản concept chi tiết, có độ chân thực cao về hình ảnh của chiếc iPhone X Plus với cụm camera ba ống kính. Trung tuần tháng 6/2018, ...</div>
                        </div>
                    </div>
                   
                    <div className='grid grid-cols-4 max-[767px]:grid-cols-1 gap-20 mt-5 pb-4  border-2 shadow-2xl border-gray-400'>
                        <div className='col-span-1 w-fit h-fit'><img src="https://laptop2.webdaitin.net/wp-content/uploads/2020/08/iphone-x-plus-768x507-1.jpg"></img></div>
                        <div className='col-span-3 my-auto'>
                            <Link to='#'><div className='text-start font-bold hover:text-rose-500'>Cận cảnh iPhone X Plus sắp ra mắt có 3 camera sau “đẹp không thể kìm lòng” </div> </Link>
                            <div className='text-start'>Dựa trên những thông tin rò rỉ gần đây, trang LetsGoDigital dựng một bản concept chi tiết, có độ chân thực cao về hình ảnh của chiếc iPhone X Plus với cụm camera ba ống kính. Trung tuần tháng 6/2018, ...</div>
                        </div>
                    </div>
                   
                </div>
                </div>
                <div className='col-span-1'>
                    <Newproduct />
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default Promotion