import React from "react";

function Stages() {
  const stageList = [
    {
      icon: "https://res.cloudinary.com/diowgvamj/image/upload/v1677805493/project2/stage/File_sy7mlz.svg",
      name: "Döküman Analizi",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      icon: "https://res.cloudinary.com/diowgvamj/image/upload/v1677805493/project2/stage/Star_oxfafj.svg",
      name: "Kabul ve Değerlendirme",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      icon: "https://res.cloudinary.com/diowgvamj/image/upload/v1677805562/project2/stage/Crown_jlrryo.svg",
      name: "İş Kuralları Analizi",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      icon: "https://res.cloudinary.com/diowgvamj/image/upload/v1677805493/project2/stage/ChartBar_ntiabq.svg",
      name: "Akış Diyagramları",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      icon: "https://res.cloudinary.com/diowgvamj/image/upload/v1677805493/project2/stage/ChartPieSlice_wnommx.svg",
      name: "Paydaş Analizi",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      icon: "https://res.cloudinary.com/diowgvamj/image/upload/v1677805553/project2/stage/LogoFigma_cs2mtb.svg",
      name: "Prototipleme",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
  ];
  return <div className="stages">
    {/* <div className="stages-inner"> */}
        {stageList.map((stage, index) => {
            return(
                <div className="stage">
                    <img className="stage__icon" src={stage.icon}></img>
                    <h4 className="stage__name">{stage.name}</h4>
                    <p className="stage__desc">{stage.desc}</p>
                </div>
            );
        })}
    {/* </div> */}
  </div>;
}

export default Stages;
