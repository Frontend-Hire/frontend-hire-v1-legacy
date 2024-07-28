import CustomSandpack from '../components/CustomSandpack';

export function VariablesLet() {
  return (
    <CustomSandpack
      files={{
        '/script.js': {
          code: `// Declare a variable without defining it
let variableDeclared;

// Declare a variable as well as define it
let variableDeclaredAndDefined = 21;

// Assign a value to a previously declared variable
variableDeclared = 'value assigned now';

/*
Variables can be reassigned to any data type
not a good idea but JavaScript won't complain
but your fellow developers will
*/ 
variableDeclaredAndDefined = 'reassigned the value';`,
          active: true,
        },
        '/index.html': {
          readOnly: true,
          code: `<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
  <script src="script.js"></script>
</head>

<body>
  <h1>Check Browser Console For The Best Error Logs!</h1>
</body>

</html>`,
        },
      }}
    />
  );
}
