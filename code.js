const person = {
  firstName: 'Alex',
  lastName: 'Hermundson',
  address: {
    street: '1234 Main St.',
    city: 'Minneapolis',
    state: 'Minnesota',
    zip: '12345'
  }
};

const firstName = person.firstName;
const { firstName, lastName } = person;
console.log(firstName) // => 'Alex'
console.log(lastName); // => 'Hermundson'

let firstName = 'Aaron';
({ firstName } = person);
console.log(firstName); // => 'Alex'

const { firstName: name } = person;
console.log(name); // => 'Alex'

const { firstName = 'No name given' } = person;

const {
  address: { street }
} = person;
console.log(street); // => '1234 Main St.

function createTableCellObject(value, colSpan, className, style) {
  const borderStyle = 'border: 1px solid black;';
  return {
    value: value || value === 0 ? value : '',
    colSpan: colSpan ? colSpan : 1,
    className: className ? className : '',
    style: style ? style : borderStyle
  };
}

createTableCellObject('$1000', null, null, 'border: 1px solid pink');

createTableCellObject({ value: '$1000', style: 'border: 1px solid pink' });

function createTableCellObject({ value, colSpan, className, style }) {
  const borderStyle = 'border: 1px solid black;';
  return {
    value: value || value === 0 ? value : '',
    colSpan: colSpan ? colSpan : 1,
    className: className ? className : '',
    style: style ? style : borderStyle
  };
}

function createTableCellObject({
  value,
  colSpan = 1,
  className = '',
  style = 'border: 1px solid black;'
}) {
  return {
    value: value || value === 0 ? value : '',
    colSpan: colSpan,
    className: className,
    style: style
  };
}

const numbers = [1, 2, 3, 4, 5];
const [one, two] = numbers;
console.log(one); // => 1
console.log(two); // => 2
const [, , three] = numbers;
console.log(three); // => 3

const person = {
  firstName: 'Alex',
  lastName: 'Hermundson',
  address: {
    street: '1234 Main St.',
    city: 'Minneapolis',
    state: 'Minnesota',
    zip: '12345'
  },
  kids: ['Anders', 'Nora']
};

const {
  address: city,
  kids: [firstKid, secondKid]
} = person;
console.log(city); // => 'Minneapolis'
console.log(firstKid); // => 'Anders'
console.log(secondKid); // => 'Nora'

const greeting = 
    `Hi. My name is ${person.firstName.toLowerCase()} ${person.lastName.toLowerCase()}`;

const multiLineGreeting =
  'Hi. My ' + 'name is ' + person.firstName + ' ' + person.lastName;

const multilineGreeting = `Hi. My 
name is 
${person.firstName}
${person.lastName}`;

const htmlString = `
    <div>
        <h1>${person.firstName}</h1>
    </div>
`;

function templateTag(strings, ...values) {
  console.log(strings);
  console.log(values);
}

const htmlString = templateTag`
    <div>
        <h1>${person.firstName}</h1>
    </div>
`;

function templateTagFunction(strings, ...values) {
  values.forEach(value => {
    if (typeof value === 'function') {
      value();
    }
  });
}
templateTagFunction`Execute this function ${() =>
  console.log('Function was executed')}`;

const styledDiv = styled`
    color: ${props => (props.primary ? 'blue' : 'red')},
    font-family: 'Roboto',
    border: 1px solid pink
`;

<li>
                  Bindings using var are Function scoped whereas bindings using
                  let are block scoped
                </li>
                <li>var is hoisted</li>
                <li>var is hoisted</li>
                <li>What about const?</li>

// => var is hoisted
// => Bindings using var are Function scoped whereas bindings using let are block scoped
// => var is hoisted
// => What about const?

// => 