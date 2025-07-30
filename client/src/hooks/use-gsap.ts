import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from './use-isomorphic-effect';
import { useRef } from 'react';

export const useGSAP = () => {
  const ctx = useRef<gsap.Context>();
  const root = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      ctx.current = gsap.context(() => {}, root);
    }
    return () => ctx.current?.revert();
  }, []);

  return { gsap, context: ctx.current, root };
};
