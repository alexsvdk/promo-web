import React from "react";
import './Home.css'
import promoman from '/home/a1exs/WebstormProjects/promo-web/src/img/promoman.jpg'

class Home extends React.Component{
    render() {
        return (
            <div className="home">
                <h1>Гильдия промоутеров</h1>
                <p>Мы - промоутеры проффесионалы, <strong>лучшие</strong> в своём деле</p>
                <img src={promoman}/>
            </div>
        );
    }
}

export default Home