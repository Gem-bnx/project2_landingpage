import React from "react";

function Process({ Stages }) {
  return (
    <section id="process-block">
      <div className="container">
      <div className="process__intro">
        <h2 className="process-intro__heading">Kalite ve Süreç Yönetimi</h2>
        <p className="process-intro__desc">
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
          farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </p>
      </div>
      <Stages></Stages>
    </div>
    </section>
  );
}

export default Process;
