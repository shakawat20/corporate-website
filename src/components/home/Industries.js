import React from 'react';

const Industries = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: "30px", textAlign: "center" }}>Some Industries We Work With</div>
            <div style={{ fontSize: "20px", textAlign: "center" }}>At Hardcastle, we work across 10+ industry verticals by helping them addressing the solution using latest GIS Technology</div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical" style={{ marginTop: "100px" }}>
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 "
                            style={{ color: "#f44556" }}>

                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">

                        <time className="text-lg font-black" style={{ color: "#f44556" }}>TRANSPORTAION</time>
                        <div style={{ border: "4px solid #f44556", borderRadius: "5px", padding: "8px", width: "600px" }}>
                            What do roads, bridges, transit-oriented development all have in common? A networked element that relies on a series of geospatial characteristics for good design
                        </div>
                        .
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                            style={{ color: "#e97e2e" }}>
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        {/* <time className="font-mono italic">1998</time> */}
                        <time className="text-lg font-black" style={{ color: "#e97e2e" }}>URBAN PLANNING AND DESIGN</time>
                        <div style={{ border: "4px solid #e97e2e", borderRadius: "5px", padding: "8px", width: "600px" }}>
                            Whether you're performing a view-shed analysis, creating regulatory documents, or designing a new community plan, GIS is a crucial tool for data compilation, analysis, and visualization.
                        </div>

                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                            style={{ color: "#105572" }}

                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">

                        <time className="text-lg font-black" style={{ color: "#105572" }}>ARCHITECTURE, ENGINEERING, AND CONSTRUCTION (AEC)</time>
                        <div style={{ border: "4px solid #105572", borderRadius: "5px", padding: "8px", width: "600px" }}>
                            From CAD-GIS integration to asphalt overlay modeling to creating a common operating picture for heavy civil work, GIS is an invaluable tool for the AEC industries.
                        </div>



                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                            style={{ color: "#13afae" }}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        {/* <time className="font-mono italic">2007</time> */}
                        <div className="text-lg font-black" style={{ color: "#13afae" }}>SMART CITIES AND TELECOMMUNICATION</div>
                        <div style={{ border: "4px solid #13afae", borderRadius: "5px", padding: "8px", width: "600px" }}>
                            The first step in moving forward with a Smart City, IoT, or 5G project is understanding your assets. GIS is the perfect tool to map out and understand your valuable real estate.

                        </div>

                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                            style={{ color: "rgb(35, 80, 80" }}
                        >

                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">

                        <div className="text-lg font-black" style={{ color: "rgb(35, 80, 80)" }}>GOVERNMENT</div>
                        <div style={{ border: "4px solid rgb(35, 80, 80)", borderRadius: "5px", padding: "8px", width: "600px" }}>

                            GIS is needed improve operations and service to citizens. GIS provides a common platform for data sharing, which enhances workflow, decision making, and coordination across the state and with federal and local government.
                        </div>


                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Industries;