const createTestCafe = require('testcafe');
let testcafe = null;

createTestCafe('localhost')
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['./tests/*test.js'])
            .browsers(['chrome:headless'])
            .screenshots('reports/screenshots/', true) //path to the screenshots
          //  .reporter('teamcity')
           .reporter('xunit', 'test-reports/report.xml')
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
