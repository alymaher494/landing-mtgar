export const SPRING_CONFIG = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
};

export const FADE_UP_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};
