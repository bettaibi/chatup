import React from 'react';
import throttle from 'lodash.throttle';

type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | '';

function useBreakpoint() {
    const [breakpoint, setBreakpoint] = React.useState<Breakpoints>('');

    React.useEffect(() => {
        window.addEventListener('resize', computeInnerWidth);

        return () => {
            window.removeEventListener('resize', computeInnerWidth);
        };
    }, []);

    React.useEffect(() => {
        const bk = getDeviceConfig(window.innerWidth);
        setBreakpoint(bk as Breakpoints);
    }, []);

    const computeInnerWidth = throttle(function () {
        const bk = getDeviceConfig(window.innerWidth);
        setBreakpoint(bk as Breakpoints);
    }, 200);

    function getDeviceConfig(width: number): string {

        switch (true) {
            case (width < 576): return "xs";
            case (width >= 576 && width <= 768): return "sm";
            case (width > 768 && width <= 992) : return "md";
            case (width > 992): return "lg";
            default: return '';
        }
    }

    return {
        breakpoint
    }
}

export default useBreakpoint;