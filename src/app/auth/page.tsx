import SignIn from '@/components/SignIn';

export default function Auth() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <SignIn />
      </div>
    </main>
  );
}
