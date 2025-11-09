const globalSetup = () => {
    // Set UTC timezone for all tests
    process.env.TZ = 'Europe/Prague';

};

module.exports = globalSetup;
