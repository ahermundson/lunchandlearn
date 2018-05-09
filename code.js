class Person {
  constructor() {
    this.age = 33;
    this.name = 'Alex Hermundson';
    this.showGreeting = false;
    this.greeting = `Hi, my name is ${this.name} and I am ${this.age}`;
    this.showGreetingClick = () => {
      console.log(this.greeting);
      setTimeout(() => {
        this.hideGreeting();
      }, 2000);
    };
    this.hideGreeting = () => {
      console.log('hide the greeting');
    };
  }
}
