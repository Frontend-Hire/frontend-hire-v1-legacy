'use client';
import React from 'react';

export default function Banner({ children }: React.PropsWithChildren) {
  const [isBannerOpen, setIsBannerOpen] = React.useState(true);

  if (!isBannerOpen) return null;

  return (
    <div className="flex items-center bg-primary/40 px-[20px] py-[5px] text-xs sm:text-sm">
      <span className="grow text-center">{children}</span>
      <button onClick={() => setIsBannerOpen(false)}>X</button>
    </div>
  );
}
