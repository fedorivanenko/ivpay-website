/**
 * Easing function. We can not use easeIn/easeOut from framer-motion because it breaks server components
 */
const easeIn = [0.42, 0, 1, 1];

/**
 * Easing function. We can not use easeIn/easeOut from framer-motion because it breaks server components
 */
const easeOut = [0, 0, 0.58, 1];

export const defaultDuration: number = 0.75

export const cardAppearing = {
    hiddenToTop: {
        opacity: 0,
        scale: 0.9,
        y: -20,
        transition: {
            duration: defaultDuration,
            delayChildren: 0.1,
            //staggerChildren: defaultDuration/5,
            //staggerDirection: -1,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: {
            duration: defaultDuration,
            delayChildren: 0.1,
            //staggerChildren: defaultDuration/5,
            //staggerDirection: 1,
            ease: easeIn
        }
    },
    visibleFromTop: {
        opacity: [0, 0.75, 1],
        scale: [0.9, 1, 1],
        y: [-20, 0, 0],
        transition: {
            duration: defaultDuration,
            delayChildren: 0.1,
            //staggerChildren: defaultDuration/5,
            //staggerDirection: -1,
            ease: easeOut
        }
    },
    visibleFromBottom: {
        opacity: [0, 0.75, 1],
        scale: [0.9, 1, 1],
        y: [20, 0, 0],
        transition: {
            duration: defaultDuration,
            times: [0, 0.6, 1],
            delayChildren: 0.1,
            //staggerChildren: defaultDuration/5,
            //staggerDirection: 1,
            ease: easeOut
        }
    }
};

export const contentAppearing = {
    hiddenToTop: {
        opacity: 0,
        y: -12,
        transition: {
            duration: defaultDuration,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        opacity: 0,
        y: 12,
        transition: {
            duration: defaultDuration,
            ease: easeIn
        }
    },
    visibleFromBottom: {
        opacity: 1,
        y: 0,
        transition: {
            duration: defaultDuration,
            ease: easeOut
        }
    },
    visibleFromTop: {
        opacity: 1,
        y: 0,
        transition: {
            duration: defaultDuration,
            ease: easeOut
        }
    }
};

//
export const staggerChildren = {
    visibleFromBottom: {
        transition: {
            staggerChildren: defaultDuration / 5,
            staggerDirection: 1,
        }
    },
    visibleFromTop: {
        transition: {
            staggerChildren: defaultDuration / 5,
            staggerDirection: -1,
        }
    },
    hiddenToTop: {
        transition: {
            staggerChildren: defaultDuration / 5,
            staggerDirection: -1,
        }
    },
    hiddenToBottom: {
        transition: {
            staggerChildren: defaultDuration / 5,
            staggerDirection: 1,
        }
    }
};

export const textStaggerChildren = {
    visibleFromBottom: (amount: number) => ({
        transition: {
            staggerChildren: (defaultDuration * 0.35) / amount,
            staggerDirection: 1,
        }
    }),
    visibleFromTop: (amount: number) => ({
        transition: {
            staggerChildren: (defaultDuration * 0.35) / amount,
            staggerDirection: -1,
        }
    }),
    hiddenToTop: (amount: number) => ({
        transition: {
            staggerChildren: (defaultDuration * 0.35) / amount,
            staggerDirection: 1,
        }
    }),
    hiddenToBottom: (amount: number) => ({
        transition: {
            staggerChildren: (defaultDuration * 0.35) / amount,
            staggerDirection: -1,
        }
    })
};

export const textAppearing = {
    visibleFromBottom: {
        opacity: 1,
        //y: 0,
        transition: {
            duration: defaultDuration / 3,
            ease: easeIn
        }
    },
    visibleFromTop: {
        opacity: 1,
        //y: 0,
        transition: {
            duration: defaultDuration / 3,
            ease: easeIn
        }
    },
    hiddenToTop: {
        opacity: 0,
        //y: '-0.2em',
        transition: {
            duration: defaultDuration / 3,
            ease: easeIn
        }

    },
    hiddenToBottom: {
        opacity: 0,
        //y: '0.2em',
        transition: {
            duration: defaultDuration / 3,
            ease: easeIn
        }
    }
};

export const separatorVariantH = {
    hiddenToTop: {
        scaleX: 0,
        transition: {
            duration: defaultDuration,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        scaleX: 0,
        transition: {
            duration: defaultDuration,
            ease: easeIn
        }
    },
    visibleFromBottom: {
        scaleX: 1,
        transition: {
            duration: defaultDuration,
            ease: easeOut
        }
    },
    visibleFromTop: {
        scaleX: 1,
        transition: {
            duration: defaultDuration,
            ease: easeOut
        }
    },
};

export const separatorVariantV = {
    hiddenToTop: {
        scaleY: 0,
        transition: {
            duration: defaultDuration,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        scaleY: 0,
        transition: {
            duration: defaultDuration,
            ease: easeIn
        }
    },
    visibleFromBottom: {
        scaleY: 1,
        transition: {
            duration: defaultDuration,
            ease: easeOut
        }
    },
    visibleFromTop: {
        scaleY: 1,
        transition: {
            duration: defaultDuration,
            ease: easeOut
        }
    }
};

export const popLayoutVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
        }
    }
};

export const imageAppearingVariant = {
    hiddenToTop: {
        opacity: 0,
        y: -12,
        maskImage: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)",
        transition: {
            duration: defaultDuration*1.25,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        opacity: 0,
        y: 12,
        maskImage: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)",
        transition: {
            duration: defaultDuration*1.25,
            ease: easeIn
        }
    },
    visibleFromBottom: {
        opacity: 1,
        y: 0,
        maskImage: "linear-gradient(135deg, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)",
        transition: {
            duration: defaultDuration*1.25,
            ease: easeOut
        }
    },
    visibleFromTop: {
        opacity: 1,
        y: 0,
        maskImage: "linear-gradient(135deg, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)",
        transition: {
            duration: defaultDuration*1.25,
            ease: easeOut
        }
    },
};