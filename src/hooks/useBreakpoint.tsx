import React from 'react';
import throttle from 'lodash.throttle';

function useBreakpoint() {
    const [breakpoint, setBreakpoint] = React.useState<string>('');

    React.useEffect(() => {
        window.addEventListener('resize', computeInnerWidth);

        return () => {
            window.removeEventListener('resize', computeInnerWidth);
        };
    }, []);

    React.useEffect(() => {
        const bk = getDeviceConfig(window.innerWidth);
        setBreakpoint(bk);
    }, []);

    const computeInnerWidth = throttle(function () {
        const bk = getDeviceConfig(window.innerWidth);
        setBreakpoint(bk);
    }, 200);

    function getDeviceConfig(width: number): string {

        switch (true) {
            case (width < 576): return "xs";
            case (width >= 576 && width <= 720): return "sm";
            case (width > 720 && width < 1024) : return "md";
            case (width >= 1024): return "lg";
            default: return '';
        }
    }

    return {
        breakpoint
    }
}

export default useBreakpoint;