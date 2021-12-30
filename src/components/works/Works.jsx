import "./works.scss"
import { useState } from "react";

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
          id: "1",
          icon: "./assets/globe.png",
          title: "Messenging App",
          desc:
            "Created a messaging application that allows for the creation of groupchats and private chats. Users were allowed to create accounts and interact with friends by texting, playing games, and sending videos to each other!",
          img:
            "./assets/enviApp.png",
          projLink:
            "https://envi-messenger-team8.herokuapp.com/",
          projLinkName:
            "Envi Website",
          projRepo:
            "https://bitbucket.org/cps490-team8/cps490-team8/src/master/",
          projRepoName:
            "Envi Repository"
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          projLink:
            "https://envi-messenger-team8.herokuapp.com/",
          projRepo:
            "https://bitbucket.org/cps490-team8/cps490-team8/src/master/",
        }
      ];

    const handleClick = (way) =>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0);
    };
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span><a href={d.projLink} target="_blank">{d.projLinkName}</a></span>
                                <span><a href={d.projRepo} target="_blank">{d.projRepoName}</a></span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=""/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}                                                                                                                                                 