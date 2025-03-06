import React from "react";

const NotificationItemIcon = () => {
    return (
        <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="22.5" cy="22.5" r="22.5" fill="#2ED370" />
            <circle
                cx="22.5"
                cy="22.5"
                r="22.5"
                fill="url(#paint0_radial_1_8361)"
            />
            <path
                d="M35 22.5C35 24.9723 34.2669 27.389 32.8934 29.4446C31.5199 31.5002 29.5676 33.1024 27.2835 34.0485C24.9995 34.9946 22.4861 35.2421 20.0614 34.7598C17.6366 34.2775 15.4093 33.087 13.6612 31.3388C11.913 29.5907 10.7225 27.3634 10.2402 24.9386C9.75787 22.5139 10.0054 20.0005 10.9515 17.7165C11.8976 15.4324 13.4998 13.4801 15.5554 12.1066C17.611 10.7331 20.0277 10 22.5 10V22.5H35Z"
                fill="white"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_1_8361"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(4.94999 -3.6) rotate(51.6112) scale(59.4209)"
                >
                    <stop stopColor="#066431" />
                    <stop
                        offset="0.701411"
                        stopColor="#21B364"
                        stopOpacity="0.8"
                    />
                    <stop offset="1" stopColor="#08291A" />
                </radialGradient>
            </defs>
        </svg>
    );
};

export default NotificationItemIcon;
