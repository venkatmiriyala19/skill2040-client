import React from 'react'
import "./ReviewBar.css";
import { FaRegCircleUser } from "react-icons/fa6";

const Reviewbar = () => {
    return (
        <>
            <div className='reviews'>
                <div className='reviewbar'>
                    <div className='userinfo'>
                        <FaRegCircleUser style={{ fontSize: '25px', color: '#92e3a9', margin: '5px' }} />

                        USER 1 - IIT
                    </div>
                    <div className="feedback">
                        Excellent website!!loved it!!
                    </div>

                </div>
                <div className='reviewbar'>
                    <div className='userinfo'>
                        <FaRegCircleUser style={{ fontSize: '25px', color: '#92e3a9', margin: '5px' }} />

                        USER 1 - IIT
                    </div>
                    <div className="feedback">
                        Helped me a lot!!
                    </div>

                </div>
                <div className='reviewbar'>
                    <div className='userinfo'>
                        <FaRegCircleUser style={{ fontSize: '25px', color: '#92e3a9', margin: '5px' }} />

                        USER 1 - IIT
                    </div>
                    <div className="feedback">
                        Thanks to the creators!!
                    </div>

                </div>
            
            </div>
        </>

    )
}

export default Reviewbar;