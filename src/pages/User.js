import React from "react";

function User() {
  return (
    <section id="user-block">
      <div className="container">
        <div className="user__symbol">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677785482/project2/Users_x8jvea.svg"></img>
            <div className="circle"></div>
        </div>
        <div className="user__intro">
          <h2 className="user-intro__heading">Bize Ulaşın</h2>
          <p className="user-intro__desc">
            Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle
            irtibata geçin.
          </p>
        </div>
        <button className="signin-btn">Bize Ulaşın</button>
      </div>
    </section>
  );
}

export default User;
