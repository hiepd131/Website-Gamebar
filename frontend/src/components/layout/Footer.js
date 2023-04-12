import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        {/* Footer Top */}
        <br/>
        <div className="footer-top section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer about">
                  <div className="logo">
                    <a href="index.html"><img src="/images/logo.png" alt="#" /></a>
                  </div>
                  <p className="text">Website Game Bar, Diễn đàn hàng đầu về game và công nghệ, Luôn luôn cập nhật thông tin mới nhất.</p>
                  <p className="text">Cần hỗ trợ liên hệ với chúng tôi: <span><a href="tel:123456789">+0123 456 789</a></span></p>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer links">
                  <h4>Thông tin</h4>
                  <ul>
                    <li><Link to=''>Về chúng tôi</Link></li>
                    <li><Link to=''>Điều khoản và điều kiện</Link></li>
                    <li><Link to=''>Liên hệ với chúng tôi</Link></li>
                    <li><Link to=''>Giúp đỡ</Link></li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer links">
                  <h4>Dịch vụ & Điều Khoản</h4>
                  <ul>
                    <li><Link to=''>Phương thức thanh toán</Link></li>
                    <li><Link to=''>Hoàn tiền</Link></li>
                    <li><Link to=''>Giao hàng</Link></li>
                    <li><Link to=''>Điều khoản và bảo mật</Link></li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer social">
                  <h4>Thông tin</h4>
                  {/* Single Widget */}
                  <div className="contact">
                    <ul>
                      <li>Số 179, Quốc Lộ 13, Phường 26, Quận Bình Thạnh, TP.HCM</li>
                      <li>Website Game Bar - HQHH</li>
                      <li><a href='mailto:duonghiep131@gmail.com'> duonghiep131@gmail.com</a></li>
                      <li>+012 3456 7890</li>
                    </ul>
                  </div>
                  {/* End Single Widget */}
                  <ul>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Top */}
      </footer>
    </Fragment>
  )
}

export default Footer
