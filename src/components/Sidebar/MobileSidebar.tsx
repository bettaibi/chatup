import React from 'react';

import {
    Box,
        
} from '@mui/material';
import { motion, useMotionValue, useAnimation, useTransform } from 'framer-motion';

import "./mobileSidebar.scss";
import Navigations from './Navigations';

const Initial = 174;

const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
};


const MobileSidebar = ({isMobile}: {isMobile: boolean}) => {
    const x = useMotionValue(Initial);
    const controls = useAnimation();
    const input = [Initial, 0];
    const opacity = useTransform(x, input, [0, 1]);
    const zIndex = useTransform(x, input, [-2, 88888]);
    const backgroundColor = useTransform(x, input, ['#1DA57A', 'rgba(255, 255, 255, 0.6)']);

    function panHandler(e: any, pointInfo: any) {
        e.stopPropagation();
        if (pointInfo.offset.x < 0) {
            const diff = Initial - Math.abs(pointInfo.offset.x);
            if (x.get() <= 0) {
                x.set(0);
                return;
            }
            else {
                x.set(diff)
            }
        }
        if (pointInfo.offset.x > 0) {
            const diff = pointInfo.offset.x - Initial;

            if (x.get() >= (Initial - 10)) {
                return;
            }

            if (diff < 0) {
                x.set(Initial + diff);
                return;
            }

            if (diff > 0 && diff < Initial) {
                x.set(diff);
            }
        }
    }

    function panEndHandler(pointInfo: any) {
        if (x.get() > 100) {
            controls.start({
                x: Initial
            });
        }
        else {
            controls.start({
                x: 0
            });
        }
    }

    const closeHandler = React.useCallback(() => {
        if (x.get() === 0) {
            controls.start({
                x: Initial
            });
        }
    }, []);

  return (
     <React.Fragment>
     <motion.div className="sidebar__wrapper bg__gradient"
         style={{ opacity, zIndex }}
         onTap={() => closeHandler()} />

     <motion.div className='draggable'
         style={{ x }}
         transition={{ spring, duration: 0.5 }}
         animate={controls}>

         <motion.div className="handler__container"
         whileTap={{ scale: 1.12 }}
         onPan={(e, pointInfo) => panHandler(e, pointInfo)}
         onPanEnd={(e, pointInfo) => panEndHandler(pointInfo)}>
             <motion.div className="handler"
                 style={{ backgroundColor }} />
         </motion.div>

         <Box>
            <Box className="glass__blur b__radius" p={2}
            sx={{width: '100%', minWidth: '100%',  maxHeight: '95vh', height: 'auto', overflow: 'auto'}} >
                <Navigations isMobile = {isMobile} closeHandler = {closeHandler} />
            </Box>
         </Box>

     </motion.div>
 </React.Fragment>
  )
}

export default MobileSidebar;