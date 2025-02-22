
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import img1 from '../home/1.jpg';

import './Contact.css'



const ContactPage = () => {


    const { register,handleSubmit,reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
            if (result.success) {
                alert("Message sent successfully!");
                reset(); // Clear form after submission
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error sending message.");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: "blue", backgroundImage: `url(${img1})`,color:"white"}}>
            <div className='pt-20 pb-20' style={{ borderRadius: "8px", boxSizing: "border-box", }}>

                <div data-aos="fade-left" className='border border-gray-500 rounded-lg pl-40 w-3/4  pt-10  m-auto' >
                    <form className='flex flex-row justify-center ' onSubmit={handleSubmit(onSubmit)}>


                        <div className='mr-3 '>

                            <h1 className='text-2xl'> Greetings! How may I be of service to you today? Don't <br /> hesitate to ask any questions or let me know how I can assist you.</h1>
                            <div className='mt-10'>
                                <div className='flex box-border items-center p-5 ' >
                                    <i className="fa-solid fa-location-dot pr-5"></i>
                                    <h1>Dhaka,Bangladesh</h1>

                                </div>
                                <div className='flex items-center p-5 box-border'>
                                    <i className={`fa-solid fa-envelope pr-5`}></i>
                                    <h1>shakawat.cse20@gmail.com</h1>

                                </div>
                                <div className='flex items-center p-5'>
                                    <i class="fa-sharp fa-solid fa-phone pr-5 "></i>
                                    <h1>+8801609431059</h1>

                                </div>


                            </div>
                        </div>


                        <div>
                            <input placeholder='Name' className="input border border-gray-300 bg-[#1F2937] w-full mt-3 mr-3 max-w-xs "  {...register("name")} />
                            <input placeholder='Email' className="input border border-gray-300 bg-[#1F2937] w-full mt-3 max-w-xs "  {...register("email")} />
                            <input placeholder='Message' className="input border border-gray-300 bg-[#1F2937] w-full mt-3 max-w-xs h-40"  {...register("message")} />

                            <input className="block bg-[#1F2937] text-[#d1d5db] hover:bg-[#1F2937] btn mt-3" type="submit" />
                        </div>





                    </form>
                </div>

            </div>
            <div style={{fontSize:"40px",textAlign:"center",fontWeight:900}}>
                Location
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0862810390777!2d90.3944629!3d23.779941700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769f1dc922b%3A0xbd8e17d59c22fc89!2sYSP%20TECHNOLOGY!5e0!3m2!1sen!2sbd!4v1738453553552!5m2!1sen!2sbd" width="100" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  style={{ marginLeft:"20px" ,marginTop:"50px",width:"100%" }} ></iframe>
        </div>
    );
};

export default ContactPage;
