import Config from '../../blog.config';

export default {
    printDebug: printDebug,
    printProduct: printProduct
};

function printDebug(tag, info) {
    if (!Config.debugMode) {
        return;
    }
    printWithFormat(tag, info);
}

function printProduct(tag, info) {
    printWithFormat(tag, info);
}

function printWithFormat(tag, info) {
    console.log(`[${tag}]`, info);
}