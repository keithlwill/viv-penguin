import React from "react";
import PingStand from "../images/penguins/penguin-stand.png";

export default function Penguin(props) {
    const {width, height} = props
    return (
        <img className = "penguin" src = {PingStand} alt = "Penguin goes here!" width = {width} height = {height}/>
    );
}