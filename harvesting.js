
document.addEventListener('DOMContentLoaded', () => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const harvestingGuide = {
        "January": {
            vegetables: [
                "Beans (Green beans)", "Beetroot", "Broccoli", "Cabbage", "Carrots", "Cauliflower",
                "Cucumbers", "Lettuce", "Radishes", "Spinach", "Sweetcorn", "Swiss chard", "Tomatoes"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)", "Pineapples", "Strawberries"]
        },
        "February": {
            vegetables: [
                "Beans (Green beans)", "Beetroot", "Broccoli", "Carrots", "Cauliflower", "Cucumbers",
                "Lettuce", "Peppers (Bell peppers, Chillies)", "Pumpkins", "Radishes", "Spinach",
                "Sweetcorn", "Swiss chard", "Tomatoes"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)", "Pineapples", "Strawberries"]
        },
        "March": {
            vegetables: [
                "Beans (Green beans)", "Beetroot", "Broccoli", "Carrots", "Cauliflower", "Cucumbers",
                "Lettuce", "Peppers (Bell peppers, Chillies)", "Pumpkins", "Radishes", "Spinach",
                "Sweetcorn", "Swiss chard", "Tomatoes"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)", "Pineapples", "Strawberries"]
        },
        "April": {
            vegetables: [
                "Beetroot", "Broccoli", "Carrots", "Cauliflower", "Garlic", "Kale", "Leeks", "Lettuce",
                "Peppers (Bell peppers, Chillies)", "Potatoes", "Radishes", "Spinach", "Swiss chard",
                "Tomatoes"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)", "Strawberries"]
        },
        "May": {
            vegetables: [
                "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Carrots", "Cauliflower",
                "Garlic", "Kale", "Leeks", "Lettuce", "Onions", "Peas", "Potatoes", "Radishes",
                "Spinach", "Swiss chard"
            ],
            fruits: ["Melons (Watermelon, Cantaloupe)", "Strawberries"]
        },
        "June": {
            vegetables: [
                "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Carrots", "Cauliflower",
                "Garlic", "Kale", "Leeks", "Lettuce", "Onions", "Peas", "Radishes", "Spinach",
                "Swiss chard"
            ],
            fruits: ["Citrus (Oranges, Lemons, Grapefruits)", "Melons (Watermelon, Cantaloupe)", "Strawberries"]
        },
        "July": {
            vegetables: [
                "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Carrots", "Cauliflower",
                "Garlic", "Kale", "Leeks", "Lettuce", "Onions", "Peas", "Radishes", "Spinach",
                "Swiss chard"
            ],
            fruits: ["Citrus (Oranges, Lemons, Grapefruits)", "Melons (Watermelon, Cantaloupe)", "Strawberries"]
        },
        "August": {
            vegetables: [
                "Asparagus", "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Carrots",
                "Cauliflower", "Garlic", "Kale", "Leeks", "Lettuce", "Onions", "Peas", "Radishes",
                "Spinach", "Swiss chard"
            ],
            fruits: ["Citrus (Oranges, Lemons, Grapefruits)", "Melons (Watermelon, Cantaloupe)", "Strawberries"]
        },
        "September": {
            vegetables: [
                "Asparagus", "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Carrots",
                "Cauliflower", "Garlic", "Kale", "Leeks", "Lettuce", "Onions", "Peas", "Radishes",
                "Spinach", "Swiss chard"
            ],
            fruits: ["Avocados", "Citrus (Oranges, Lemons, Grapefruits)", "Melons (Watermelon, Cantaloupe)", "Strawberries"]
        },
        "October": {
            vegetables: [
                "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Carrots", "Cauliflower",
                "Garlic", "Kale", "Leeks", "Lettuce", "Onions", "Peas", "Potatoes", "Radishes",
                "Spinach", "Swiss chard"
            ],
            fruits: ["Avocados", "Citrus (Oranges, Lemons, Grapefruits)", "Melons (Watermelon, Cantaloupe)", "Strawberries"]
        },
        "November": {
            vegetables: [
                "Beetroot", "Broccoli", "Cabbage", "Carrots", "Cauliflower", "Garlic", "Kale",
                "Lettuce", "Onions", "Peas", "Potatoes", "Radishes", "Spinach", "Swiss chard"
            ],
            fruits: ["Avocados", "Citrus (Oranges, Lemons, Grapefruits)", "Grapes", "Melons (Watermelon, Cantaloupe)", "Strawberries"]
        },
        "December": {
            vegetables: [
                "Beans (Green beans)", "Beetroot", "Broccoli", "Carrots", "Cauliflower", "Cucumbers",
                "Lettuce", "Peppers (Bell peppers, Chillies)", "Pumpkins", "Radishes", "Spinach",
                "Sweetcorn", "Swiss chard", "Tomatoes"
            ],
            fruits: ["Grapes", "Melons (Watermelon, Cantaloupe)", "Pineapples", "Strawberries"]
        }
    };

    const continueHarvesting = {
        "January": ["Melons (Watermelon, Cantaloupe)", "Strawberries", "Pineapples"],
        "February": ["Melons (Watermelon, Cantaloupe)"],
        "March": ["Melons (Watermelon, Cantaloupe)"],
        "April": ["Melons (Watermelon, Cantaloupe)"],
        "May": ["Melons (Watermelon, Cantaloupe)"],
        "June": ["Melons (Watermelon, Cantaloupe)"],
        "July": ["Melons (Watermelon, Cantaloupe)"],
        "August": ["Melons (Watermelon, Cantaloupe)", "Citrus (Oranges, Lemons, Grapefruits)"],
        "September": ["Melons (Watermelon, Cantaloupe)", "Citrus (Oranges, Lemons, Grapefruits)"],
        "October": ["Melons (Watermelon, Cantaloupe)", "Citrus (Oranges, Lemons, Grapefruits)", "Strawberries"],
        "November": ["Citrus (Oranges, Lemons, Grapefruits)", "Strawberries"],
        "December": ["Citrus (Oranges, Lemons, Grapefruits)", "Strawberries", "Pineapples"]
    };

    let currentMonthIndex = new Date().getMonth();

    const updateGuide = (monthIndex) => {
        const monthName = monthNames[monthIndex];
        const monthGuide = harvestingGuide[monthName] || { vegetables: [], fruits: [] };
        const continueItems = continueHarvesting[monthName] || [];

        document.getElementById('currentMonth').textContent = monthName;
        const guideContainer = document.getElementById('plantingGuide'); // Keep the ID consistent
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
        guideContainer.appendChild(vegetablesHeader

);
        guideContainer.appendChild(vegetablesList);

        // Create and append fruit list
        const fruits = monthGuide.fruits;
        const fruitsList = createList(fruits);
        const fruitsHeader = document.createElement('h2');
        fruitsHeader.textContent = 'Fruits';
        fruitsHeader.style.fontSize = '1.5em'; // Adjust the font size for h2
        guideContainer.appendChild(fruitsHeader);
        guideContainer.appendChild(fruitsList);

        // Create and append continue harvesting section
        if (continueItems.length > 0) {
            const continueHarvestingContainer = document.createElement('div');
            continueHarvestingContainer.className = 'continue-planting'; // Use the same class name for consistency
            
            const title = document.createElement('h3');
            title.textContent = 'Continue Harvesting';
            continueHarvestingContainer.appendChild(title);
            
            continueHarvestingContainer.appendChild(createList(continueItems, continueItems));
            guideContainer.appendChild(continueHarvestingContainer);
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