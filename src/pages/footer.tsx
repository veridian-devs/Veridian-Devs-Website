import { DotPattern } from '@/components/ui/background';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="50"
            zoomAndPan="magnify"
            viewBox="0 0 325 324.999991"
            height="50"
            preserveAspectRatio="xMidYMid meet"
            version="1.2"
        >
            <defs>
            <clipPath id="03b3bdc84e">
                <path d="M 112.5 117.855469 L 262.5 117.855469 L 262.5 234.105469 L 112.5 234.105469 Z M 112.5 117.855469 " />
            </clipPath>
            </defs>
            <g id="5bc1b15809">
            <g clipRule="nonzero" clipPath="url(#03b3bdc84e)">
                <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 205.777344 117.867188 L 133.964844 117.867188 L 145.195312 140.894531 L 112.5 140.820312 L 158.03125 234.082031 L 204.269531 140.832031 L 233.804688 140.699219 L 189.460938 231.183594 L 205.773438 231.183594 C 237.078125 231.183594 262.503906 205.914062 262.503906 174.613281 C 262.507812 143.3125 237.078125 117.867188 205.777344 117.867188 Z M 158.054688 223.460938 L 120.042969 145.558594 L 144.347656 145.625 L 170.445312 198.480469 Z M 158.054688 223.460938 "
                />
            </g>
            </g>
        </svg>
    );
};

const MoreIcon = () => (
    <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5461 7.54623C13.6507 7.54623 14.5461 6.6508 14.5461 5.54623C14.5461 4.44166 13.6507 3.54623 12.5461 3.54623C11.4416 3.54623 10.5461 4.44166 10.5461 5.54623C10.5461 6.6508 11.4416 7.54623 12.5461 7.54623Z"
            fill="#7A7A9D"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5461 14.5462C13.6507 14.5462 14.5461 13.6508 14.5461 12.5462C14.5461 11.4417 13.6507 10.5462 12.5461 10.5462C11.4416 10.5462 10.5461 11.4417 10.5461 12.5462C10.5461 13.6508 11.4416 14.5462 12.5461 14.5462Z"
            fill="#7A7A9D"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5461 21.5462C13.6507 21.5462 14.5461 20.6508 14.5461 19.5462C14.5461 18.4417 13.6507 17.5462 12.5461 17.5462C11.4416 17.5462 10.5461 18.4417 10.5461 19.5462C10.5461 20.6508 11.4416 21.5462 12.5461 21.5462Z"
            fill="#7A7A9D"
        ></path>
    </svg>
);

const TwitterIcon = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13.3701 9.47204L20.542 0.583496H17.341L11.867 7.37204L7.01074 0.583496H0.0419922L8.17324 11.9481L0.531576 21.4168H3.73366L9.67637 14.0522L14.9482 21.4168H21.917L13.3701 9.47204ZM10.891 12.545L9.38574 10.4418L3.54199 2.27829H5.94824L10.6649 8.8585L12.168 10.9627L18.4368 19.722H16.0305L10.891 12.545Z"
            fill="#ffffff"
        ></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M19.5 0.75C20.4946 0.75 21.4484 1.14509 22.1517 1.84835C22.8549 2.55161 23.25 3.50544 23.25 4.5V19.5C23.25 20.4946 22.8549 21.4484 22.1517 22.1517C21.4484 22.8549 20.4946 23.25 19.5 23.25H4.5C3.50544 23.25 2.55161 22.8549 1.84835 22.1517C1.14509 21.4484 0.75 20.4946 0.75 19.5V4.5C0.75 3.50544 1.14509 2.55161 1.84835 1.84835C2.55161 1.14509 3.50544 0.75 4.5 0.75H19.5ZM19.5 3.25H4.5C4.16848 3.25 3.85054 3.3817 3.61612 3.61612C3.3817 3.85054 3.25 4.16848 3.25 4.5V19.5C3.25 19.8315 3.3817 20.1495 3.61612 20.3839C3.85054 20.6183 4.16848 20.75 4.5 20.75H19.5C19.8315 20.75 20.1495 20.6183 20.3839 20.3839C20.6183 20.1495 20.75 19.8315 20.75 19.5V4.5C20.75 4.16848 20.6183 3.85054 20.3839 3.61612C20.1495 3.3817 19.8315 3.25 19.5 3.25ZM7 9.5C7.30617 9.50004 7.60167 9.61244 7.83047 9.81589C8.05926 10.0193 8.20543 10.2997 8.24125 10.6038L8.25 10.75V17C8.24965 17.3186 8.12765 17.625 7.90894 17.8567C7.69023 18.0884 7.39131 18.2278 7.07326 18.2465C6.7552 18.2651 6.44203 18.1617 6.19771 17.9572C5.95339 17.7527 5.79638 17.4626 5.75875 17.1463L5.75 17V10.75C5.75 10.4185 5.8817 10.1005 6.11612 9.86612C6.35054 9.6317 6.66848 9.5 7 9.5ZM10.75 8.25C11.0427 8.24996 11.3262 8.35266 11.551 8.5402C11.7758 8.72775 11.9276 8.98824 11.98 9.27625C12.2318 9.13085 12.4918 9.00021 12.7588 8.885C13.5925 8.52875 14.8413 8.3325 15.9688 8.68625C16.56 8.87375 17.1538 9.22375 17.5938 9.82C17.9875 10.3512 18.2 10.9975 18.2425 11.7238L18.25 12V17C18.2496 17.3186 18.1277 17.625 17.9089 17.8567C17.6902 18.0884 17.3913 18.2278 17.0733 18.2465C16.7552 18.2651 16.442 18.1617 16.1977 17.9572C15.9534 17.7527 15.7964 17.4626 15.7587 17.1463L15.75 17V12C15.75 11.5875 15.65 11.395 15.585 11.3062C15.4916 11.1903 15.3631 11.1079 15.2188 11.0712C14.7837 10.9338 14.1575 11.0063 13.7412 11.1838C13.1162 11.4513 12.5437 11.8713 12.1538 12.26L12 12.425V17C11.9996 17.3186 11.8777 17.625 11.6589 17.8567C11.4402 18.0884 11.1413 18.2278 10.8233 18.2465C10.5052 18.2651 10.192 18.1617 9.94771 17.9572C9.70339 17.7527 9.54638 17.4626 9.50875 17.1463L9.5 17V9.5C9.5 9.16848 9.6317 8.85054 9.86612 8.61612C10.1005 8.3817 10.4185 8.25 10.75 8.25ZM7 5.75C7.33152 5.75 7.64946 5.8817 7.88388 6.11612C8.1183 6.35054 8.25 6.66848 8.25 7C8.25 7.33152 8.1183 7.64946 7.88388 7.88388C7.64946 8.1183 7.33152 8.25 7 8.25C6.66848 8.25 6.35054 8.1183 6.11612 7.88388C5.8817 7.64946 5.75 7.33152 5.75 7C5.75 6.66848 5.8817 6.35054 6.11612 6.11612C6.35054 5.8817 6.66848 5.75 7 5.75Z"
            fill="#ffffff"
        ></path>
    </svg>
);

const GithubIcon = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.10463 4.69052C4.82338 3.99935 4.83463 3.2096 4.95951 2.48702C5.81896 2.73571 6.62627 3.12808 7.34451 3.64619C7.65951 3.87802 8.07238 3.95277 8.45713 3.84119C9.44425 3.55608 10.4697 3.41298 11.5003 3.41652C12.5814 3.41652 13.6085 3.56819 14.5411 3.8401C14.9259 3.95277 15.3388 3.87694 15.6526 3.6451C16.3705 3.12711 17.1775 2.73474 18.0365 2.48594C18.1614 3.20852 18.1715 3.99827 17.8925 4.68835C17.7238 5.10435 17.8081 5.58319 18.1265 5.92335C18.941 6.79327 19.3753 7.79319 19.3753 8.83319C19.3753 11.1234 17.159 13.3691 13.5995 14.0527C12.7085 14.2239 12.3609 15.3039 13.0426 15.9225C13.4803 16.319 13.7503 16.878 13.7503 17.4999V20.7499C13.7503 21.0372 13.8688 21.3127 14.0798 21.5159C14.2907 21.7191 14.5769 21.8332 14.8753 21.8332C15.1736 21.8332 15.4598 21.7191 15.6708 21.5159C15.8817 21.3127 16.0003 21.0372 16.0003 20.7499V17.4999C16.0003 16.8824 15.8653 16.2952 15.6245 15.7633C19.0186 14.629 21.6253 12.0756 21.6253 8.83319C21.6253 7.37394 21.0808 6.03277 20.1774 4.90935C20.4136 4.02102 20.3923 3.12619 20.3023 2.43935C20.2224 1.82402 20.111 1.01802 19.661 0.537019C18.9916 -0.176898 17.8835 0.243435 17.096 0.502352C16.2508 0.776673 15.447 1.15733 14.7054 1.63444C13.6581 1.37669 12.5812 1.24747 11.5003 1.24985C10.382 1.24985 9.30313 1.38527 8.29288 1.63552C7.55127 1.15841 6.74743 0.777756 5.90226 0.503436C5.11476 0.243436 4.00551 -0.176898 3.33613 0.537019C2.87713 1.02669 2.78151 1.76877 2.69938 2.39927L2.69376 2.44044C2.60376 3.12835 2.58351 4.02427 2.81976 4.91369C1.91976 6.03602 1.37526 7.37502 1.37526 8.83319C1.37526 12.0745 3.98188 14.629 7.37601 15.7633C7.13076 16.3043 7.0029 16.8879 7.00026 17.4782L6.81126 17.515C6.00463 17.6223 5.48826 17.5259 5.13726 17.3829C4.28226 17.034 3.84126 16.1554 3.30351 15.4838C2.96826 15.0667 2.48001 14.5456 1.73076 14.3051C1.59056 14.2601 1.44253 14.2422 1.29513 14.2524C1.14774 14.2625 1.00386 14.3005 0.871709 14.3642C0.604822 14.4928 0.401918 14.7182 0.307633 14.9909C0.213349 15.2635 0.235407 15.5611 0.368957 15.8181C0.502506 16.0751 0.736606 16.2705 1.01976 16.3613C1.64751 16.5628 2.08176 17.5984 2.48001 18.0578C2.89963 18.5431 3.45763 19.0501 4.25751 19.3773C5.02476 19.6914 5.92588 19.803 7.00026 19.6763V20.7499C7.00026 21.0372 7.11878 21.3127 7.32976 21.5159C7.54074 21.7191 7.82689 21.8332 8.12526 21.8332C8.42363 21.8332 8.70977 21.7191 8.92075 21.5159C9.13173 21.3127 9.25026 21.0372 9.25026 20.7499V17.4999C9.25026 16.878 9.52026 16.319 9.95788 15.9225C10.6408 15.3029 10.292 14.2239 9.40101 14.0527C5.84038 13.3691 3.62526 11.1234 3.62526 8.83319C3.62526 7.79535 4.05838 6.79544 4.87176 5.92552C5.19013 5.58535 5.27338 5.10652 5.10463 4.69052Z"
            fill="#ffffff"
        ></path>
    </svg>
);

const InstagramIcon = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_297_3051)">
            <path
                d="M11 0C8.01488 0 7.6395 0.01375 6.46663 0.066C5.29375 0.121 4.49487 0.30525 3.795 0.5775C3.06054 0.852948 2.39544 1.28617 1.84663 1.84663C1.28617 2.39544 0.852948 3.06054 0.5775 3.795C0.30525 4.4935 0.119625 5.29375 0.066 6.4625C0.01375 7.63812 0 8.01213 0 11.0014C0 13.9879 0.01375 14.3619 0.066 15.5347C0.121 16.7063 0.30525 17.5051 0.5775 18.205C0.859375 18.9282 1.23475 19.5415 1.84663 20.1534C2.45713 20.7652 3.07037 21.142 3.79363 21.4225C4.49487 21.6947 5.29238 21.8804 6.46388 21.934C7.63813 21.9862 8.01213 22 11 22C13.9879 22 14.3605 21.9862 15.5347 21.934C16.7049 21.879 17.5065 21.6947 18.2064 21.4225C18.9403 21.1469 19.605 20.7137 20.1534 20.1534C20.7652 19.5415 21.1406 18.9282 21.4225 18.205C21.6934 17.5051 21.879 16.7063 21.934 15.5347C21.9862 14.3619 22 13.9879 22 11C22 8.01213 21.9862 7.63813 21.934 6.46388C21.879 5.29375 21.6934 4.4935 21.4225 3.795C21.1471 3.06054 20.7138 2.39544 20.1534 1.84663C19.6046 1.28617 18.9395 0.852948 18.205 0.5775C17.5037 0.30525 16.7035 0.119625 15.5334 0.066C14.3591 0.01375 13.9865 0 10.9973 0H11ZM10.0141 1.98275H11.0014C13.9384 1.98275 14.2863 1.99238 15.4454 2.046C16.5179 2.09413 17.1009 2.27425 17.4886 2.42412C18.0015 2.6235 18.3686 2.86275 18.7536 3.24775C19.1386 3.63275 19.3765 3.9985 19.5759 4.51275C19.7271 4.89913 19.9059 5.48213 19.954 6.55463C20.0076 7.71375 20.0186 8.06163 20.0186 10.9973C20.0186 13.9329 20.0076 14.2821 19.954 15.4412C19.9059 16.5138 19.7257 17.0954 19.5759 17.4831C19.3983 17.9601 19.117 18.3917 18.7522 18.7467C18.3672 19.1318 18.0015 19.3696 17.4873 19.569C17.1023 19.7203 16.5192 19.899 15.4454 19.9485C14.2863 20.0007 13.9384 20.0131 11.0014 20.0131C8.06438 20.0131 7.71513 20.0007 6.556 19.9485C5.4835 19.899 4.90188 19.7203 4.51412 19.569C4.03677 19.392 3.6047 19.1111 3.24913 18.7467C2.88375 18.3915 2.60195 17.9594 2.42412 17.4818C2.27425 17.0954 2.09413 16.5124 2.046 15.4399C1.99375 14.2808 1.98275 13.9329 1.98275 10.9945C1.98275 8.05612 1.99375 7.711 2.046 6.55187C2.0955 5.47937 2.27425 4.89638 2.4255 4.50863C2.62488 3.99575 2.86412 3.62862 3.24913 3.24362C3.63412 2.85862 3.99988 2.62075 4.51412 2.42138C4.90188 2.27013 5.4835 2.09138 6.556 2.04188C7.57075 1.99513 7.964 1.98138 10.0141 1.98V1.98275ZM16.8726 3.80875C16.6993 3.80875 16.5276 3.84289 16.3675 3.90923C16.2073 3.97557 16.0618 4.0728 15.9392 4.19537C15.8167 4.31794 15.7194 4.46346 15.6531 4.62361C15.5868 4.78376 15.5526 4.95541 15.5526 5.12875C15.5526 5.30209 15.5868 5.47374 15.6531 5.63389C15.7194 5.79404 15.8167 5.93956 15.9392 6.06213C16.0618 6.1847 16.2073 6.28193 16.3675 6.34827C16.5276 6.41461 16.6993 6.44875 16.8726 6.44875C17.2227 6.44875 17.5585 6.30968 17.806 6.06213C18.0536 5.81458 18.1926 5.47884 18.1926 5.12875C18.1926 4.77866 18.0536 4.44292 17.806 4.19537C17.5585 3.94782 17.2227 3.80875 16.8726 3.80875ZM11.0014 5.3515C10.2521 5.33981 9.50798 5.47729 8.81234 5.75594C8.11671 6.0346 7.48346 6.44885 6.94946 6.97458C6.41546 7.50032 5.99138 8.12703 5.70191 8.81823C5.41244 9.50944 5.26336 10.2513 5.26336 11.0007C5.26336 11.7501 5.41244 12.4919 5.70191 13.1831C5.99138 13.8743 6.41546 14.5011 6.94946 15.0268C7.48346 15.5525 8.11671 15.9668 8.81234 16.2454C9.50798 16.5241 10.2521 16.6616 11.0014 16.6499C12.4844 16.6267 13.8988 16.0214 14.9393 14.9645C15.9799 13.9076 16.5631 12.4839 16.5631 11.0007C16.5631 9.51751 15.9799 8.09382 14.9393 7.03691C13.8988 5.97999 12.4844 5.37464 11.0014 5.3515ZM11.0014 7.33288C11.4829 7.33288 11.9598 7.42773 12.4047 7.61202C12.8496 7.79631 13.2539 8.06643 13.5944 8.40695C13.9349 8.74747 14.2051 9.15174 14.3894 9.59665C14.5736 10.0416 14.6685 10.5184 14.6685 11C14.6685 11.4816 14.5736 11.9584 14.3894 12.4033C14.2051 12.8483 13.9349 13.2525 13.5944 13.593C13.2539 13.9336 12.8496 14.2037 12.4047 14.388C11.9598 14.5723 11.4829 14.6671 11.0014 14.6671C10.0288 14.6671 9.09605 14.2808 8.40833 13.593C7.72061 12.9053 7.33425 11.9726 7.33425 11C7.33425 10.0274 7.72061 9.09467 8.40833 8.40695C9.09605 7.71923 10.0288 7.33288 11.0014 7.33288Z"
                fill="#ffffff"
            ></path>
        </g>
        <defs>
            <clipPath id="clip0_297_3051">
                <rect width="22" height="22" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
);

const Footer = () => {
    return (
        <footer className="w-full px-5 md:px-16">
            <div className="from-cod-gray-700 to-bay-of-many-600 relative mt-5 mb-8 flex h-auto flex-col justify-between overflow-hidden rounded-[35px] border border-[#757575] bg-gradient-to-br p-4 pb-0 text-white md:h-[683px]">
                {/* Background Grid Pattern */}
                {/* Left Floating Element: Social Media Integrations */}
                <div className="absolute -bottom-44 -left-36 z-0 hidden rotate-[20deg] md:-bottom-40 md:-left-20 md:z-10 xl:block [&>*]:scale-50 md:[&>*]:scale-100">
                    <div className="relative h-[439px] w-[405px]">
                        <img
                            alt="Social Media Shape"
                            loading="lazy"
                            width="405"
                            height="439"
                            className="absolute top-0 left-0 -z-10 rounded-2xl"
                            style={{ color: 'transparent' }}
                            src="https://res.cloudinary.com/dj046hh4m/image/upload/v1753978523/Social_Media_nln4ij.svg"
                        />
                        <p className="absolute top-[70px] left-16 z-10 font-medium text-cod-gray-950">
                            Social Media Integrations
                        </p>
                        <div className="absolute left-10 -z-1 mt-7 flex h-[439px] w-[405px]">
                            <img
                                alt="discord"
                                loading="lazy"
                                width="200"
                                height="200"
                                className="rotate-[-16deg] rounded-2xl"
                                style={{ color: 'transparent' }}
                                src="https://res.cloudinary.com/dj046hh4m/image/upload/v1753978518/discord_cyjd8m.svg"
                            />
                            <img
                                alt="instagram"
                                loading="lazy"
                                width="200"
                                height="200"
                                className="ml-[-155px] rotate-[7deg] rounded-2xl"
                                style={{ color: 'transparent' }}
                                src="https://res.cloudinary.com/dj046hh4m/image/upload/v1753978500/insta_tx0uqm.svg"
                            />
                            <img
                                alt="facebook"
                                loading="lazy"
                                width="200"
                                height="200"
                                className="ml-[-125px] rotate-[-10deg] rounded-2xl"
                                style={{ color: 'transparent' }}
                                src="https://res.cloudinary.com/dj046hh4m/image/upload/v1753978516/fb_l8kogu.svg"
                            />
                            <img
                                alt="linkedin"
                                loading="lazy"
                                width="200"
                                height="200"
                                className="ml-[-150px] rotate-[12deg] rounded-2xl"
                                style={{ color: 'transparent' }}
                                src="https://res.cloudinary.com/dj046hh4m/image/upload/v1753978512/in_ucovv5.svg"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Floating Element: Interview Cards */}
                <div className="absolute -right-36 -bottom-48 -z-10 hidden rotate-[-10deg] md:-right-10 md:-bottom-36 md:z-10 xl:block [&>*]:scale-50 md:[&>*]:scale-100">
                    <div className="relative h-[439px] w-[400px]">
                        <img
                            alt="Card Shape"
                            loading="lazy"
                            width="405"
                            height="439"
                            className="absolute top-0 left-0 -z-10 rounded-2xl"
                            style={{ color: 'transparent' }}
                            src="https://res.cloudinary.com/dj046hh4m/image/upload/v1753978523/Social_Media_nln4ij.svg"
                        />
                        <img
                            alt="Card Shape"
                            loading="lazy"
                            width="75"
                            height="150"
                            className="absolute -top-10 left-10 -z-10 rounded-2xl"
                            style={{ color: 'transparent' }}
                            src="https://res.cloudinary.com/dj046hh4m/image/upload/v1753980107/paper_clip_fvtagh.webp"
                        />
                        <div className="absolute left-12 z-[-1px] mt-24 flex h-[439px] w-[300px] flex-col gap-4">
                            {/* Interview Card 1 */}
                            <div className="flex h-20 w-[300px] items-center justify-between rounded-xl bg-white p-4 shadow-[0px_3px_8px_-1px_#3232470D,0px_0px_1px_0px_#0C1A4B3D]">
                                <div className="flex items-center">
                                    <div className="relative h-[50px] w-[50px]">
                                        <img
                                            alt="avatar"
                                            loading="lazy"
                                            width="50"
                                            height="50"
                                            className="rounded-full"
                                            style={{ color: 'transparent' }}
                                            src="https://placehold.co/50x50/A0AEC0/FFFFFF?text=M"
                                        />
                                    </div>
                                    <div className="ml-4 grid text-black/80">
                                        <h1 className="font-semibold">
                                            Manu's Interview
                                        </h1>
                                        <p className="text-sm font-normal">
                                            Candidate is mid.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <MoreIcon />
                                </div>
                            </div>
                            {/* Interview Card 2 */}
                            <div className="flex h-20 w-[300px] items-center justify-between rounded-xl bg-white p-4 shadow-[0px_3px_8px_-1px_#3232470D,0px_0px_1px_0px_#0C1A4B3D]">
                                <div className="flex items-center">
                                    <div className="relative h-[50px] w-[50px]">
                                        <img
                                            alt="avatar"
                                            loading="lazy"
                                            width="50"
                                            height="50"
                                            className="rounded-full"
                                            style={{ color: 'transparent' }}
                                            src="https://placehold.co/50x50/F56565/FFFFFF?text=R"
                                        />
                                    </div>
                                    <div className="ml-4 grid text-black/85">
                                        <h1 className="font-semibold">
                                            Ruru's Interview
                                        </h1>
                                        <p className="text-sm font-normal">
                                            Candidate is good.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <MoreIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content and Footer Links */}
                <div className="flex flex-col xl:flex-row z-1">
                    <div className="w-full p-2 md:p-9 xl:w-[740px]">
                        <div className="flex items-center gap-1">
                            <Logo />
                            <label className="text-3xl font-semibold">
                                Veridian Devs.
                            </label>
                        </div>
                        <p className="mt-4 w-full text-lg font-bold md:mt-9 md:w-[700px] md:text-3xl md:leading-[54px] lg:text-5xl">
                            Crafting digital experiences that empower businesses.
                        </p>
                    </div>
                    <div className="flex w-full items-center justify-start md:px-10 xl:justify-end xl:px-0">
                        <div className="mt-10 mr-10 grid w-[80%] grid-cols-2 justify-end gap-x-20 gap-y-10 px-2 md:w-1/2 md:grid-cols-2 md:gap-10 xl:mt-32">
                            <div className="flex flex-col gap-4">
                                <h1 className="font-extrabold">Pages</h1>
                                <Link
                                    className="font-normal text-nowrap text-white/80"
                                    href="/"
                                >
                                    All Products
                                </Link>
                                <Link
                                    className="font-normal text-nowrap text-white/80"
                                    href="/"
                                >
                                    Studio
                                </Link>
                                <Link
                                    className="font-normal text-nowrap text-white/80"
                                    href="/"
                                >
                                    Clients
                                </Link>
                                <Link
                                    className="font-normal text-nowrap text-white/80"
                                    href="/"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    className="font-normal text-nowrap text-white/80"
                                    href="/"
                                >
                                    Blog
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h1 className="font-extrabold">Legal</h1>
                                <Link
                                    className="font-normal text-nowrap text-white/80"
                                    href="/"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    className="font-normal text-nowrap text-white/80"
                                    href="/"
                                >
                                    Terms of Service
                                </Link>
                                <Link
                                    className="font-normal text-nowrap text-white/80"
                                    href="/"
                                >
                                    Cookie Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar with Copyright and Social Icons */}
                <div className="mt-auto w-full">
                    <div className="mt-10 h-1 w-full border-t border-dashed border-[#CCCCCC] xl:mt-10"></div>
                    <div className="mb-4 flex h-20 items-center justify-center gap-2 md:mb-0 md:gap-10">
                        <p className="text-xs font-normal text-nowrap text-white md:text-lg">
                            © {new Date().getFullYear()} All
                            rights reserved.
                        </p>
                        <div className="flex scale-75 gap-3 md:gap-5 [&>*]:md:scale-100">
                            <Link
                                href="https://twitter.com/veridiandevs"
                                aria-label="Twitter"
                            >
                                <TwitterIcon />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/veridian-devs"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon />
                            </Link>
                            <Link
                                href="https://github.com/veridian-devs"
                                aria-label="GitHub"
                            >
                                <GithubIcon />
                            </Link>
                            <Link
                                href="https://instagram.com/veridiandevs"
                                aria-label="Instagram"
                            >
                                <InstagramIcon />
                            </Link>
                        </div>
                    </div>
                </div>
                <DotPattern className="z-0 text-white/80" />
            </div>
        </footer>
    );
};

export default Footer;
