import React from 'react';
import img1 from './GIS is the future of Risk Management in AgriBusiness.png'
import img2 from './Industrial.jpg'
import img3 from './Land.jpg'
import img4 from './Plan the profitable Expansion for your Franchise.png'
import img5 from './GIS is the future of Risk Management in AgriBusiness.png'
import img6 from './Plan the profitable Expansion for your Franchise.png'
import img7 from './Transport.jpg'

const Products = () => {
    const productsInfo = [
        {
            img: img1,
            heading: "GIS is the future of Risk Management in AgriBusiness",
            paragraph: "Geographic Information Systems (GIS) play a crucial role in agribusiness by helping farmers and stakeholders analyze spatial data, monitor climate patterns, and predict risks such as droughts, pest infestations, and soil degradation. By leveraging GIS, agribusinesses can make data-driven decisions to enhance productivity and sustainability."
        },
        {
            img: img2,
            heading: "GIS is the future of Risk Management in AgriBusiness",
            paragraph: "GIS enables agribusinesses to assess environmental risks and optimize land use planning. By integrating satellite imagery and real-time data, farmers can identify potential threats, such as floods or soil erosion, and take proactive measures to mitigate losses and improve yields."
        },
        {
            img: img3,
            heading: "GIS is the future of Risk Management in AgriBusiness",
            paragraph: "With GIS, agribusinesses can map and analyze crop health, water availability, and market trends. This technology facilitates better resource allocation, reducing costs while ensuring sustainable agricultural practices that minimize environmental impact."
        },
        {
            img: img4,
            heading: "GIS is the future of Risk Management in AgriBusiness",
            paragraph: "GIS enhances precision farming by providing detailed insights into soil conditions, weather patterns, and pest risks. By utilizing GIS-based predictive analytics, farmers can implement targeted interventions to increase efficiency and resilience in agricultural production."
        },
        {
            img: img5,
            heading: "GIS is the future of Risk Management in AgriBusiness",
            paragraph: "The integration of GIS in agribusiness improves supply chain management by tracking produce from farm to market. This helps ensure quality control, reduce post-harvest losses, and optimize logistics for better distribution of agricultural products."
        },
        {
            img: img6,
            heading: "GIS is the future of Risk Management in AgriBusiness",
            paragraph: "GIS supports agribusinesses in climate risk assessment by analyzing historical weather data and forecasting future climate trends. This helps farmers adapt to changing conditions, implement sustainable farming techniques, and enhance food security."
        },
        {
            img: img7,
            heading: "GIS is the future of Risk Management in AgriBusiness",
            paragraph: "By integrating GIS with IoT and AI technologies, agribusinesses can automate data collection and analysis, leading to smarter decision-making. This innovation ensures efficient farm management, reduces waste, and increases overall productivity."
        },
    ];

    return (
        <div>
            <h1 style={{color:'blue',textAlign:"center"}}>Our Products</h1>
            <h1 style={{color:'blue',textAlign:"center",fontSize:"30px"}}>Case Studies</h1>
        <div className='grid grid-cols-3 justify-items-center'>
            {
                productsInfo.map(product => <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
                    <figure>
                        <img
                            src={product.img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title" style={{ fontSize: "16px", color: "blue" }}> {product.heading}</h2>
                        <p>{product.paragraph}</p>
                       
                    </div>
                </div>)
            }



        </div>
        </div>
    );
};

export default Products;