const currentDate = new Date();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

function generateCalendar(year, month) {
    switch (month) {
        case 0:
            document.getElementById("month").innerHTML = "January " + year;
            break;
        case 1:
            document.getElementById("month").innerHTML = "February " + year;
            break;
        case 2:
            document.getElementById("month").innerHTML = "March " + year;
            break;
        case 3:
            document.getElementById("month").innerHTML = "April " + year;
            break;
        case 4:
            document.getElementById("month").innerHTML = "May " + year;
            break;
        case 5:
            document.getElementById("month").innerHTML = "June " + year;
            break;
        case 6:
            document.getElementById("month").innerHTML = "July " + year;
            break;
        case 7:
            document.getElementById("month").innerHTML = "August " + year;
            break;
        case 8:
            document.getElementById("month").innerHTML = "September " + year;
            break;
        case 9:
            document.getElementById("month").innerHTML = "October " + year;
            break;
        case 10:
            document.getElementById("month").innerHTML = "November " + year;
            break;
        case 11:
            document.getElementById("month").innerHTML = "December " + year;
            break;
        default:
            document.getElementById("month").innerHTML = "Unknown Month";
            break;
    }

    const calendarMap = new Map([
        [1, "1-1"],
        [2, "1-2"],
        [3, "1-3"],
        [4, "1-4"],
        [5, "1-5"],
        [6, "1-6"],
        [7, "1-7"],
        [8, "2-1"],
        [9, "2-2"],
        [10, "2-3"],
        [11, "2-4"],
        [12, "2-5"],
        [13, "2-6"],
        [14, "2-7"],
        [15, "3-1"],
        [16, "3-2"],
        [17, "3-3"],
        [18, "3-4"],
        [19, "3-5"],
        [20, "3-6"],
        [21, "3-7"],
        [22, "4-1"],
        [23, "4-2"],
        [24, "4-3"],
        [25, "4-4"],
        [26, "4-5"],
        [27, "4-6"],
        [28, "4-7"],
        [29, "5-1"],
        [30, "5-2"],
        [31, "5-3"],
        [32, "5-4"],
        [33, "5-5"],
        [34, "5-6"],
        [35, "5-7"],
        [36, "6-1"],
        [37, "6-2"],
        [38, "6-3"],
        [39, "6-4"],
        [40, "6-5"],
        [41, "6-6"],
        [42, "6-7"]
    ]);

    const firstDayDate = new Date(year, month, 1);
    const firstDayNumber = firstDayDate.getDay() + 1;

    const lastDayofMonth = new Date(year, month + 1, 1);
    lastDayofMonth.setDate(lastDayofMonth.getDate() - 1);

    const lastDayOfMonthNumber = lastDayofMonth.getDate();

    for (let i = 1; i <= 42; i++) {
        let dayNum = i - firstDayNumber + 1;
        let id = calendarMap.get(i);

        if (dayNum >= 1 && dayNum <= lastDayOfMonthNumber) {
            document.getElementById(id).innerHTML = dayNum;
        } else {
            document.getElementById(id).innerHTML = "";
        }
    }
}

function generatePrevMonth(){
    month--;
    if(month === -1){
        month = 11;
        year--;
    }
    generateCalendar(year, month);
}

generateCalendar(year, month);

//YOUDO:  implement generateNextMonth Function