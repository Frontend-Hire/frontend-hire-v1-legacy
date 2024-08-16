import CustomSandpack from '../components/CustomSandpack';

const excerciseCode = `<h1>Comment Me Out!</h1>
<h1>Hello World!</h1>
<h2>Wow!</h2>
<h2>Comment Me Out!</h2>

<p>Comment Me Out!</p>
<p>Comment Me Out!</p>`;

export function CommentsExercise() {
  return <CustomSandpack files={{ '/index.html': excerciseCode }} />;
}

const solutionCode = `<!-- <h1>Comment Me Out!</h1> -->
<h1>Hello World!</h1>
<h2>Wow!</h2>
<!-- <h2>Comment Me Out!</h2> -->

<!-- <p>Comment Me Out!</p>
<p>Comment Me Out!</p> -->
`;

export function CommentsSolution() {
  return <CustomSandpack isSolution files={{ '/index.html': solutionCode }} />;
}
