'use client';

import React from 'react';

type CustomCodeViewerProps = {
  filename?: string;
};

export default function CustomCodeViewer({
  children,
  filename,
}: React.PropsWithChildren<CustomCodeViewerProps>) {
  return (
    <div className="not-prose relative my-2 overflow-hidden rounded">
      {filename && (
        <p className="break-all bg-primary px-2 py-1 font-medium">{filename}</p>
      )}
      {children}
    </div>
  );
}
