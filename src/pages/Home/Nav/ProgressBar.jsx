// ProgressBar.jsx
import React, { useEffect } from 'react';

const ProgressBar = () => {
    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
        }

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.onscroll = null;
        };
    }, []); // Empty dependency array ensures that this effect runs once when the component mounts

    return (
        <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
        </div>
    );
};

export default ProgressBar;