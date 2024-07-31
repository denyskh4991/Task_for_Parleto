expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

function solution(expenses) {
    let result = null;

    // Function to calculate median
    function median(numbers) {
        if (numbers.length === 0) return 0;
        numbers.sort((a, b) => a - b);
        const half = Math.floor(numbers.length / 2);

        if (numbers.length % 2) {
            return numbers[half];
        }

        return (numbers[half - 1] + numbers[half]) / 2.0;
    }

    // Collect all expenses up to and including the first Sunday
    const allExpenses = [];

    for (const [month, days] of Object.entries(expenses)) {
        // Sort days by numerical values
        const sortedDays = Object.keys(days).sort((a, b) => parseInt(a) - parseInt(b));
        for (const day of sortedDays) {
            const date = new Date(`${month}-${day}`);
            console.log(`Checking date: ${date}`); // Debug message for each date

            // Collect all expenses for the current day
            for (const categories of Object.values(days[day])) {
                allExpenses.push(...categories);
            }

            // If this is Sunday, exit the loop
            if (date.getDay() === 0) {
                console.log("Found first Sunday:", date); // Debug message
                break; // Exit the loop after finding the first Sunday
            }
        }
        // Exit the outer loop if we have collected expenses and found the first Sunday
        if (allExpenses.length > 0 && new Date(`${month}-${sortedDays[0]}`).getDay() === 0) {
            break;
        }
    }

    console.log("All expenses collected until first Sunday:", allExpenses); // Debug message

    // Sort expenses and display
    allExpenses.sort((a, b) => a - b);
    console.log("Sorted expenses:", allExpenses); // Debug message

    // Calculate and display median
    result = median(allExpenses);
    console.log("Median:", result); // Debug message
    return result;
}

console.log(solution(expenses));