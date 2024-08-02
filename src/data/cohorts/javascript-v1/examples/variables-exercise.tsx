import CustomSandpack from '../components/CustomSandpack';

export function VariablesExerciseOne() {
  return (
    <CustomSandpack
      files={{
        '/script.js': {
          code: `// You can log to the console if you want`,
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

export function VariablesExerciseOneSolution() {
  return (
    <CustomSandpack
      isSolution
      files={{
        '/script.js': {
          code: `let myName = "Hruthik Reddy";

let myAge = 24;

let myFavoriteColor = "black";

let myFavoriteFood = "Biryani";

let myFavoriteSport = "Football";`,
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
