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
    const allExpenses = [];
    let foundSunday = false;

    function median(numbers) {
        if (numbers.length === 0) return 0;
        numbers.sort((a, b) => a - b);
        const half = Math.floor(numbers.length / 2);
        if (numbers.length % 2 === 1) {
            return numbers[half];
        }
        return Math.round((numbers[half - 1] + numbers[half]) / 2.0);
    }

    for (const [month, days] of Object.entries(expenses)) {
        for (const day of Object.keys(days).sort()) {
            const date = new Date(`${month}-${day}`);
            console.log(`Checking date: ${date}`);

            for (const categories of Object.values(days[day])) {
                allExpenses.push(...categories);
                console.log(`Adding expenses for ${month}-${day}: ${categories}`);
            }

            if (date.getDay() === 0) {
                console.log(`Found first Sunday: ${date}`);
                foundSunday = true;
                break; // Exit the inner loop
            }
        }
        if (foundSunday) break;
    }

    console.log("All expenses collected until first Sunday:", allExpenses);
    allExpenses.sort((a, b) => a - b); // Sort expenses
    console.log("Sorted expenses:", allExpenses);

    result = median(allExpenses);
    console.log("Median:", result);

    return result;
}

console.log(solution(expenses));