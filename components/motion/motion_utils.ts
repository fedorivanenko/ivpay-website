import { easeOut, easeIn } from "framer-motion"

const duration:number = 0.5

export const cardAppearing = {
    hiddenToTop: {
        opacity: 0,
        scale: 0.9,
        y: -20,
        transition: {
            duration: duration,
            delayChildren: 0.1,
            //staggerChildren: duration/5,
            //staggerDirection: -1,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: {
            duration: duration,
            delayChildren: 0.1,
            //staggerChildren: duration/5,
            //staggerDirection: 1,
            ease: easeIn
        }
    },
    visibleFromTop: {
        opacity: [0, 0.75, 1],
        scale: [0.9, 1, 1],
        y: [-20, 0, 0],
        transition: {
            duration: duration,
            delayChildren: 0.1,
            //staggerChildren: duration/5,
            //staggerDirection: -1,
            ease: easeOut
        }
    },
    visibleFromBottom: {
        opacity: [0, 0.75, 1],
        scale: [0.9, 1, 1],
        y: [20, 0, 0],
        transition: {
            duration: duration,
            times: [0, 0.6, 1],
            delayChildren: 0.1,
            //staggerChildren: duration/5,
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
            duration: duration,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        opacity: 0,
        y: 12,
        transition: {
            duration: duration,
            ease: easeIn
        }
    },
    visibleFromBottom: {
        opacity: 1,
        y: 0,
        transition: {
            duration: duration,
            ease: easeOut
        }
    },
    visibleFromTop: {
        opacity: 1,
        y: 0,
        transition: {
            duration: duration,
            ease: easeOut
        }
    }
};

//
export const staggerChildren = {
    visibleFromBottom: {
        transition: {
            staggerChildren: duration/5,
            staggerDirection: 1,
        }
    },
    visibleFromTop: {
        transition: {
            staggerChildren: duration/5,
            staggerDirection: -1,
        }
    },
    hiddenToTop: {
        transition: {
            staggerChildren: duration/5,
            staggerDirection: -1,
        }
    },
    hiddenToBottom: {
        transition: {
            staggerChildren: duration/5,
            staggerDirection: 1,
        }
    }
};

export const textStaggerChildren = {
    visibleFromBottom: (amount:number) => ({
        transition: {
            staggerChildren: (duration*0.35)/amount,
            staggerDirection: 1,
        }
    }),
    visibleFromTop: (amount:number) => ({
        transition: {
            staggerChildren: (duration*0.35)/amount,
            staggerDirection: -1,
        }
    }),
    hiddenToTop: (amount:number) => ({
        transition: {
            staggerChildren: (duration*0.35)/amount,
            staggerDirection: 1,
        }
    }),
    hiddenToBottom: (amount:number) => ({
        transition: {
            staggerChildren: (duration*0.35)/amount,
            staggerDirection: -1,
        }
    })
};

export const textAppearing = {
    visibleFromBottom: {
        opacity: 1,
        //y: 0,
        transition: {
            duration: duration/3,
            ease: easeIn
        }
    },
    visibleFromTop: {
        opacity: 1,
        //y: 0,
        transition: {
            duration: duration/3,
            ease: easeIn
        }
    },
    hiddenToTop: {
        opacity: 0,
        //y: '-0.2em',
        transition: {
            duration: duration/3,
            ease: easeIn
        }
        
    },
    hiddenToBottom: {
        opacity: 0,
        //y: '0.2em',
        transition: {
            duration: duration/3,
            ease: easeIn
        }
    }
};

export const separatorVariantH = {
    hiddenToTop: {
        scaleX: 0,
        transition: {
            duration: duration,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        scaleX: 0,
        transition: {
            duration: duration,
            ease: easeIn
        }
    },
    visibleFromBottom: {
        scaleX: 1,
        transition: {
            duration: duration,
            ease: easeOut
        }
    },
    visibleFromTop: {
        scaleX: 1,
        transition: {
            duration: duration,
            ease: easeOut
        }
    }
};

export const separatorVariantV = {
    hiddenToTop: {
        scaleY: 0,
        transition: {
            duration: duration,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        scaleY: 0,
        transition: {
            duration: duration,
            ease: easeIn
        }
    },
    visibleFromBottom: {
        scaleY: 1,
        transition: {
            duration: duration,
            ease: easeOut
        }
    },
    visibleFromTop: {
        scaleY: 1,
        transition: {
            duration: duration,
            ease: easeOut
        }
    }
};
