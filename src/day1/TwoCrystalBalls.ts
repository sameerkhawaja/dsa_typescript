export default function two_crystal_balls(breaks: boolean[]): number {
    //jump by sqrt, break when we find true
    let jumpValue = Math.floor(Math.sqrt(breaks.length));
    let i = jumpValue;

    for (; i < breaks.length; i += jumpValue) {
        if (breaks[i]) {
            break;
        }
    }

    //jump back one jump
    i -= jumpValue;

    for (; i < i + jumpValue && i < breaks.length; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
