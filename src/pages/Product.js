import React from "react";

function Product() {
  const productList = [
    {
      illus:
        "https://res.cloudinary.com/diowgvamj/image/upload/v1677785477/project2/Illustration1_b3382k.svg",
      name: "Kalite ve Süreç Yönetimi",
      desc: "Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.",
    },
    {
      illus:
        "https://res.cloudinary.com/diowgvamj/image/upload/v1677785475/project2/Illustration2_avijp5.svg",
      name: "Test Yönetimi ve Analizi",
      desc: "Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi sunmaktadır.",
    },
  ];
  return (
    <section id="product-block">
      <div className="products">
        <div className="container">
            {productList.map((product, i) => {
            return (
                <div className={(i%2==0) ? "product product--ill-righted" : "product product--ill-lefted"}>
                <img className="product__illus" src={product.illus}></img>
                <div className="product__info">
                    <h1 className="product__name">{product.name}</h1>
                    <p className="product__desc">{product.desc}</p>
                    <button className="view-btn">Keşfet</button>
                </div>
                </div>
            );
            })}
        </div>
      </div>
    </section>
  );
}

export default Product;
