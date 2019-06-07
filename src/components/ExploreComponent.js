import React from 'react';

class ExploreComponent extends React.Component {
    render() {
        return (
            <div className="app-explore-component">
                <div className="app-container">
                    <div className="row row1">
                        <h2>Khám phá</h2>
                        <h3>Nơi công năng "chạm" xu hướng</h3>
                        <p>Lan toả sự dễ chịu, thanh thoát, các đại sảnh với thiết kế trần cao thoáng đãng, mang tông màu nền nã đan xen là chất liệu gỗ ấm áp kết hợp các chuỗi hạt ánh sáng lấp lánh, tất cả được khai triển tự do và xem trọng công năng biến hóa tùy ý.</p>
                    </div>
                    {/* <div className="row row2">
                        <div className="col-md-4 col1">
                            <img className="" src="images/Saltus.jpg"></img>
                        </div>
                        <div className="col-md-4 col2">
                            <img className="" src="images/Sol.jpg"></img>
                        </div>
                        <div className="col-md-4 col3">
                            <img className="" src="images/CastorHome.jpg"></img>
                        </div>
                    </div> */}
                    <div className="row row3">
                        <button>Khám phá</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExploreComponent;