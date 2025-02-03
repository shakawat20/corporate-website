import React from 'react';
import img1 from '../home/yspAboutUs.jpg'
import img2 from '../home/1.jpg'

const AboutUs = () => {
    return (
        <div style={{display:"flex",paddingTop:"40px",backgroundImage:`url(${img2})`,color:"white"}}>
            <img src={img1} alt="" />
            <div style={{paddingLeft:"30px"}}>
               
                <h1 style={{fontSize:"30px",fontWeight:600}}>ABOUT US</h1>
                <p style={{textAlign:"left",width:"40%"}}>YSP Technology started its journey in 2010 to serve Bangladesh users with advanced and smart products. It is a professional services company specialized in supplying world’s leading products and provide integrated solutions for clients in a variety of disciplines and industries.</p>
                <br />
                <p style={{textAlign:"left",width:"40%"}}>YSP offers the services include industry based solutions sales and supports, GIS consulting, satellite images sales and support, applications development, hardware sales and support, arrange training and capacity building services locally and abroad, and professional services.</p>
                <br />
                <p style={{textAlign:"left",width:"40%"}}>
                YSP collaborates with leading software vendors and data providers to offer our customers with the most modern and comprehensive selection of geospatial solutions in Bangladesh and abroad

                </p>
            </div>
        </div>
    );
};

export default AboutUs;