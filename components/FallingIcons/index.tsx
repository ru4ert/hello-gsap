"use client"
import React, {useRef} from 'react';
import {gsap} from 'gsap';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import {MotionPathHelper} from 'gsap-trial/MotionPathHelper';
import {CustomEase} from 'gsap/CustomEase';
import {Icon} from "@/components/Icon";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Image from "next/image";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(
    MotionPathHelper,
    MotionPathPlugin,
    ScrollTrigger
);
const circularPath = "M25.673,57.588 C46.361,136.345 33.171,151.153 163.189,197.387 279.123,238.613 339.011,332.47 342.845,415.427 346.386,493.052 369.946,557.209 158.998,557.209 -32.889,557.209 1.045,919.334 1.004,838.702"
const circularPath2 = "M21.521,60.22 C42.209,138.977 -89.74,89.569 -197.63,175.593 -338.822,288.17 -288.4,299.08 -284.568,382.039 -281.027,459.664 -233.528,528.19 -199.736,538.715 15.525,605.761 -3.107,921.966 -3.148,841.334"
const circularPath3 = "M21.521,60.22 C42.209,138.977 -9.804,157.828 -14.364,165.594 -105.776,321.275 78.123,279.101 81.956,362.061 85.501,439.686 -25.642,494.572 -16.453,528.753 -11.613,546.756 -3.107,921.966 -3.148,841.334 "
type FallingIconsProps = {
    containerRef: React.RefObject<HTMLDivElement>;
}
const FallingIcons: React.FC<FallingIconsProps> = ((props) => {
    const iconRef = useRef<HTMLDivElement>(null);
    const trashRef = useRef<HTMLImageElement>(null);

    useGSAP(
        () => {
            if (!iconRef.current) return;
            const icons = iconRef.current.querySelectorAll('img');
            icons.forEach((icon, index) => {
                const start = 80 - (index * 9);
                const end = 50 + (index * 2);
                const path = index % 3 === 0 ? circularPath : index % 2 === 0 ? circularPath2 : circularPath3;
               gsap!.to(icon, {
                    markers: true,
                    scrollTrigger: {
                        trigger: trashRef.current,
                        start: `top ${start}%`,
                        end: `center ${end}%`,
                        scrub: 0.5,
                         snap: 0.5
                    },
                    motionPath: {
                        path,

                    },
                    keyframes: [
                        {scale: 1},
                        {scale: 2},
                        {scale: 1.7},
                    ],

                });
            });
        },
        {dependencies: [], scope: props.containerRef}
    );

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="relative w-[300px] h-[300px]">
                    <div ref={iconRef}
                         className="absolute inset-0 flex items-center justify-center">
                        <Icon
                            className="absolute"
                            name="docker" width={50} height={50}/>
                        <Icon
                            className="absolute"
                            name="java" width={50} height={50}/>
                        <Icon
                            className="absolute"
                            name="nextjs" width={50} height={50}/>
                        <Icon
                            className="absolute"
                            name="grafana" width={50} height={50}/>
                        <Icon
                            className="absolute"
                            name="typescript" width={50} height={50}/>
                        <Icon
                            className="absolute"
                            name="kubernetes" width={50} height={50}/>
                    </div>
                </div>
            </div>
            <div className="bg-blue-100 min-h-screen grid">
                <Image src="/assets/trash.png"
                       className="m-auto" ref={trashRef}
                       alt="trash" width={500} height={320}/>
            </div>
        </>
    )
});

FallingIcons.displayName = 'RotatingIcons';

export default FallingIcons;
