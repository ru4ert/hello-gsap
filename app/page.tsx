"use client"
import {useRef} from "react";
import FallingIcons from "@/components/FallingIcons";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div className="flex flex-col" ref={containerRef}>
            <FallingIcons containerRef={containerRef}/>
            {/*<RotatingIcons containerRef={containerRef}/>*/}
        </div>
    );
}
