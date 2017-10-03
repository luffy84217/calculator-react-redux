export default function entryVerify(entry) {

    const operations = ['+', '-', '*', '/'];
    // error occurrs, return 0
    if (entry === 'ERROR') {
        return '0';
    }
    //prevent continuously operators occur
    for (let i = 0; i < operations.length; ++i) {
        if (entry[entry.length - 1] === operations[i]) {
            return operations.indexOf(entry[entry.length - 2]) === -1 ? entry : entry.slice(0, entry.length - 1);
        }
    }
    // prevent infinite decimals from occurring, limit in 4th decimal place
    if (entry.indexOf('.') !== -1) {
        const arr = entry.split('.')

        return `${arr[0]}.${arr[1].slice(0, 4)}`;
    }
    // prevent display overflow
    if (entry.length > 11) {
        return entry.slice(0, 11);
    }
    // prevent no number displaying from occurring
    if (entry === '') {
        return '0';
    }
    // deal with zero-start special case 
    if (entry.length === 2 && entry[0] === '0') {
        switch (entry[1]) {
            case '0':
                return '0';
            case '1':
                return '1';
            case '2':
                return '2';
            case '3':
                return '3';
            case '4':
                return '4';
            case '5':
                return '5';
            case '6':
                return '6';
            case '7':
                return '7';
            case '8':
                return '8';
            case '9':
                return '9';
        }
    }
    // no condition return original param
    return entry;
};