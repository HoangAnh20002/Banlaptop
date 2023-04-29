import React from 'react'
import Header from '../Homepage/Header'
import Newproduct from './Newproduct'
import Footer from '../Homepage/Footer'

function Contact() {
    return (
        <div>
            <Header />
            <div className='grid grid-cols-4 m-8 gap-20'>
                <div className='col-span-3 text-start'>
                    <div className=' text-2xl font-bold'>
                        Liên hệ
                    </div>
                    <div className='font-bold text-xl mt-4'>
                        Giải pháp phần mềm đóng gói
                    </div>
                    <div className='mt-4'>
                        Passport2IT SME ERP là phần mềm chuyên về quản lý doanh nghiệp và Passport2IT POS là phần mềm chuyên về quản lý cửa hàng – chuỗi cửa hàng là 2 sản phẩm đóng gói được phát triển bởi CIIBOS-VN. Các sản phẩm này được nghiên cứu, thiết kế và phát triển dựa trên chuẩn mực của nhà nước, đáp ứng các yêu cầu khác nhau của khách hàng và được kế thừa một nền tảng công nghệ tiên tiến, các quy trình chặt chẽ trong việc vận hành và quản lý từ các nước phát triển.
                    </div>
                    <div  className='font-bold text-xl mt-4'>
                        Chỉnh sửa, bổ sung theo yêu cầu của khách hàng
                    </div>
                    <div className='mt-4'>
                        Nhằm đáp ứng nhu cầu mở rộng của khách hàng, CIIBOS-VN nhận gia công, mở rộng thêm các chức năng theo đặc thù từng doanh nghiệp trên chính sản phẩm của mình.
                    </div>
                    <div  className='font-bold text-xl mt-4'>
                        Tư vấn giải pháp và gia công phần mềm
                    </div>
                    <div className='mt-4'>
                        Với đội ngũ nhân sự có chuyên môn  nghiệp vụ sâu trên các lĩnh vực: phần mềm quản lý cảng biển, logistics, tài chính – kế toán, ERP, Data mining, Business Intelligent…, và lập trình viên cứng về kĩ thuật  thì CIIBOS-VN hiện là đối tác triển khai của RBS Australia và Cargo WiseOne Australia trong việc tìm kiếm khách hàng và triển khai các giải pháp quản lý cảng biển, quản lý logistics chuyên nghiệp tại thị trường Việt Nam
                    </div>
                </div>
                <div>
                   <Newproduct /> 
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact