document.addEventListener('DOMContentLoaded', () => {
    const pupils = document.querySelectorAll(".iris");
    const rightEye = document.querySelector(".sombrancelhas");
    const leftSombrancelha = document.getElementById("sombrancelhaesqueda");
    const rightSombrancelha = document.getElementById("sombrancelhadireita");

    document.addEventListener('mousemove', (event) => {
        pupils.forEach(pupil => {
            const eye = pupil.parentElement;
            const rect = eye.getBoundingClientRect();
            const eyeX = rect.left + rect.width / 2;
            const eyeY = rect.top + rect.height / 2;

            const deltaX = event.clientX - eyeX;
            const deltaY = event.clientY - eyeY;

            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const maxDistance = rect.width / 2 - pupil.offsetWidth / 2;

            const scale = Math.min(maxDistance / distance, 1);

            const pupilX = deltaX * scale;
            const pupilY = deltaY * scale;

            pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });

        const rightEyeRect = rightEye.getBoundingClientRect();
        const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

        if (event.clientY < rightEyeCenterY) {
            rightSombrancelha.style.transform = `translateY(-5px)`;
            leftSombrancelha.style.transform = `translateY(5px)`;
        } else {
            rightSombrancelha.style.transform = `translateY(5px)`;
            leftSombrancelha.style.transform = `translateY(-5px)`;
        }
    });
});
