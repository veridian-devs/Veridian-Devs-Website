import React from 'react';
import '../../styles/card.css';
import Image from 'next/image';
interface CardProps {
    name: string;
    role: string;
    img: string;
    title?: string;
    platform: {
        twitter: string;
        instagram: string;
        linkedin: string;
    };
}
export default function TeamCard({ name, role, img, title, platform }: CardProps) {
    const handleSocial = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
        <div className="parent">
            <div className="card">
                <Image
                    src={img}
                    height={375}
                    width={275}
                    className="glass bg-contain"
                    alt={`${name} - ${role}`}
                    // style={{ backgroundImage: `url(${img})` }}
                />
                <div className="content">
                    <span className="title">
                        {name}
                        <br />
                        <span className="text-sm">{title}</span>
                    </span>
                    <span className="text">{role}</span>
                </div>
                <div className="bottom">
                    <div className="social-buttons-container">
                        <button className="social-button social-button1" onClick={() => handleSocial(platform.instagram)}>
                            <svg
                                viewBox="0 0 30 30"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg"
                            >
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 2 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                            </svg>
                        </button>
                        <button
                            className="social-button social-button2"
                            onClick={() => handleSocial(platform.twitter)}
                            disabled={!platform.twitter}
                        >
                            <svg
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg"
                            >
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                        </button>
                        <button className="social-button social-button3" onClick={() => handleSocial(platform.linkedin)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 5 1036 990"
                                className="svg"
                            >
                                <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
