import { useGSAP as useBaseGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useGSAP = (callback: (ctx: any) => void, deps?: any[]) => {
  return useBaseGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    callback({ gsap, ScrollTrigger });
  }, deps);
};
