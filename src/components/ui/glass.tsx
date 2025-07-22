"use client";

import React, {
    useEffect,
    useRef,
    useState,
    useId,
    useMemo,
    useCallback,
} from "react";

// The props interface remains the same
export interface GlassSurfaceProps {
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    borderWidth?: number;
    brightness?: number;
    opacity?: number;
    blur?: number;
    displace?: number;
    backgroundOpacity?: number;
    saturation?: number;
    distortionScale?: number;
    redOffset?: number;
    greenOffset?: number;
    blueOffset?: number;
    xChannel?: "R" | "G" | "B";
    yChannel?: "R" | "G" | "B";
    mixBlendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity"
    | "plus-darker"
    | "plus-lighter";
    className?: string;
    style?: React.CSSProperties;
}

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
        setIsDark(mediaQuery.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);
    return isDark;
};

const GlassSurface: React.FC<GlassSurfaceProps> = ({
    children,
    width = 200,
    height = 64,
    borderRadius = 20,
    borderWidth = 0.07,
    brightness = 50,
    opacity = 0.93,
    blur = 11,
    displace = 0,
    backgroundOpacity = 0,
    saturation = 1,
    distortionScale = -180,
    redOffset = 0,
    greenOffset = 10,
    blueOffset = 20,
    xChannel = "R",
    yChannel = "G",
    mixBlendMode = "difference",
    className = "",
    style = {},
}) => {
    const uniqueId = useId().replace(/:/g, "-");
    const filterId = `glass-filter-${uniqueId}`;
    const redGradId = `red-grad-${uniqueId}`;
    const blueGradId = `blue-grad-${uniqueId}`;

    const containerRef = useRef<HTMLDivElement>(null);
    const feImageRef = useRef<SVGFEImageElement>(null);
    const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
    const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
    const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
    const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

    const isDarkMode = useDarkMode();

    const [isSvgSupported, setIsSvgSupported] = useState(false);
    const [isBackdropSupported, setIsBackdropSupported] = useState(false);

    useEffect(() => {
        const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        const isFirefox = /Firefox/.test(navigator.userAgent);
        let svgSupport = false;
        if (!isWebkit && !isFirefox) {
            const div = document.createElement("div");
            div.style.backdropFilter = `url(#${filterId})`;
            svgSupport = div.style.backdropFilter !== "";
        }
        setIsSvgSupported(svgSupport);

        setIsBackdropSupported(CSS.supports("backdrop-filter", "blur(10px)"));
    }, [filterId]);

    const updateDisplacementMap = useCallback(() => {
        if (!containerRef.current || !feImageRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const actualWidth = rect.width;
        const actualHeight = rect.height;
        if (actualWidth === 0 || actualHeight === 0) return;

        const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

        const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;

        const dataUrl = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
        feImageRef.current.setAttribute("href", dataUrl);
    }, [
        borderRadius,
        borderWidth,
        brightness,
        opacity,
        blur,
        mixBlendMode,
        redGradId,
        blueGradId,
    ]);

    useEffect(() => {
        updateDisplacementMap();

        const attributes = [
            { ref: redChannelRef, offset: redOffset },
            { ref: greenChannelRef, offset: greenOffset },
            { ref: blueChannelRef, offset: blueOffset },
        ];

        attributes.forEach(({ ref, offset }) => {
            if (ref.current) {
                ref.current.setAttribute("scale", (distortionScale + offset).toString());
                ref.current.setAttribute("xChannelSelector", xChannel);
                ref.current.setAttribute("yChannelSelector", yChannel);
            }
        });

        if (gaussianBlurRef.current) {
            gaussianBlurRef.current.setAttribute("stdDeviation", displace.toString());
        }
    }, [
        updateDisplacementMap,
        displace,
        distortionScale,
        redOffset,
        greenOffset,
        blueOffset,
        xChannel,
        yChannel,
    ]);

    useEffect(() => {
        if (!containerRef.current) return;
        const handleResize = () => setTimeout(updateDisplacementMap, 0);
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, [updateDisplacementMap]);

    const containerStyles = useMemo((): React.CSSProperties => {
        const baseStyles: React.CSSProperties = {
            ...style,
            width: typeof width === "number" ? `${width}px` : width,
            height: typeof height === "number" ? `${height}px` : height,
            borderRadius: `${borderRadius}px`,
        };

        if (isSvgSupported) {
            return {
                ...baseStyles,
                background: `hsl(0 0% ${isDarkMode ? "0%" : "100%"} / ${backgroundOpacity})`,
                backdropFilter: `url(#${filterId}) saturate(${saturation})`,
            };
        }

        if (isDarkMode) {
            return !isBackdropSupported ? {
                ...baseStyles,
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
            } : {
                ...baseStyles,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px) saturate(1.8) brightness(1.2)",
            };
        } else {
            return !isBackdropSupported ? {
                ...baseStyles,
                background: "rgba(255, 255, 255, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
            } : {
                ...baseStyles,
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(12px) saturate(1.8) brightness(1.1)",
            };
        }
    }, [
        style, width, height, borderRadius, isSvgSupported, isBackdropSupported,
        isDarkMode, backgroundOpacity, filterId, saturation
    ]);

    const glassSurfaceClasses =
        "relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out";
    const focusVisibleClasses = isDarkMode
        ? "focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2"
        : "focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2";

    return (
        <div
            ref={containerRef}
            className={`${glassSurfaceClasses} ${focusVisibleClasses} ${className}`}
            style={containerStyles}
        >
            <svg
                className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
                        <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
                        <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" result="dispRed" />
                        <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red" />
                        <feDisplacementMap ref={greenChannelRef} in="SourceGraphic" in2="map" result="dispGreen" />
                        <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="green" />
                        <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" result="dispBlue" />
                        <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="blue" />
                        <feBlend in="red" in2="green" mode="screen" result="rg" />
                        <feBlend in="rg" in2="blue" mode="screen" result="output" />
                        <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
                    </filter>
                </defs>
            </svg>
            <div className="flex items-center justify-between h-full md:max-w-7xl md:px-10 px-4 w-full rounded-[inherit] z-0 ">
                {children}
            </div>
        </div>
    );
};

export default GlassSurface;