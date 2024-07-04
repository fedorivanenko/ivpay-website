import { easeOut, easeIn } from "framer-motion"

export const cardAppearing = {
    hiddenToTop: {
        opacity: 0,
        scale: 0.9,
        y: -20,
        transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            delayChildren: 0.05,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            delayChildren: 0.05,
            ease: easeIn
        }
    },
    visibleFromTop: {
        opacity: [0, 0.75, 1],
        scale: [0.9, 1, 1],
        y : [-20, 0, 0],
        transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            delayChildren: 0.05,
            ease: easeOut
        }
    },
    visibleFromBottom: {
        opacity: [0, 0.75, 1],
        scale: [0.9, 1, 1],
        y : [20, 0, 0],
        transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            delayChildren: 0.05,
            ease: easeOut
        }
    }
};

export const contentAppearing = {
    hiddenToTop: {
        opacity: [1, 0.8, 0],
        y : [0, 0, -12],
        transition: {
            duration: 0.75,
            times: [0, 0.6, 1],
            ease: easeIn
        }
    },
    hiddenToBottom: {
        opacity: [1, 0.8, 0],
        y : [0, 0, 12],
        transition: {
            duration: 0.75,
            times: [0, 0.6, 1],
            ease: easeIn
        }
    },
    visibleFromBottom: {
        opacity: [0, 0.8, 1],
        y : [12, 0, 0],
        transition: {
            duration: 0.75,
            times: [0, 0.6, 1],
            ease: easeOut
        }
    },
    visibleFromTop: {
        opacity: [0, 0.8, 1],
        y : [-12, 0, 0],
        transition: {
            duration: 0.75,
            times: [0, 0.6, 1],
            ease: easeOut
        }
    }
};

export const staggerChildren = {
    visibleFromBottom: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: 1,
        }
    },
    visibleFromTop: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: -1,
        }
    },
    hiddenToTop: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: -1,
        }
    },
    hiddenToBottom: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: 1,
        }
    }
};