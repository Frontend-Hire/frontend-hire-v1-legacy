'use client';

import useIP from './useIP';

export default function GetIP() {
  const { data, isLoading, error } = useIP();

  const getIP = () => {
    if (isLoading) {
      return 'Getting IP...';
    }

    if (error) {
      return 'Unable to get IP';
    }

    if (!data) {
      return 'No IP found';
    }

    return data;
  };

  return (
    <div className="my-2 bg-card p-4 font-bold">
      <span>
        This is your IP Address{' '}
        <span className="text-red-600 before:content-['\''] after:content-['\'']">
          {getIP()}
        </span>{' '}
        that we got when you requested for this page.
      </span>
    </div>
  );
}
