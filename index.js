
    const movingBox = document.querySelector(".moving-box");
    const movingContainer = document.querySelector(".moving-container");
    const containerWidth = movingContainer.offsetWidth;
    const boxWidth = movingBox.offsetWidth;
    let direction = 1;
    let position = 0;
    let flipped = false;

    function moveBox() {
        position += direction * 2; // Change the number to control speed
        movingBox.style.transform = flipped ? "scaleX(1)" : "scaleX(-1)";
        if (position + boxWidth > containerWidth) {
            direction = -1;
            flipped = !flipped;
            movingBox.style.transform = flipped ? "scaleX(1)" : "scaleX(-1)";
        } else if (position < 0) {
            direction = 1;
            flipped = !flipped;
            movingBox.style.transform = flipped ? "scaleX(1)" : "scaleX(-1)";
        }

        movingBox.style.left = position + "px";
        requestAnimationFrame(moveBox);
    }

    moveBox();