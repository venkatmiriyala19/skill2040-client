import React, { useState } from 'react';
import './styles/Heading.css';
import { FaCrown } from "react-icons/fa";
import { useWindowSize } from "react-use";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";

export default function Heading() {
    const { width, height } = useWindowSize();
    const [stopConfetti, setStopConfetti] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [hidePremiumButton, setHidePremiumButton] = useState(false);

    const handlePremiumButtonClick = () => {
        setShowModal(true);
        
    };

    const handleCloseModal = () => {
        setShowModal(false);
        
    };

    const showConfettiToast = () => {
        setStopConfetti(false);
        setShowModal(false);
        setHidePremiumButton(true); 
        // toast.success("Your course is marked as completed", {
        //     position: "top-right",
        //     autoClose: 10000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "colored",
        //     style: {
        //         fontWeight: "bold",
        //         fontSize: "1.2rem",
        //     },
        // });

        // Stop confetti after 5 seconds (5000 milliseconds)
        const confettiTimer = setTimeout(() => {
            setStopConfetti(true);
        }, 10000);

        // Clear the timer when the component unmounts or when the effect runs again
        return () => clearTimeout(confettiTimer);
    };

    return (
        <>
            {!stopConfetti && (
                <Confetti width={width} height={height + window.scrollY} gravity={0.02}  />
            )}
            <div className="premium-button" onClick={handlePremiumButtonClick} style={{ display: hidePremiumButton ? 'none' : 'block' }}>
                <h3 className="shimmer" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Get Premium</h3>
                <FaCrown style={{ fontSize: '1.8em' }} />
            </div>

            {showModal && (
                <div className="premium-popup">
                    <div className="premium-popup-content">
                        <span className="premium-popup-close" onClick={handleCloseModal}>&times;</span>
                        <h2 className='premium-popup-heading'>Premium Features</h2>
                        <hr></hr>
                        <div>
                            <h3 className='premium-popup-list'>Unlimited course access</h3>
                            <h3 className='premium-popup-list'>Access to contact top mentors</h3>
                            <h3 className='premium-popup-list'>Exclusive Job Vacancies Info</h3>
                            <h3 className='premium-popup-list'>Hand-picked Coding questions</h3>
                        </div>
                        <div class="premium-buy-center">
                            <button class="premium-buy-btn" onClick={showConfettiToast}>
                                <svg width="180px" height="60px" viewBox="0 0 180 60" class="border" className='buy-premium-button-svg'>
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                                </svg>
                                <span>Buy Premium - $0</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="heading">
                <h1 className="skill">skill <span className='year'>2040</span>
                    <span className='tagline'> A best website for engineering students!!!!</span></h1>
            </div>
        </>
    );
};
