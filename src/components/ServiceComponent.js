import React from 'react';

class ServiceComponent extends React.Component {
    render() {
        return (
            <div className="app-service-component">
                <div className="app-container">
                    <div className="row app-service-row">
                        <h2>Dịch vụ</h2>
                        <h3>Tổ chức sự kiện</h3>
                    </div>

                    <div className="row app-individual-row">
                        <div className="col-md-6 service-item-image">
                            <img src="images/individual-event.jpg"></img>
                        </div>
                        <div class="col-md-6 app-service-col">
                            <h4>Sự kiện cá nhân</h4>
                            <p>Một không gian cưới bài trí sang trọng với những gam màu theo xu hướng hiện đại bên cạnh những màn trình diễn độc đáo cùng thực đơn tiệc cưới tinh tế đến từng hương vị, tiệc cưới trọn gói mà chúng tôi mang lại cho bạn không những đảm bảo ngân sách hợp lý mà còn đem lại sự rung cảm mộc mạc, tự do và lãng mạn nhưng không kém phần xuýt xoa từ các khách mời.</p>
                            <button>Liên hệ tư vấn</button>
                        </div>
                    </div>

                    <div className="row app-company-row">
                        <div className="col-md-6 app-service-col">
                            <h4>Sự kiện công ty</h4>
                            <p>Không gian nào cho những mới lạ để triển khai các ý tưởng sống động? Phá cách trong việc tạo nhiều điểm nhấn thẩm mỹ trong diện mạo mới, Gem Center với đại sảnh có quy mô hàng nghìn khách được bổ sung vào “top lựa chọn”  quy tụ tất cả các chuẩn mực thiết kế, đáp ứng công suất cao cho buổi triển lãm, trưng bày hay ra mắt sản phẩm “chất” hơn bao giờ hết!</p>
                            <button>Liên hệ tư vấn</button>
                        </div>
                        <div class="col-md-6 col-md-6 service-item-image">
                            <img src="images/company-event.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceComponent;