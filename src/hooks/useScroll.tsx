import { useState, useEffect } from "react";

/**
 * Custom React Hook. Shamelessly stolen from https://dev.to/pratiksharm/navbar-hide-and-show-on-scroll-using-custom-react-hooks-1k98
 * Usage:
 *  const {scrollX, scrollY, scrollDirection} = useScroll();
 */
export function useScroll(){
    const [lastScrollTop, setLastScrollTop] = useState<number>(0)
    const [bodyOffset, setBodyOffset] = useState(
        document.body.getBoundingClientRect()
    )
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [scrollX, setScrollX] = useState(bodyOffset.left);
    const [scrollDirection, setScrollDirection] = useState<"up"|"down">(undefined);

    const listener = (_e:unknown) => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollX(bodyOffset.left);
        setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
        setLastScrollTop(-bodyOffset.top);
      };
   
      useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
          window.removeEventListener("scroll", listener);
        };
      });
   
      return {
        scrollX,
        scrollY,
        scrollDirection
      };
}