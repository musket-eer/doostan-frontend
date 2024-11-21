export const fadeIn = (element) => {
    element.style.opacity = '0';
    element.style.transition = 'opacity 1s ease-in-out';

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                element.style.opacity = '1';
                observer.disconnect();
            }
        },
        { threshold: 0.1 }
    );

    observer.observe(element);
};
