//History information 
var historyItems = [{
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    },
    {
        year: 1234,
        history: 'SomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewordsSomewords',
        computer: 'xxxxxxxxxxxxxxxxxxxxx'
    }
]

// Make the information display to the time.html

var historyInfo = $('#historyInfo');
for (var i = 0; i < historyItems.length; i++) {
    var item = historyItems[i]
    historyInfo.append(
        '<tr> ' +

        '<td class="yearColumn">' + item.year + '</td>' +
        '<td class="historyColumn">' + item.history + '</td>' +
        '<td class="computerColumn">' + item.computer + '</td>' +

        '</tr>')
}