import "./works.scss"
import { useState } from "react";
import globe from "public/assets/globe.png";
import enviApp from "public/assets/enviApp.png";
import portfolioApp from "public/assets/portfolioApp.png";
import writing from "public/assets/writing.png";
import blocs from "public/assets/Blocs.png";
import game from "public/assets/game.png";
import gameLogo from "public/assets/Memory_Balance_Box_Cover.png";

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
          id: "1",
          icon: globe,
          title: "Messenging App",
          desc:
            "Created a messaging application that allows for the creation of groupchats and private chats. Users were allowed to create accounts and interact with friends by texting, playing games, and sending videos to each other!",
          img:
            enviApp,
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
          icon: globe,
          title: "Portfolio Website",
          desc:
            "I used React to create this responsive portfolio website, and using libraries like emailJS for the contacts page",
          img:
            portfolioApp,
          projLink:
            "",
          projLinkName:
            "Portfolio Website",
          projRepo:
            "https://github.com/WesamHaddad125/portfolio-website",
          projRepoName:
            "Portfolio Repository"
        },
        {
          id: "3",
          icon: writing,
          title: "Blocs: Programming Language",
          desc:
            "Using Regular Expressions and the Racket programming language, myself and my partner created our own programming language designed for kids. We wanted to design it like a story book that kids already learn through reading",
          img:
            blocs,
          projLink:
            "",
          projLinkName:
            "",
          projRepo:
            "https://bitbucket.org/cps352-final-project/cps352finalprojectrepo/src/master/",
          projRepoName:
            "Blocs Repository"
        },
        {
          id: "4",
          icon: game,
          title: "Memory Balance: MOBA",
          desc:
            "Created a MOBA game, similar to Dota 2, or League of Legends, but optimized for mobile. I created it using Unity, and Blender for 3D assets.",
          img:
            gameLogo,
          projLink:
            "https://www.youtube.com/watch?v=QJVztVj5htM",
          projLinkName:
            "Memory Balance Trailer",
          projRepo:
            "https://github.com/WesamHaddad125/Memory-Balance",
          projRepoName:
            "Game Repository"
        },
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