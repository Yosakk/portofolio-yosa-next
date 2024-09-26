import * as React from 'react';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>{children}</main>
  );
}
