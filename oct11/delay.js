function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
};

delay(1000).then(() => console.log("1 second Later"));