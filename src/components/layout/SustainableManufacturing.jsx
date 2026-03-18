import React, { useState } from "react";
import "../../assets/css/SustainableManufacturing.css";

// Assets imports (ungethu matheriye vachukonga)
import img1 from "/brighttruckbackground.png";
import img2 from "/crosswelding.png";
import img3 from "/heropagetruck.png";
import img4 from "/truck4.png";
import img5 from "/truck5.png";
import img6 from "/truck6.png";
import img7 from "/truck7.png";

const SustainableManufacturing = () => {

const [active,setActive] = useState(null)
const [pauseOrbit,setPauseOrbit] = useState(false)

const orbitalImages = [

{ img: img1, title: "Advanced Welding", desc: "High precision robotic welding technology" },

{ img: img2, title: "Heavy Truck Build", desc: "Industrial strength vehicle manufacturing" },

{ img: img3, title: "Container Fabrication", desc: "Durable container body engineering" },

{ img: img4, title: "Vehicle Assembly", desc: "Precision engineered truck assembly line" },

{ img: img5, title: "Welding Automation", desc: "Automated fabrication improving" },

{ img: img6, title: "Truck Maintenance", desc: "Reliable servicing and inspection process" },

{ img: img7, title: "Manufacturing Plant", desc: "Modern industrial manufacturing facility" }

]

return(

<section className="sustainable-section">

<div className="container orbital-container">

{/* CENTER CONTENT */}

<div className="center-content text-center">

<p className="subtitle">
SUSTAINABLE MANUFACTURING
</p>

<h2 className="main-title">

BUILT WITH PRECISION <br/>
DELIVERED WITH SAFETY AND STRENGTH

</h2>

<button className="drive-btn">

<span className="arrow-sus">→</span>
<span className="text-sus">DRIVE INNOVATION</span>

</button>

</div>


{/* ORBIT WRAPPER */}

<div className={`orbit-wrapper-main ${pauseOrbit ? "pause-orbit" : ""}`}>

{orbitalImages.map((item,index)=>{

return(

<div

key={index}

className={`orbit-item ${active === index ? "active" : ""}`}

style={{

"--index": index,
"--total": orbitalImages.length

}}

onClick={()=>{

setActive(index)
setPauseOrbit(true)

/* 2 seconds later orbit resume */

setTimeout(()=>{

setActive(null)
setPauseOrbit(false)

},1000)

}}

>

<div className="stabilizer">

<img
src={item.img}
alt="mars manufacturing"
className="orbit-img"
/>

<div className="view-overlay">

VIEW

</div>

<div className="orbit-content">

<h4>{item.title}</h4>
<p>{item.desc}</p>

</div>

</div>

</div>

)

})}

</div>

</div>

</section>

)

}

export default SustainableManufacturing