"use client"
import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import {MotionPathHelper} from 'gsap-trial/MotionPathHelper';
import {CustomEase} from 'gsap/CustomEase';
import {Icon} from "@/components/Icon";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(
    MotionPathHelper,
    MotionPathPlugin,
    ScrollTrigger
);
const circularPath = "M-306.92,6.323 C-306.92,-55.035 -113.133,-116.538 24.866,-116.538 153.841,-116.538 336.37,-59.208 340.197,23.694 343.745,101.341 231.546,162.159 20.577,162.159 -171.334,162.159 -301.881,98.177 -301.893,17.512"
const RotatingIcons: React.FC = () => {
    const iconRef = useRef<HTMLDivElement>(null);
    const computerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!iconRef.current) return;
        const icons = iconRef.current.querySelectorAll('img');
        const duration = 2;
        icons.forEach((icon, index) => {
            gsap!.to(icon, {
                duration,
                repeat: -1,
                ease: CustomEase.create("custom", "M0,0 C0,0 0.09,0.09 0.216,0.216 0.312,0.312 0.355,0.464 0.47,0.579 0.564,0.673 0.731,0.731 0.808,0.808 0.921,0.921 1,1 1,1 "),
                motionPath: {
                    path: circularPath,
                },
                onStart: function () {
                    this.progress((index / icons.length) || 1);
                },
            });
        });
    }, []);
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
            <div ref={computerRef}
                 className="relative mt-32 w-[400px] h-[250px] bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="w-[350px] h-[200px] bg-black rounded-md">
                </div>
            </div>
        </>
    )
        ;
};

export default RotatingIcons;
