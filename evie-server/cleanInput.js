function clean(input) {
    return input.replace(/[^\w\s]/gi, '');
};

module.exports = {
    clean
};
