document.addEventListener("DOMContentLoaded", function() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonthIndex = new Date().getMonth();
    const currentMonthElement = document.getElementById("currentMonth");
    const plantingGuideElement = document.getElementById("plantingGuide");


    const HarvestListUpdated = {
        "January": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as they mature, typically in the summer." },
                { name: "Carrots", reason: "Harvest when they reach a desirable size, usually mid-summer." },
                { name: "Cucumbers", reason: "Best harvested when they are firm and before they become overripe." },
                { name: "Green beans", reason: "Harvest regularly for continuous production." },
                { name: "Lettuce", reason: "Harvest as heads reach full size or leaves are tender." },
                { name: "Radishes", reason: "Harvest when they reach full size; they mature quickly." },
                { name: "Swiss chard", reason: "Harvest outer leaves to encourage continued growth." },
                { name: "Tomatoes", reason: "Harvest when they are fully colored and firm." },
                { name: "Aubergine (Eggplant)", reason: "Harvest when fruits are glossy and firm." },
                { name: "Bell peppers", reason: "Harvest when they reach full size and color." }
            ],
            fruits: [
                { name: "Melons (Watermelon, Cantaloupe)", reason: "Harvest when the fruit sounds hollow and the rind changes color." },
                { name: "Pineapples", reason: "Harvest when they are fully ripe and have a sweet aroma." }
            ]
        },
        "February": {
            vegetables: [
                { name: "Beetroot", reason: "Continue harvesting as they mature." },
                { name: "Carrots", reason: "Harvest when they are of good size." },
                { name: "Cucumbers", reason: "Continue harvesting for best quality." },
                { name: "Green beans", reason: "Harvest regularly." },
                { name: "Lettuce", reason: "Harvest as needed." },
                { name: "Radishes", reason: "Harvest as they mature." },
                { name: "Swiss chard", reason: "Harvest outer leaves." },
                { name: "Tomatoes", reason: "Harvest when ripe." },
                { name: "Aubergine (Eggplant)", reason: "Harvest when firm." },
                { name: "Bell peppers", reason: "Harvest when ripe." }
            ],
            fruits: [
                { name: "Melons (Watermelon, Cantaloupe)", reason: "Continue harvesting as they ripen." },
                { name: "Pineapples", reason: "Harvest when ripe." },
                { name: "Strawberries", reason: "Harvest when fully red and sweet." }
            ]
        },
        "March": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as they mature." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cucumbers", reason: "Harvest before they become overripe." },
                { name: "Green beans", reason: "Continue harvesting." },
                { name: "Lettuce", reason: "Harvest as needed." },
                { name: "Radishes", reason: "Harvest when mature." },
                { name: "Swiss chard", reason: "Continue harvesting outer leaves." },
                { name: "Tomatoes", reason: "Harvest when ripe." },
                { name: "Aubergine (Eggplant)", reason: "Harvest when firm." },
                { name: "Bell peppers", reason: "Harvest when ripe." }
            ],
            fruits: [
                { name: "Melons (Watermelon, Cantaloupe)", reason: "Harvest when ripe." },
                { name: "Pineapples", reason: "Continue harvesting." },
                { name: "Strawberries", reason: "Harvest regularly as they ripen." }
            ]
        },
        "April": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as they mature." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cucumbers", reason: "Last harvests before winter." },
                { name: "Green beans", reason: "Final harvests before cooler weather." },
                { name: "Lettuce", reason: "Continue harvesting." },
                { name: "Radishes", reason: "Harvest as they mature." },
                { name: "Swiss chard", reason: "Harvest outer leaves." },
                { name: "Tomatoes", reason: "Harvest before frost hits." },
                { name: "Aubergine (Eggplant)", reason: "Harvest if still producing." },
                { name: "Bell peppers", reason: "Harvest before frost." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Peak season for harvest." },
                { name: "Strawberries", reason: "Continue harvesting if still fruiting." }
            ]
        },
        "May": {
            vegetables: [
                { name: "Beetroot", reason: "Continue harvesting." },
                { name: "Carrots", reason: "Harvest as needed." },
                { name: "Garlic", reason: "Harvest when leaves yellow and dry." },
                { name: "Kale", reason: "Harvest leaves as needed." },
                { name: "Leeks", reason: "Harvest as they mature." },
                { name: "Lettuce", reason: "Continue harvesting." },
                { name: "Onions", reason: "Harvest when tops start to fall and dry." },
                { name: "Peas", reason: "Final harvests before winter." },
                { name: "Radishes", reason: "Continue harvesting." },
                { name: "Spinach", reason: "Harvest as needed." },
                { name: "Swiss chard", reason: "Continue harvesting outer leaves." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." },
                { name: "Strawberries", reason: "Harvest if still producing." }
            ]
        },
        "June": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as needed." },
                { name: "Broccoli", reason: "Harvest when heads are firm and tight." },
                { name: "Brussels sprouts", reason: "Harvest as they mature, often after frost." },
                { name: "Cabbage", reason: "Harvest heads when they are firm." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cauliflower", reason: "Harvest when heads are compact." },
                { name: "Garlic", reason: "Continue harvesting." },
                { name: "Kale", reason: "Harvest leaves as needed." },
                { name: "Leeks", reason: "Harvest as they mature." },
                { name: "Lettuce", reason: "Harvest if grown in a cool-season variety." },
                { name: "Onions", reason: "Continue harvesting." },
                { name: "Peas", reason: "Final harvest before severe cold." },
                { name: "Radishes", reason: "Harvest as they mature." },
                { name: "Spinach", reason: "Harvest as needed." },
                { name: "Swiss chard", reason: "Continue harvesting outer leaves." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Peak season for harvest." },
                { name: "Strawberries", reason: "If grown in protected conditions, continue harvesting." }
            ]
        },
        "July": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as they mature." },
                { name: "Broccoli", reason: "Continue harvesting." },
                { name: "Brussels sprouts", reason: "Harvest as they mature." },
                { name: "Cabbage", reason: "Harvest heads." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cauliflower", reason: "Harvest when heads are tight." },
                { name: "Garlic", reason: "Continue harvesting." },
                { name: "Kale", reason: "Harvest leaves as needed." },
                { name: "Leeks", reason: "Harvest as they mature." },
                { name: "Lettuce", reason: "Harvest cool-season varieties." },
                { name: "Onions", reason: "Continue harvesting." },
                { name: "Peas", reason: "Harvest early varieties." },
                { name: "Radishes", reason: "Harvest as they mature." },
                { name: "Spinach", reason: "Continue harvesting." },
                { name: "Swiss chard", reason: "Harvest outer leaves." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Peak harvest season." },
                { name: "Strawberries", reason: "Continue harvesting if in a protected environment." }
            ]
        },
        "August": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as needed." },
                { name: "Broccoli", reason: "Continue harvesting." },
                { name: "Brussels sprouts", reason: "Harvest as they mature." },
                { name: "Cabbage", reason: "Harvest heads." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cauliflower", reason: "Harvest when compact." },
                { name: "Garlic", reason: "Continue harvesting." },
                { name: "Kale", reason: "Harvest leaves." },
                { name: "Leeks", reason: "Harvest as they mature." },
                { name: "Lettuce", reason: "Harvest cool-season varieties." },
                { name: "Onions", reason: "Continue harvesting." },
                { name: "Peas", reason: "Harvest early varieties." },
                { name: "Radishes", reason: "Harvest as they mature." },
                { name: "Spinach", reason: "Harvest as needed." },
                { name: "Swiss chard", reason: "Harvest outer leaves." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." },
                { name: "Strawberries", reason: "Continue harvesting if in a protected environment." }
            ]
        },
        "September": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as needed." },
                { name: "Broccoli", reason: "Continue harvesting." },
                { name: "Brussels sprouts", reason: "Harvest as they mature." },
                { name: "Cabbage", reason: "Harvest heads." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cauliflower", reason: "Harvest when compact." },
                { name: "Garlic", reason: "Harvest as needed." },
                { name: "Kale", reason: "Harvest leaves." },
                { name: "Leeks", reason: "Harvest as they mature." },
                { name: "Lettuce", reason: "Harvest cool-season varieties." },
                { name: "Onions", reason: "Continue harvesting." },
                { name: "Peas", reason: "Harvest early varieties." },
                { name: "Radishes", reason: "Harvest as they mature." },
                { name: "Spinach", reason: "Continue harvesting." },
                { name: "Swiss chard", reason: "Harvest outer leaves." },
                { name: "Potatoes", reason: "Harvest when tops start to die back." }
            ],
            fruits: [
                { name: "Avocados", reason: "Harvest when they reach maturity." },
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." },
                { name: "Strawberries", reason: "Continue harvesting if in a protected environment." }
            ]
        },
        "October": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as needed." },
                { name: "Broccoli", reason: "Continue harvesting." },
                { name: "Brussels sprouts", reason: "Continue harvesting." },
                { name: "Cabbage", reason: "Harvest heads." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cauliflower", reason: "Harvest when compact." },
                { name: "Garlic", reason: "Harvest as needed." },
                { name: "Kale", reason: "Harvest leaves." },
                { name: "Leeks", reason: "Harvest as they mature." },
                { name: "Lettuce", reason: "Continue harvesting." },
                { name: "Onions", reason: "Harvest as needed." },
                { name: "Peas", reason: "Harvest final crops." },
                { name: "Radishes", reason: "Harvest as they mature." },
                { name: "Spinach", reason: "Harvest as needed." },
                { name: "Swiss chard", reason: "Harvest outer leaves." },
                { name: "Sweetcorn", reason: "Harvest when kernels are full and milky." },
                { name: "Tomatoes", reason: "Harvest as they ripen." },
                { name: "Aubergine (Eggplant)", reason: "Harvest when firm." },
                { name: "Bell peppers", reason: "Harvest when ripe." }
            ],
            fruits: [
                { name: "Avocados", reason: "Continue harvesting." },
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." },
                { name: "Strawberries", reason: "Continue harvesting." },
                { name: "Grapes", reason: "Harvest when fully ripe." }
            ]
        },
        "November": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as needed." },
                { name: "Broccoli", reason: "Continue harvesting." },
                { name: "Brussels sprouts", reason: "Harvest as they mature." },
                { name: "Cabbage", reason: "Harvest heads." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cauliflower", reason: "Harvest when compact." },
                { name: "Garlic", reason: "Harvest as needed." },
                { name: "Kale", reason: "Harvest leaves." },
                { name: "Leeks", reason: "Harvest as they mature." },
                { name: "Lettuce", reason: "Continue harvesting." },
                { name: "Onions", reason: "Harvest as needed." },
                { name: "Peas", reason: "Harvest as final crops." },
                { name: "Radishes", reason: "Harvest as they mature." },
                { name: "Spinach", reason: "Harvest as needed." },
                { name: "Swiss chard", reason: "Harvest outer leaves." },
                { name: "Potatoes", reason: "Harvest as needed." }
            ],
            fruits: [
                { name: "Avocados", reason: "Continue harvesting." },
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." },
                { name: "Grapes", reason: "Harvest when ripe." },
                { name: "Melons (Watermelon, Cantaloupe)", reason: "Harvest when fully ripe." },
                { name: "Strawberries", reason: "Continue harvesting." }
            ]
        },
        "December": {
            vegetables: [
                { name: "Beetroot", reason: "Continue harvesting." },
                { name: "Carrots", reason: "Harvest when they reach full size." },
                { name: "Cucumbers", reason: "Continue harvesting." },
                { name: "Green beans", reason: "Continue harvesting." },
                { name: "Lettuce", reason: "Harvest as needed." },
                { name: "Radishes", reason: "Harvest as they mature." },
                { name: "Swiss chard", reason: "Continue harvesting." },
                { name: "Tomatoes", reason: "Harvest when ripe." },
                { name: "Aubergine (Eggplant)", reason: "Continue harvesting." },
                { name: "Bell peppers", reason: "Continue harvesting." },
                { name: "Pumpkins", reason: "Harvest when they have reached full size and their skin is hard." },
                { name: "Marrows", reason: "Harvest when tender and young." },
                { name: "Sweetcorn", reason: "Harvest when kernels are full and milky." },
                { name: "Watermelon", reason: "Harvest when ripe." }
            ],
            fruits: [
                { name: "Grapes", reason: "Continue harvesting." },
                { name: "Melons (Watermelon, Cantaloupe)", reason: "Continue harvesting." },
                { name: "Pineapples", reason: "Harvest when ripe." },
                { name: "Strawberries", reason: "Continue harvesting." }
            ]
        }
    };

    function updatePlantingGuide() {
        const monthName = monthNames[currentMonthIndex];
        currentMonthElement.textContent = monthName;
        plantingGuideElement.innerHTML = ""; // Clear previous content
        let itemId = 1;

        const vegetables = HarvestListUpdated[monthName].vegetables;
        vegetables.forEach(veg => {
            const vegDiv = document.createElement("div");
            vegDiv.id = `item-${itemId}`;
            vegDiv.className = "produce";
            const vegName = document.createElement("b");
            vegName.textContent = veg.name;
            const vegReason = document.createElement("p");
            vegReason.textContent = veg.reason;
            vegDiv.appendChild(vegName);
            vegDiv.appendChild(vegReason);
            plantingGuideElement.appendChild(vegDiv);
            itemId++;
        });

        const fruits = HarvestListUpdated[monthName].fruits;
        fruits.forEach(fruit => {
            const fruitDiv = document.createElement("div");
            fruitDiv.id = `item-${itemId}`;
            fruitDiv.className = "produce";
            const fruitName = document.createElement("b");
            fruitName.textContent = fruit.name;
            const fruitReason = document.createElement("p");
            fruitReason.textContent = fruit.reason;
            fruitDiv.appendChild(fruitName);
            fruitDiv.appendChild(fruitReason);
            plantingGuideElement.appendChild(fruitDiv);
            itemId++;
        });
    }

    function changeMonth(direction) {
        currentMonthIndex = (currentMonthIndex + direction + 12) % 12;
        updatePlantingGuide();
    }

    document.getElementById("prevMonth").addEventListener("click", function() {
        changeMonth(-1);
    });

    document.getElementById("nextMonth").addEventListener("click", function() {
        changeMonth(1);
    });

    updatePlantingGuide();
});
