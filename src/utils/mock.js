const Mock = require('mockjs');
const img = require('../img/1391.png');

module.exports = Mock.mock("list/getData", {
    "list|100": [{
        "key|+1": 1,
        "id|+1": 1,
        "name": "@cname",
        "age|0-16": 10,
        "treatDate": "@date",
        "gender|1": ["male", "female"],
        "symptom|1": ['GHD', 'GHD', 'FSS', 'GHD', 'ISS', 'FSS'],
        "patriHeight|164-179": 170,
        "matriHeight|150-166": 160,
        "initHeight|90-130": 100,
        "initWeight|10-45": 30,
        "averageGrowth|0.3": 1,
        "GH1|0-3.1-2": 1,
        "GH2|0-4.1-2": 1,
        "GH3|0-6.1-2": 1,
        "GH4|0-7.1-2": 1,
        "GH5|0-6.1-2": 1
    }]  
})


// module.exports = Mock.mock('list/editData', {

// })

module.exports = Mock.mock('list/getExpand', {
    "list|3-6": [{
        "key|+1": 1,
        "id": 1,
        "shotDate": "@date",
        "shotImg": img,
        "ba|0-16.1": 5.6
    }]
})