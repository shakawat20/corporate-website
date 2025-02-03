import React from 'react';
import gis from "./geospatial.png"
import satellite from "./satellite-xxl.png"
import services from "./customer-service (2).png"
import services2 from "./customer-service (4).png"

const Feature = () => {
    
    const features=[
        {
            img:gis,
            heading:"ESRI SOLUTIONS",
            heading2:'Using GIS technology, Hardcastle can enable your organization to analyze your data geospatially. See how location data can add additional insights into your organization'
        },
        {
            img:satellite,
            heading:"SATELLITE IMAGES",
            heading2:'Using GIS technology, Hardcastle can enable your organization to analyze your data geospatially. See how location data can add additional insights into your organization'
        },
        {
            img:services,
            heading:"INTEGRATED SERVICES",
            heading2:'Using GIS technology, Hardcastle can enable your organization to analyze your data geospatially. See how location data can add additional insights into your organization'
        },
        {
            img:services2,
            heading:"HARRIS SOLUTIONS",
            heading2:'Using GIS technology, Hardcastle can enable your organization to analyze your data geospatially. See how location data can add additional insights into your organization'
        }
    
    ]
    
    return (
        <div>

            {/* {
                features.map(feature=><div style={{ width: "330px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <div style={{ width: "110px", height: "110px", display: "flex", justifyContent: "center", alignItems: "center", border: "10px solid #f44556", borderRadius: "50%" }}>

                            <div style={{ height: "47px", width: "32px", backgroundColor: "#f44556", display: "flex", alignItems: "end", paddingBottom: "5px" }}>
                                <img src={feature.img} alt="" style={{ height: "30px", width: "32px", }} />
                            </div>

                        </div>

                    </div>
                    <h1 style={{ color: "#f44556", fontSize: '20px', fontWeight: "bold" }}>{feature.heading}</h1>
                    <h2 style={{ fontFamily: "sans-serif", textAlign: "center" }}>{feature.heading2}</h2>
                </div>)
            } */}
            <div className='grid grid-cols-2 w-[100%] justify-items-center pt-4' >
                <div style={{ width: "330px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",marginBottom:"30px" }}>
                    <div>
                        <div style={{ width: "110px", height: "110px", display: "flex", justifyContent: "center", alignItems: "center", border: "10px solid #f44556", borderRadius: "50%" }}>

                            <div style={{ height: "47px", width: "32px", backgroundColor: "#f44556", display: "flex", alignItems: "end", paddingBottom: "5px" }}>
                                <img src={gis} alt="" style={{ height: "30px", width: "32px", }} />
                            </div>

                        </div>

                    </div>
                    <h1 style={{ color: "#f44556", fontSize: '20px', fontWeight: "bold" }}>ESRI SOLUTIONS</h1>
                    <h2 style={{ fontFamily: "sans-serif", textAlign: "center" }}>Using GIS technology, Hardcastle can enable your organization to analyze your data geospatially. See how location data can add additional insights into your organization.</h2>
                </div>







                <div style={{ width: "330px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",marginBottom:"30px" }}>
                    <div>
                        <div style={{ width: "110px", height: "110px", display: "flex", justifyContent: "center", alignItems: "center", border: "10px solid #e97e2e", borderRadius: "50%" }}>

                            <div style={{ height: "47px", width: "32px", display: "flex", alignItems: "end", paddingBottom: "5px" }}>
                            <div style={{ height: "47px", width: "32px",  display: "flex", alignItems: "end", paddingBottom: "5px" }}>
                                <img src={satellite} alt="" style={{ height: "30px", width: "32px", }} />
                            </div>
                            </div>

                        </div>

                    </div>
                    <h1 style={{ color: "#e97e2e", fontSize: '20px', fontWeight: "bold", }}>SATELLITE IMAGES</h1>
                    <h2 style={{ fontFamily: "sans-serif", textAlign: "center" }}>Using GIS technology, Hardcastle can enable your organization to analyze your data geospatially. See how location data can add additional insights into your organization.</h2>
                </div>





                <div style={{ width: "330px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <div style={{ width: "110px", height: "110px", display: "flex", justifyContent: "center", alignItems: "center", border: "10px solid #13afae", borderRadius: "50%" }}>

                            <div style={{ height: "47px", width: "32px",  display: "flex", alignItems: "end", paddingBottom: "5px" }}>
                                <img src={services} alt="" style={{ height: "30px", width: "32px", }} />
                            </div>

                        </div>

                    </div>
                    <h1 style={{ color: "#13afae", fontSize: '20px', fontWeight: "bold" }}> SATELLITE IMAGES</h1>
                    <h2 style={{ fontFamily: "sans-serif", textAlign: "center" }}>Using GIS technology, Hardcastle can enable your organization to analyze your data geospatially. See how location data can add additional insights into your organization.</h2>
                </div>






                <div style={{ width: "330px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <div style={{ width: "110px", height: "110px", display: "flex", justifyContent: "center", alignItems: "center", border: "10px solid #105572", borderRadius: "50%" }}>

                            <div style={{ height: "47px", width: "32px", display: "flex", alignItems: "end", paddingBottom: "5px" }}>
                                <img src={services2} alt="" style={{ height: "30px", width: "32px", }} />
                            </div>

                        </div>

                    </div>
                    <h1 style={{ color: "#105572", fontSize: '20px', fontWeight: "bold" }}>HARRIS SOLUTIONS</h1>
                    <h2 style={{ fontFamily: "sans-serif", textAlign: "center" }}>Using GIS technology, Hardcastle can enable your organization to analyze your data geospatially. See how location data can add additional insights into your organization.</h2>
                </div>
                {/* <div>
                    <div></div>
                    <h1>HARRIS Solutions</h1>
                    <h2></h2>
                </div>
                <div>
                    <div><i class="fa-solid fa-satellite" style={{ color: "#eff5f3" }}></i></div>
                    <h1>Satellite Images</h1>
                    <h2></h2>
                </div>
                <div>
                    <div><i class="fa-brands fa-servicestack" style={{ color: "#eff5f3" }}></i></div>
                    <h1>Integrated Services</h1>
                    <h2></h2>
                </div> */}

            </div>
        </div>
    );
};

export default Feature;