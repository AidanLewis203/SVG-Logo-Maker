const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');

// Function to prompt user for text, color, and shape
const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters: ',
            validate: function(input) {
                return input.length <= 3 ? true : 'Please enter up to three characters';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color: '
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape: ',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color: '
        }
    ]

    class SVG{
        constructor(){
            this.textElement = "";
            this.shapeElement = "";
        }
        render(){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
        }
        setTextElement(text, color){
            this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
        }
        setShapeElement(shape, color){
            this.shapeElement = shape.render()
            this.shapeElement = this.shapeElement.replace('fill=""', `fill="${color}"`);
        }
    }

// Main function to create SVG file
function writeToFile(fileName, data) {
        fs.writeFileSync(fileName, data, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('Generated ' + fileName);
        });
    }

// Main function to prompt user for text, color, and shape
async function init() {
        const answers = await inquirer.prompt(questions);
        const svg = new SVG();
        svg.setTextElement(answers.text, answers.textColor);
        switch (answers.shape) {
            case 'Circle':
                svg.setShapeElement(new Circle(), answers.shapeColor);
                break;
            case 'Triangle':
                svg.setShapeElement(new Triangle(), answers.shapeColor);
                break;
            case 'Square':
                svg.setShapeElement(new Square(), answers.shapeColor);
                break;
        }
        writeToFile('./dist/logo.svg', svg.render());
      }

      init();
