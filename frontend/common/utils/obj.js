export default {
    get: get
};

function get(propValue, defaultValue) {
    return propValue || defaultValue;
}