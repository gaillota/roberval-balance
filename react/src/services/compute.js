/**
 * Balance labels
 *
 * @type {{EQUALS: number, LEFT: number, RIGHT: number}}
 */
const Labels = {
    EQUALS: 0,
    LEFT: 1,
    RIGHT: 2
};

/**
 * Get which side of the balance is the heavier
 *
 * @param left
 * @param right
 * @returns {number}
 */
const balance = (left, right) => {
    return right > left ? Labels.RIGHT : left > right ? Labels.LEFT : Labels.EQUALS;
};

/**
 * Compute weight for a set of balls
 *
 * @param balls
 * @returns {number}
 */
const weight = (balls) => balls.reduce((i, j) => i + j.weight, 0);

/**
 * Main function
 * Search for the heavier ball
 *
 * Takes an array of ball as argument, a ball object having a *index* and a *weight*
 *
 * @param balls
 * @param round
 * @returns {*}
 */
export const compute = (balls, round = 0) => {
    // Divide balls in 3 groups
    const groupCount = Math.ceil(balls.length / 3);
    const data = {};
    data[Labels.LEFT] = balls.slice(0, groupCount);
    data[Labels.RIGHT] = balls.slice(groupCount, groupCount * 2);
    data[Labels.EQUALS] = balls.slice(groupCount * 2, balls.length);

    // Get the weighing result between left and right groups
    const weighing = balance(weight(data[Labels.LEFT]), weight(data[Labels.RIGHT]));
    // Increment weight counter
    round++;

    /**
     * Function returning what to do next
     * If *set* is somehow empty (all balls weigh the same), returns -1
     * If *set* contains one element, return it
     * Else, keep searching
     *
     * @param set
     * @param round
     */
    const next = (set, round) => set.length === 0 ? '-1' : set.length === 1 ? {
                ball: set[0],
                round
            } : compute(set, round);

    return next(data[weighing], round);
};
