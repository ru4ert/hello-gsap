"use client"
import RotatingIcons from "@/components/RotatingIcons";
import {useRef} from "react";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div className="flex flex-col" ref={containerRef}>
            <RotatingIcons containerRef={containerRef}/>
        </div>
    );
}
