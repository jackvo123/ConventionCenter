import React from 'react';

class ContentComponent extends React.Component {
    render() {
        return (
            <div className="app-content-component">
                <div className="app-container">
                    <div className="row app-slogan-row">
                        <p>Chỉ cần chia sẻ với chúng tôi ý tưởng của bạn, <br/> GEM Center sẽ tạo điều kiện thuận lợi nhất để mong muốn của bạn có thể <br/> trở thành hiện thực.</p> 
                    </div>
                    
                    <div className="row app-intro-row">
                        <div className="col-md-6 app-intro-image-col">
                                <img src="images/sanh1.jpg"></img>
                        </div>
                        <div class="col-md-6 app-intro-content-col">
                            <h2>Giới thiệu</h2>
                            <h3>Nơi tinh tế "chạm" cảm xúc</h3>
                            <p>GEM Center không ngừng nỗ lực mang đến cho khách hàng những trải nghiêm dịch vụ hoàn hảo. Từng chi tiết, dù là nhỏ nhất sẽ được chúng tôi chuẩn bị chu đáo, chăm chút tỉ mỉ. Các chuyên gia của chúng tôi sẽ cùng bạn xây dựng kế hoạch, tổ chức, trang trí và phục vụ yến tiệc để đảm bảo sự kiện của bạn sẽ được diễn ra thành công, ấn tượng và duy nhất như những gì bạn hình dung.</p>
                            <button>Khám phá</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentComponent;