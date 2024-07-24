document.addEventListener('DOMContentLoaded', () => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const plantingGuide = {
        "January": {
            vegetables: [
                "Beetroot", "Carrots", "Chillies", "Cucumber", "Green beans", "Lettuce", "Pumpkins",
                "Radishes", "Sweetcorn", "Swiss chard", "Tomatoes", "Aubergine (Eggplant)",
                "Bell peppers", "Butternut squash", "Marrows", "Spinach"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)", "Pineapples"]
        },
        "February": {
            vegetables: [
                "Broccoli", "Brussels sprouts", "Cabbage", "Cauliflower", "Kale", "Leeks", "Spinach",
                "Turnips", "Celery", "Garlic", "Kohlrabi", "Parsnips"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)"]
        },
        "March": {
            vegetables: [
                "Broad beans", "Garlic", "Onions", "Peas", "Potatoes", "Beetroot", "Carrots", "Radishes",
                "Swiss chard", "Lettuce", "Spinach"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)"]
        },
        "April": {
            vegetables: [
                "Broad beans", "Cabbage", "Garlic", "Onions", "Peas", "Spinach", "Turnips", "Brussels sprouts",
                "Cauliflower", "Kale", "Leeks", "Lettuce", "Radishes", "Swiss chard", "Broccoli"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)"]
        },
        "May": {
            vegetables: [
                "Broccoli", "Brussels sprouts", "Cabbage", "Carrots", "Cauliflower", "Kale", "Leeks",
                "Lettuce", "Onions", "Spinach", "Broad beans", "Garlic", "Peas", "Turnips"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)"]
        },
        "June": {
            vegetables: [
                "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Cauliflower", "Garlic", "Kale",
                "Lettuce", "Onions", "Peas", "Potatoes", "Spinach", "Turnips", "Carrots", "Leeks",
                "Radishes", "Swiss chard"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)"]
        },
        "July": {
            vegetables: [
                "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Cauliflower", "Garlic", "Kale",
                "Leeks", "Lettuce", "Onions", "Spinach", "Turnips", "Carrots", "Radishes", "Swiss chard",
                "Broad beans"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)"]
        },
        "August": {
            vegetables: [
                "Asparagus", "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Carrots", "Cauliflower",
                "Garlic", "Kale", "Leeks", "Lettuce", "Onions", "Peas", "Spinach", "Swiss chard", "Radishes",
                "Broad beans", "Kohlrabi"
            ],
            fruits: ["Citrus (Oranges, Lemons, Grapefruits)"]
        },
        "September": {
            vegetables: [
                "Asparagus", "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Carrots", "Cauliflower",
                "Garlic", "Kale", "Leeks", "Lettuce", "Onions", "Peas", "Potatoes", "Spinach", "Swiss chard",
                "Radishes", "Broad beans", "Kohlrabi"
            ],
            fruits: ["Citrus (Oranges, Lemons, Grapefruits)", "Strawberries", "Avocados"]
        },
        "October": {
            vegetables: [
                "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Carrots", "Cauliflower", "Garlic",
                "Kale", "Leeks", "Lettuce", "Onions", "Peas", "Potatoes", "Spinach", "Sweetcorn",
                "Swiss chard", "Radishes", "Broad beans", "Kohlrabi", "Celery", "Pumpkins", "Tomatoes",
                "Aubergine (Eggplant)", "Bell peppers"
            ],
            fruits: ["Citrus (Oranges, Lemons, Grapefruits)", "Strawberries", "Avocados", "Grapes"]
        },
        "November": {
            vegetables: [
                "Beetroot", "Carrots", "Chillies", "Cucumber", "Green beans", "Lettuce", "Pumpkins",
                "Radishes", "Sweetcorn", "Swiss chard", "Tomatoes", "Aubergine (Eggplant)", "Bell peppers",
                "Butternut squash", "Marrows", "Spinach", "Watermelon"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)", "Strawberries", "Grapes", "Pineapples"]
        },
        "December": {
            vegetables: [
                "Beetroot", "Carrots", "Chillies", "Cucumber", "Green beans", "Lettuce", "Pumpkins",
                "Radishes", "Sweetcorn", "Swiss chard", "Tomatoes", "Aubergine (Eggplant)", "Bell peppers",
                "Butternut squash", "Marrows", "Spinach", "Watermelon"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)", "Strawberries", "Pineapples", "Grapes"]
        }
    };

    const continuePlanting = {
        "January":["Melons (Watermelon, Cantaloupe)","Strawberries","Pineapples","Grapes"],
        "February": ["Beetroot", "Carrots", "Lettuce", "Swiss chard"],
        "March": ["Melons (Watermelon, Cantaloupe)"],
        "April": ["Melons (Watermelon, Cantaloupe)"],
        "May": ["Beetroot", "Radishes", "Swiss chard", "Melons (Watermelon, Cantaloupe)"],
        "June": ["Melons (Watermelon, Cantaloupe)"],
        "July": ["Melons (Watermelon, Cantaloupe)"],
        "August": ["Melons (Watermelon, Cantaloupe)", "Citrus (Oranges, Lemons, Grapefruits)"],
        "September": ["Melons (Watermelon, Cantaloupe)", "Citrus (Oranges, Lemons, Grapefruits)"],
        "October": ["Melons (Watermelon, Cantaloupe)", "Citrus (Oranges, Lemons, Grapefruits)", "Strawberries", "Avocados"],
        "November": ["Citrus (Oranges, Lemons, Grapefruits)", "Strawberries", "Grapes", "Melons (Watermelon, Cantaloupe)"],
        "December": ["Citrus (Oranges, Lemons, Grapefruits)", "Strawberries", "Grapes", "Melons (Watermelon, Cantaloupe)", "Pineapples"]
    };

    let currentMonthIndex = new Date().getMonth();

    const updateGuide = (monthIndex) => {
        const monthName = monthNames[monthIndex];
        const monthGuide = plantingGuide[monthName];
        const continueItems = continuePlanting[monthName] || [];

        document.getElementById('currentMonth').textContent = monthName;
        const guideContainer = document.getElementById('plantingGuide');
        guideContainer.innerHTML = '';

        // Helper function to create a list of items
        const createList = (items, highlightItems = []) => {
            const ul = document.createElement('ul');
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                if (highlightItems.includes(item)) {
                    li.classList.add('highlight');
                }
                ul.appendChild(li);
            });
            return ul;
        };

        // Create and append vegetable list
        const vegetables = monthGuide.vegetables.filter(item => !continueItems.includes(item));
        const vegetablesList = createList(vegetables);
        const vegetablesHeader = document.createElement('h2');
        vegetablesHeader.textContent = 'Vegetables';
        vegetablesHeader.style.fontSize = '1.5em'; // Adjust the font size for h2
        guideContainer.appendChild(vegetablesHeader);
        guideContainer.appendChild(vegetablesList);

        // Create and append fruit list
        const fruits = monthGuide.fruits;
        const fruitsList = createList(fruits);
        const fruitsHeader = document.createElement('h2');
        fruitsHeader.textContent = 'Fruits';
        fruitsHeader.style.fontSize = '1.5em'; // Adjust the font size for h2
        guideContainer.appendChild(fruitsHeader);
        guideContainer.appendChild(fruitsList);

        // Create and append continue planting section
        if (continueItems.length > 0) {
            const continuePlantingContainer = document.createElement('div');
            continuePlantingContainer.className = 'continue-planting';
            
            const title = document.createElement('h3');
            title.textContent = 'Continue Planting';
            continuePlantingContainer.appendChild(title);
            
            continuePlantingContainer.appendChild(createList(continueItems, continueItems));
            guideContainer.appendChild(continuePlantingContainer);
        }
    };

    updateGuide(currentMonthIndex);

    // Event listeners for changing months
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
        updateGuide(currentMonthIndex);
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        currentMonthIndex = (currentMonthIndex + 1) % 12;
        updateGuide(currentMonthIndex);
    });
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
});


