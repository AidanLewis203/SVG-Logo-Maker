const { Triangle, Square, Circle } = require('./shapes');

  describe('Triangle', () => {
    test('should render a triangle', () => {
      const triangle = new Triangle();
      var color = 'blue';
      triangle.setColor(color);
      expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
  describe('Square', () => {
    test('should render a square', () => {
      const square = new Square();
      var color = 'red';
      square.setColor(color);
      expect(square.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red" />');
    });
  });
  describe('Circle', () => {
    test('should render a circle', () => {
      const circle = new Circle();
      var color = 'green';
      circle.setColor(color);
      expect(circle.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green" />');
    });
  });