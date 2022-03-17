import React from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'framer-motion';

const Initial = 192;

const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
}

const MobileSidebar = () => {
    const x = useMotionValue(Initial);
    const controls = useAnimation();
    const input = [Initial, 0];
    const opacity = useTransform(x, input, [0, 1]);
    const zIndex = useTransform(x, input, [-2, 88888]);
    const backgroundColor = useTransform(x, input, ['#1DA57A', 'rgba(255, 255, 255, 0.6)']);

    function panHandler(pointInfo: any) {

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

    return (
        <React.Fragment>
            <motion.div className="mobile__sidebar bg__gredient"
                style={{ opacity, zIndex }}>
            </motion.div>

            <motion.div className='draggable'
                style={{ x }}
                transition={{ spring, duration: 0.8 }}
                animate={controls}>

                <motion.div className="handler"
                    style={{backgroundColor}}
                    whileTap={{ scale: 1.12 }}
                    onPan={(e, pointInfo) => panHandler(pointInfo)}
                    onPanEnd={(e, pointInfo) => panEndHandler(pointInfo)}></motion.div>

                <div className="mobile__sidebar__content">
                    fff
                </div>

            </motion.div>
        </React.Fragment>

    )
}

export default MobileSidebar;