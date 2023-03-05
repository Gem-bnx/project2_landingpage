import React from "react";

function Company() {
  return (
    <section id="company-block">
      <div className="container">
        <div className="company__intro">
          <h2 className="company-intro__heading">Referanslarımız</h2>
          <p className="company-intro__desc">
            Bize güvenen ve beraber çalıştığımız iş ortaklarımız
          </p>
        </div>
      </div>
      <div className="companies__logo">
          <div className="col company__logo--col1">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677819887/project2/Company/com1_i9urqq.svg"></img>
          </div>
          <div className="col company__logo--col2">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677819887/project2/Company/com2_azcmxx.svg"></img>
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677819887/project2/Company/com3_bqywlh.svg"></img>
          </div>
          <div className="col company__logo--col3">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677819887/project2/Company/com4_lqptpg.svg"></img>
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677819888/project2/Company/com5_iydlcl.svg"></img>
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677819887/project2/Company/com6_zeuv2h.svg"></img>
          </div>
          <div className="col company__logo--col4">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677819889/project2/Company/com7_shcpf1.svg"></img>
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677819889/project2/Company/com8_xkdoe4.svg"></img>
          </div>
          <div className="col company__logo--col5">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677819889/project2/Company/com9_z2c7g9.svg"></img>
          </div>
        </div>
    </section>
  );
}

export default Company;
