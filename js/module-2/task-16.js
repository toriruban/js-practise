let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}

console.log(type); // 'adult'

// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

age >= 18  ? 'adult' : 'child';