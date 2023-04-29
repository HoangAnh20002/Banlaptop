import React from 'react'

function Footer() {
    return (
        <div>
            <div className='grid grid-cols-5 gap-x-12 max-[767px]:grid-cols-2 max-[639px]:grid-cols-1 text-white bg-gray-700 mt-8 pb-8'>
                <div className='col-span-2 max-[767px]:col-span-1  mt-8 items-center'>
                    <div className='text-2xl font-bold ml-4'>
                        Apple Center Iphone Hà Nội
                    </div>
                    <div className=' flex justify-around mt-6 ml-20 max-[639px]:ml-2 w-fit items-center'>
                        <i class="fa fa-home"></i>
                        <div className='ml-2'>Cơ Sở 1: 1 Hà Nội- Hà Nội </div>
                    </div>
                    <div className=' flex justify-around mt-6 ml-20 max-[639px]:ml-2 w-fit items-center'>
                        <i class="fa fa-home"></i>
                        <div className='ml-2'>Cơ Sở 2: 2 Hà Nội- Hà Nội </div>
                    </div>
                    <div className=' flex justify-around mt-6 ml-20 max-[639px]:ml-2 w-fit items-center'>
                        <i class="fa fa-phone"></i>
                        <div className='ml-2'> Hotline:0123456789 - 123456789  Mr. Anh</div>
                    </div>
                    <div className=' flex justify-around mt-6 ml-20 max-[639px]:ml-2 w-fit items-center'>
                        <i class="fa-regular fa-envelope"></i>
                        <div className='ml-2'>Email : hoanganh@gmail.com </div>
                    </div>
                    <div className=' flex justify-around mt-6 ml-20 max-[639px]:ml-2 w-fit items-center'>
                        <i class="fa-brands fa-facebook"></i>
                        <div className='ml-2'>Facebook : fb.com/hoanganh </div>
                    </div>

                </div>
                <div className='col-span-1 mt-8 text-start'>
                    <div className='text-2xl font-bold '>
                        Chính sách
                    </div>
                    <div className='w-full pb-2 mt-6 border-b-2 border-gray-200'>
                        Chính sách đổi trả hàng
                    </div>
                    <div className='w-full pb-2 mt-6 border-b-2 border-gray-200'>
                        Chính sách bảo hành
                    </div>
                    <div className='w-full pb-2 mt-6 border-b-2 border-gray-200'>
                        Hướng dẫn mua hàng
                    </div>
                    <div className='w-full pb-2 mt-6'>
                        Chính sách đại lý
                    </div>
                </div>
                <div className='col-span-2 max-[767px]:ml-10'>
                    <div className='mt-8 text-start text-2xl'>
                        Fanpgage Facebook
                    </div>
                    <div className='h-44 mt-4 grid grid-cols-5' style={{ width:"80%", backgroundImage: "url('https://cdn.tgdd.vn/hoi-dap/657586/cach-chinh-sua-loi-rat-tiec-da-xay-ra-loi-tren-fb-12-1-800x435.jpg')" }}>
                        <div className='h-16 w-16 border bg-black border-gray-100 mt-4 ml-8  col-span-2'>
                            <img src="https://www.facebook.com/images/fb_icon_325x325.png"></img>
                        </div>
                        <div className='col-span-3 text-start mt-8 ml-2 '>
                            <a className='font-bold hover:underline' href='https://www.facebook.com/facebook'>Apple Center Iphone Hà Nội</a>
                            <p>100k người theo dõi</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer