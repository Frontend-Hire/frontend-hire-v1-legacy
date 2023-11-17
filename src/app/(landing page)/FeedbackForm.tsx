'use client';

export default function FeedbackForm() {
  return (
    <>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfjugtMYhVqLNe084SqUkom7Syhv58KwTajqw6jyYJ4bbRP1Q/viewform?embedded=true"
        width="100%"
        height="400px"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading...
      </iframe>
      <p>
        If the form does not render, then you can send the feedback here{' '}
        <a
          className="underline hover:text-red-500"
          href="https://forms.gle/ndLsjSEvjqFKfbXR9"
          target="_blank"
        >
          Google Form Link
        </a>
      </p>
    </>
  );
}
