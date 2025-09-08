import { App } from "./app"

describe('Test Suite for App Component', () => { // test suite , group of test cases
  const app = new App();

  it('Test case-1 from app component', () => { // test case
    expect(app).toBeDefined();
  });

  it('Should Test add function', () => {
    expect(app.add(10, 20)).toBe(30);
    expect(app.add(10, -20)).toBe(-10);
    expect(app.add(-10, -20)).toBe(-30);
    expect(app.add(-10, 20)).toBe(10);
  })

  it('Should Test mul function', () => {
    expect(app.mul(10, 20)).toBe(200);
    expect(app.mul(10, -20)).toBe(-200);
    expect(app.mul(-10, -20)).toBe(200);
    expect(app.mul(-10, 20)).toBe(-200);
  })
  
  it('Should Test isEven function', () => {
    expect(app.isEven(4)).toBe('even');
    expect(app.isEven(5)).toBe('odd');
  })

  it('should verify sumOfDigits function', () => {
    expect(app.sumOfDigits(125)).toBe(8);
  });

});
