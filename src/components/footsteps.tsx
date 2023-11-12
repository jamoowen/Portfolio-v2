'use client'
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Animation = () => {


    return (
        <>
            <defs>
                <mask id="theMask" maskUnits="userSpaceOnUse">
                    <path id="maskPath" d="M743,354C712.62,561.11,520.11,704.38,313,674,147.31,649.7,32.7,495.69,57,330,76.44,197.45,199.65,105.76,332.2,125.2c106,15.55,179.39,114.12,163.84,220.16A155.25,155.25,0,0,1,319.91,476.43a124.2,124.2,0,0,1-104.86-140.9,99.37,99.37,0,0,1,112.73-83.89,79.49,79.49,0,0,1,67.11,90.18,63.6,63.6,0,0,1-72.15,53.69,50.89,50.89,0,0,1-42.95-57.72" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="10" />
                </mask>
            </defs>
            <g id="maskReveal" mask="url(#theMask)">
                <path id="dashedPath" d="M736.08,389.48C690.17,577.19,508.06,702.61,313,674,147.31,649.7,32.7,495.69,57,330,76.44,197.45,199.65,105.76,332.2,125.2c106,15.55,179.39,114.12,163.84,220.16A155.25,155.25,0,0,1,319.91,476.43a124.2,124.2,0,0,1-104.86-140.9,99.37,99.37,0,0,1,112.73-83.89,79.49,79.49,0,0,1,67.11,90.18,63.6,63.6,0,0,1-72.15,53.69A50.88,50.88,0,0,1,282,361.56" fill="none" stroke="#5cceee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="8" stroke-dasharray="24 24" />
            </g>
        </>
    )

}


export default Animation;

