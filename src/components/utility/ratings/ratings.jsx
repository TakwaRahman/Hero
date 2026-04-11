export const calculateAvgRating = (ratings) => {
    const totalRatings = ratings.reduce((sum, rate) => sum + rate.count, 0);

    const avg = ratings.reduce((sum, rate) => {
        const star = parseInt(rate.name);
        return sum + star * rate.count;
    }, 0) / totalRatings;

    return avg;
};