const createTestCafe = require('testcafe');
let testcafe = null;

createTestCafe('localhost')
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['./tests/*test.js'])
            .browsers(['chrome:headless'])
            .reporter('html-testrail')
            /*Running all tests in separate instances*/
            .concurrency(3) 
            .run({skipJsErrors: true,
                selectorTimeout: 20000,
                assertionTimeout: 20000,
                pageLoadTimeout: 20000,
                quarantineMode: false
            });
            

    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });