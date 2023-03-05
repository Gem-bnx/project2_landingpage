import React from "react";

function Banner() {
  return (
    <section id="banner-block">
      <div className="container">
        <div className="banner__intro">
          <div className="banner-intro__text">
            <h1 className="intro-text__heading">
              Bilgi Teknolojilerinde 23 Yıllık Tecrübe
            </h1>
            <p className="intro-text__desc">
              Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
              farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
              Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
            </p>
          </div>
          <div className="banner-intro__search">
            <input
              type="text"
              className="intro-search__input"
              placeholder="Mail bültenimize kayıt ol"
            ></input>
            <button className="intro-search__btn">Kayıt Ol</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
