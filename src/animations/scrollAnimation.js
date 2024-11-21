export const addScrollAnimation = (elementId) => {
    const element = document.getElementById(elementId);

    if (!element) return;

    const handleScroll = () => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener when the component unmounts
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};
