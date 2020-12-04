ReactDOM.render(
    <h1>Hello, world!</h1>,
    <p>Hello, my name is {{name}}. I am from {{hometown}}. I have {{kids.length}} kids:</p>,
    <ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>,

    document.getElementById('root')
);