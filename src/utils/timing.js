export const getNextSeason = () => {
    const month = new Date().getMonth();
    switch (month) {
        case 11: // December
        case 0:  // January
        case 1:  // February
            return "SPRING";
        case 2:  // March
        case 3:  // April
        case 4:  // May
            return "SUMMER";
        case 5:  // June
        case 6:  // July
        case 7:  // August
            return "FALL";
        case 8:  // September
        case 9:  // October
        case 10: // November
            return "WINTER";
        default:
            return null
    }
}