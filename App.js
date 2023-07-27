const title = React.createElement(
    "div", {
    id: "parent"
},
    [
        React.createElement("div", {
            id: "child"
        },
            [
                React.createElement("h1", {}, "This is h1 tag!"),
                React.createElement("h2", {}, "This is h2 tag!")
            ]
        ),
        React.createElement("div", {
            id: "horizontalLine",
        },
            React.createElement("hr", {},)
        ),
        React.createElement("div", {
            id: "child"
        },
            [
                React.createElement("h1", {}, "This is h1 tag!"),
                React.createElement("h2", {}, "This is h2 tag!")
            ]
        )
    ]
);

console.log(title);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);