import React from "react";

class Snowflake extends React.Component {
    getPositions = (num) => {
        let arr = [];
        for(let i = 0; i < num; i++) {
            arr.push([Math.random(), Math.random()*20+1 + 's', Math.random()*-2-1 + 's']);
        }
        console.log(arr);
        return arr;
    }

    positions = this.getPositions(this.props.amt);

    render() {
        return(
            <>
                {this.positions.map(block => {
                    return (
                        <div style = {{positon: 'absolute', width: 0, height: 0}}>
                            <img src = {this.props.img} className = 'animation' style = {{left: block[0]*(window.innerWidth+100)-100, animationDuration: block[1], animationDelay: block[2]}}/>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Snowflake;