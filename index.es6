
export default function XOR() {
    var args = fn.flatten(arguments);
    var result = 0;
    for (var i = 0; i < args.length; i++) {
        if (args[i]) {
            result++;
        }
    }
    return (result & 1) ? true : false;
}
