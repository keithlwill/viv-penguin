import React from "react";
import snow from "../images/penguins/snowflake.png"
import Snowflake from "./Snowflake"
import viv1 from "../images/viv/viv-1.png";
import viv2 from "../images/viv/viv-2.png";
import viv3 from "../images/viv/viv-3.png";
import viv4 from "../images/viv/viv-4.png";
import viv5 from "../images/viv/viv-5.png";
import viv6 from "../images/viv/viv-6.png";
import viv7 from "../images/viv/viv-7.png";
import viv8 from "../images/viv/viv-8.png";
import viv9 from "../images/viv/viv-9.png";
import viv10 from "../images/viv/viv-10.png";
import viv11 from "../images/viv/viv-11.png";
import viv12 from "../images/viv/viv-12.png";
import viv13 from "../images/viv/viv-13.png";
import viv14 from "../images/viv/viv-14.png";

export default function Snowfall() {
    return (
        <div style = {{height: '100vh', width: '100vw', background: '#80c8ff', position: 'fixed', zIndex: -1, overflow: 'hidden'}} id = 'canvas'>
            <Snowflake amt = {25} img = {snow}/>
            <Snowflake amt = {1} img = {viv1}/>
            <Snowflake amt = {1} img = {viv2}/>
            <Snowflake amt = {1} img = {viv3}/>
            <Snowflake amt = {1} img = {viv4}/>
            <Snowflake amt = {1} img = {viv5}/>
            <Snowflake amt = {1} img = {viv6}/>
            <Snowflake amt = {1} img = {viv7}/>
            <Snowflake amt = {1} img = {viv8}/>
            <Snowflake amt = {1} img = {viv9}/>
            <Snowflake amt = {1} img = {viv10}/>
            <Snowflake amt = {1} img = {viv11}/>
            <Snowflake amt = {1} img = {viv12}/>
            <Snowflake amt = {1} img = {viv13}/>
            <Snowflake amt = {1} img = {viv14}/>
        </div> 
    )
}