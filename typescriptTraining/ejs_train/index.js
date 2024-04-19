"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
let ejs = require('ejs');
let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', { people: people });
console.log(html, html.type);
let bound = { charts: {} };
bound.charts = [
    {
        id: "sadsa1",
        JsonChart: {
            data: [
                {
                    x: ["giraffes", "orangutans", "monkeys"],
                    y: [20, 14, 23],
                    type: "bar",
                },
            ],
        },
    },
    {
        id: "sadsa2",
        JsonChart: {
            data: [
                {
                    x: ["giraffes", "orangutans", "monkeys"],
                    y: [20, 14, 23],
                    type: "bar",
                },
            ],
        },
    },
    {
        id: "sadsa3",
        JsonChart: {
            data: [
                {
                    x: ["giraffes", "orangutans", "monkeys"],
                    y: [20, 14, 23],
                    type: "bar",
                },
            ],
        },
    }
];
//ejs.renderFile("./template/index.ejs", {aVar:JSON.stringify(bound)}, {}, function(err: any, str: any){
ejs.renderFile("./template/index.ejs", { aVar: JSON.stringify(bound.charts) }, {}, function (err, str) {
    // str => Rendered HTML string
    console.log(str);
    (0, fs_1.writeFileSync)("./html.html", str, 'utf8');
});
