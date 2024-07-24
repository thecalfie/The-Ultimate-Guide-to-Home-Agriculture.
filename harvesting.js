document.addEventListener("DOMContentLoaded", function() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonthIndex = new Date().getMonth();
    const currentMonthElement = document.getElementById("currentMonth");
    const plantingGuideElement = document.getElementById("plantingGuide");

    const HarvestListUpdated = {
        "January": { vegetables: [], fruits: [] },
        "February": { vegetables: [], fruits: [] },
        "March": { vegetables: [], fruits: [] },
        "April": {
            vegetables: [
                { name: "Asparagus", reason: "Harvest the spears before they become too tall." },
                { name: "Lettuce", reason: "Harvest leaves before they become too mature." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." }
            ]
        },
        "May": {
            vegetables: [
                { name: "Asparagus", reason: "Continue harvesting." },
                { name: "Lettuce", reason: "Continue harvesting." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." }
            ]
        },
        "June": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as needed." },
                { name: "Broccoli", reason: "Harvest heads." },
                { name: "Brussels sprouts", reason: "Harvest as needed." },
                { name: "Cabbage", reason: "Harvest heads." },
                { name: "Carrots", reason: "Harvest as needed." },
                { name: "Cauliflower", reason: "Harvest heads." },
                { name: "Garlic", reason: "Harvest when bulbs are mature." },
                { name: "Kale", reason: "Harvest leaves." },
                { name: "Leeks", reason: "Harvest as needed." },
                { name: "Lettuce", reason: "Harvest leaves." },
                { name: "Onions", reason: "Harvest bulbs." },
                { name: "Peas", reason: "Harvest pods." },
                { name: "Radishes", reason: "Harvest as needed." },
                { name: "Spinach", reason: "Harvest leaves." },
                { name: "Swiss chard", reason: "Harvest outer leaves." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." }
            ]
        },
        "July": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as needed." },
                { name: "Broccoli", reason: "Harvest heads." },
                { name: "Brussels sprouts", reason: "Harvest as needed." },
                { name: "Cabbage", reason: "Harvest heads." },
                { name: "Carrots", reason: "Harvest as needed." },
                { name: "Cauliflower", reason: "Harvest heads." },
                { name: "Garlic", reason: "Harvest when bulbs are mature." },
                { name: "Kale", reason: "Harvest leaves." },
                { name: "Leeks", reason: "Harvest as needed." },
                { name: "Lettuce", reason: "Harvest leaves." },
                { name: "Onions", reason: "Harvest bulbs." },
                { name: "Peas", reason: "Harvest pods." },
                { name: "Radishes", reason: "Harvest as needed." },
                { name: "Spinach", reason: "Harvest leaves." },
                { name: "Swiss chard", reason: "Harvest outer leaves." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." }
            ]
        },
        "August": {
            vegetables: [
                { name: "Beetroot", reason: "Harvest as they mature." },
                { name: "Broccoli", reason: "Continue harvesting." },
                { name: "Brussels sprouts", reason: "Harvest as needed." },
                { name: "Cabbage", reason: "Continue harvesting heads." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cauliflower", reason: "Harvest when heads are tight." },
                { name: "Garlic", reason: "Harvest if still in ground." },
                { name: "Kale", reason: "Harvest leaves as needed." },
                { name: "Leeks", reason: "Harvest as they mature." },
                { name: "Lettuce", reason: "Harvest cool-season varieties." },
                { name: "Onions", reason: "Continue harvesting." },
                { name: "Peas", reason: "Harvest if still producing." },
                { name: "Radishes", reason: "Harvest as they mature." },
                { name: "Spinach", reason: "Continue harvesting." },
                { name: "Swiss chard", reason: "Harvest outer leaves." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." }
            ]
        },
        "September": {
            vegetables: [
                { name: "Beetroot", reason: "Continue harvesting." },
                { name: "Broccoli", reason: "Harvest heads." },
                { name: "Brussels sprouts", reason: "Continue harvesting." },
                { name: "Cabbage", reason: "Harvest heads." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cauliflower", reason: "Harvest heads." },
                { name: "Garlic", reason: "Harvest if still in ground." },
                { name: "Kale", reason: "Harvest leaves." },
                { name: "Leeks", reason: "Continue harvesting." },
                { name: "Lettuce", reason: "Harvest cool-season varieties." },
                { name: "Onions", reason: "Continue harvesting." },
                { name: "Peas", reason: "Harvest if still producing." },
                { name: "Radishes", reason: "Harvest as needed." },
                { name: "Spinach", reason: "Continue harvesting." },
                { name: "Swiss chard", reason: "Harvest outer leaves." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." }
            ]
        },
        "October": {
            vegetables: [
                { name: "Beetroot", reason: "Continue harvesting." },
                { name: "Broccoli", reason: "Harvest heads." },
                { name: "Brussels sprouts", reason: "Continue harvesting." },
                { name: "Cabbage", reason: "Harvest heads." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cauliflower", reason: "Harvest heads." },
                { name: "Garlic", reason: "Harvest if still in ground." },
                { name: "Kale", reason: "Harvest leaves." },
                { name: "Leeks", reason: "Continue harvesting." },
                { name: "Lettuce", reason: "Harvest cool-season varieties." },
                { name: "Onions", reason: "Continue harvesting." },
                { name: "Peas", reason: "Harvest if still producing." },
                { name: "Radishes", reason: "Harvest as needed." },
                { name: "Spinach", reason: "Continue harvesting." },
                { name: "Swiss chard", reason: "Harvest outer leaves." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." }
            ]
        },
        "November": {
            vegetables: [
                { name: "Beetroot", reason: "Continue harvesting." },
                { name: "Broccoli", reason: "Harvest heads." },
                { name: "Brussels sprouts", reason: "Continue harvesting." },
                { name: "Cabbage", reason: "Harvest heads." },
                { name: "Carrots", reason: "Continue harvesting." },
                { name: "Cauliflower", reason: "Harvest heads." },
                { name: "Garlic", reason: "Harvest if still in ground." },
                { name: "Kale", reason: "Harvest leaves." },
                { name: "Leeks", reason: "Continue harvesting." },
                { name: "Lettuce", reason: "Harvest cool-season varieties." },
                { name: "Onions", reason: "Continue harvesting." },
                { name: "Peas", reason: "Harvest if still producing." },
                { name: "Radishes", reason: "Harvest as needed." },
                { name: "Spinach", reason: "Continue harvesting." },
                { name: "Swiss chard", reason: "Harvest outer leaves." }
            ],
            fruits: [
                { name: "Citrus (Oranges, Lemons, Grapefruits)", reason: "Continue harvesting." }
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
