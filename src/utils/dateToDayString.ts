const dateToDayString = (date: Date): string => {
    return new Intl.DateTimeFormat("da-DK", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(date);
};

export default dateToDayString;
