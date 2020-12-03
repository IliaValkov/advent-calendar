import React from "react";
import { createState } from "../state";
import WishCalendar from "./WishCalendar";
import WishView from "./WishView";
import bkgVideo from "../../media/video/bkg.mp4";
import enFlag from "../../media/img/en.jpg";
import bgFlag from "../../media/img/bg.png";


class BaseLayout extends React.Component {

    state = createState(this);

    componentDidMount() {
        this.state.loadWishes();
    }

    render() {
        return (
            <div className="app">
                <h1>{this.state.headline}</h1>
                <div className="languageControl">
                    <span onClick={() => this.state.setLang("en")}>
                        <img src={enFlag} alt="English"/>
                    </span>
                    <span onClick={() => this.state.setLang("bg")}>
                        <img src={bgFlag} alt="Bulgarian"/>
                    </span>
                </div>
                <WishCalendar wishes={this.state.wishes} elementOnClick={this.state.selectWish} />
                <WishView selectedWish={this.state.selectedWish} returnToCalendar={this.state.selectWish} />
                <video autoPlay muted loop id="bkgVideo">
                    <source src={bkgVideo} type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default BaseLayout;