import React from 'react';
import useBreakpoint from '../../hooks/useBreakpoint';

type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | '';

const Hidden = ({children, hiddenFor}: {children: JSX.Element, hiddenFor: Breakpoints[]}) => {
  const { breakpoint: currentBreakpoint } = useBreakpoint();

  if(hiddenFor.includes(currentBreakpoint)) return null;

  return (
    <React.Fragment>
        {children}
    </React.Fragment>
  )
};

export default Hidden;