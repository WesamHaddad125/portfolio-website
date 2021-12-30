import "./testimonials.scss"
import { useState } from "react";

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Luan Nguyen",
          title: "Assistant Professor",
          img:
            "assets/luanNgu.jpg",
          icon: "assets/udaytonLogo.png",
          iconLink: "https://udayton.edu/directory/artssciences/computerscience/nguyen-luan.php",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Nick Stiffler",
          title: "Assistant Professor",
          img:
            "assets/nickStiff.jpg",
          icon: "assets/udaytonLogo.png",
          iconLink: "https://udayton.edu/directory/artssciences/computerscience/stiffler-nicholas.php",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Phu Phung",
          title: "Associate Professor",
          img:
            "assets/phuPhung.jpg",
          icon: "assets/udaytonLogo.png",
          iconLink: "https://udayton.edu/directory/artssciences/computerscience/phung-phu.php",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=> (
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user" src={d.img} alt="" />
                        <a href={d.iconLink} target="_blank"><img className="right" src={d.icon} alt="" /></a>
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
