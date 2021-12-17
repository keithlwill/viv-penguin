import React from "react";
import snow from "../images/penguins/snowflake.png"

class Snowfall extends React.Component {
    getPositions = (num, width) => {
        let arr = [];
        for(let i = 0; i < num; i++) {
            arr.push([Math.random(), Math.random()*2+1 + 's', Math.random()*-2-1 + 's']);
        }
        console.log(arr);
        return arr;
    }

    positions = this.getPositions(20,500);
    width = 0;

    render() {
        return(
            <div style = {{height: '100vh', width: '100vw', background: this.props.color || '#80c8ff', position: 'fixed', zIndex: -1, overflow: 'hidden'}} id = 'canvas'>
                {this.positions.map(block => {
                    return (
                        <div style = {{positon: 'absolute', width: 0, height: 0}}>
                            <img src = {snow} className = 'animation' style = {{left: block[0]*(window.innerWidth+100)-100, animationDuration: block[1], animationDelay: block[2]}}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Snowfall;