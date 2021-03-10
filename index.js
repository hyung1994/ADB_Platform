Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    questions: [
        {
            type: "rating",
            name: "satisfaction",
            title: "Restrictions on outbound trips.",
            minRateDescription: "None",
            maxRateDescription: "Fully Restricted"
        },
        {
            type: "rating",
            name: "satisfaction1",
            title: "Restrictions on inbound trips.",
            minRateDescription: "None",
            maxRateDescription: "Fully Restricted"
        },
        {
            type: "rating",
            name: "satisfaction2",
            title: "Entrance registration and tracing through mobile phone.",
            minRateDescription: "None",
            maxRateDescription: "Fully"
        },
        {
            type: "rating",
            name: "satisfaction3",
            title: "Testing for everyone",
            minRateDescription: "None",
            maxRateDescription: "Fully"
        },
        {
            type: "rating",
            name: "satisfaction4",
            title: "Support for vaccine development",
            minRateDescription: "None",
            maxRateDescription: "Fully"
        }
    ],

};

window.survey = new Survey.Model(json);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//     });

$("#surveyElement").Survey({model: survey});
