import CustomSandpack from '../components/CustomSandpack';

export function CommentsExercise() {
  return (
    <CustomSandpack
      showPreview
      files={{
        '/index.html': `<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
  <script src="script.js"></script>
</head>

<body>
  <h1>Hello world</h1>
  <h2>Comment Me Out!</h2>
  <script>
    console.log("Comment me out!");
    console.log("Hello World from index.html!");
  </script>
</body>

</html>`,
        '/script.js': `console.log("Hello, World from script.js!")

console.log(\`
Long text
that has to be commented out!
\`)`,
      }}
    />
  );
}

export function CommentsSolution() {
  return (
    <CustomSandpack
      isSolution
      showPreview
      files={{
        '/index.html': `<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
  <script src="script.js"></script>
</head>

<body>
  <h1>Hello world</h1>
  <!-- <h2>Comment Me Out!</h2> -->
  <script>
    // console.log("Comment me out!");
    console.log("Hello World from index.html!");
  </script>
</body>

</html>`,
        '/script.js': `console.log("Hello, World from script.js!");

/* console.log(\`
Long text
that has to be commented out!
\`); */`,
      }}
    />
  );
}
