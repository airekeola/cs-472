document.getElementById('startButton').addEventListener('click', function() {
    const width = parseInt(document.getElementById('width').value);
    const growthAmount = parseInt(document.getElementById('growthAmount').value);
    const growRate = parseInt(document.getElementById('growRate').value);
    const numberCircles = parseInt(document.getElementById('numberCircles').value);
    const container = document.getElementById('circleContainer');

    container.innerHTML = ''; // Clear any existing circles

    for (let i = 0; i < numberCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.width = `${width}px`;
        circle.style.height = `${width}px`;
        circle.style.top = `${Math.random() * (window.innerHeight - width)}px`;
        circle.style.left = `${Math.random() * (window.innerWidth - width)}px`;

        container.appendChild(circle);

        let growInterval = setInterval(() => {
            let currentWidth = parseInt(circle.style.width);
            let currentHeight = parseInt(circle.style.height);
            circle.style.width = `${currentWidth + growthAmount}px`;
            circle.style.height = `${currentHeight + growthAmount}px`;
        }, growRate);

        circle.addEventListener('click', function() {
            clearInterval(growInterval);
            container.removeChild(circle);
        });
    }
});
