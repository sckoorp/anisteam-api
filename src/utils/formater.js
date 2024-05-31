export const formatType = (format) => {
    switch (format) {
        case "TV":
            return "TV Show";
        case "TV_SHORT":
            return "TV Short";
        case "MOVIE":
            return "Movie";
        case "SPECIAL":
            return "Special";
        case "MUSIC":
            return "Music";
        default:
            return format
    }
}