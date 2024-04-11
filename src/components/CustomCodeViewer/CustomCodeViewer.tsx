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
    <div className="not-prose relative overflow-hidden rounded">
      {filename && <p className="text-red-600">{filename}</p>}
      {children}
    </div>
  );
}
