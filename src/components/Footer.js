import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row footer__upper">
          <div className="col col1">
            <div className="footer-col__title">Çözüm ve Hizmetler</div>
            <div>Yazılım Geliştirme</div>
            <div>Outsourcing</div>
            <div>Kalite ve Süreç Yönetimi</div>
            <div>Danışmanlık</div>
            <div>IoT Destekli Çözümler</div>
          </div>
          <div className="col col2">
            <div className="footer-col__title">Ürünler</div>
            <div>Eğitim Yönetim Sistemi</div>
            <div>İnsan Sermayesi Yönetim Sistemi</div>
            <div>Müşteri İlişkileri Yönetim Sistemi</div>
            <div>İçerik Yönetim Sistemi</div>
          </div>
          <div className="col col3">
            <div className="footer-col__title">Kurumsal</div>
            <div>Hakkımızda</div>
            <div>Belge ve Yetkinlikler</div>
            <div>İş Ortakları</div>
          </div>
          <div className="col col4">
            <div className="footer-col__title">İletişim</div>
            <div>Bilgi İstek Formu</div>
            <div>Uzman Talep Formu</div>
          </div>
        </div>
        <div className="row footer__lower">
          <div className="copyright">© Copyright 2010-2021 - Can Çevik</div>
          <div className="social">
            <a className="social__logo">
              <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677785481/project2/SocialIcon/MediumLogo_ipy1qe.svg"></img>
            </a>
            <a className="social__logo">
              <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677785475/project2/SocialIcon/LinkedinLogo_edtpf1.svg"></img>
            </a>
            <a className="social__logo">
              <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677785481/project2/SocialIcon/TwitterLogo_sgzxza.svg"></img>
            </a>
            <a className="social__logo">
              <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677785475/project2/SocialIcon/InstagramLogo_pnhjre.svg"></img>
            </a>
            <a className="social__logo">
              <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677785473/project2/SocialIcon/FacebookLogo_tuzeto.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
