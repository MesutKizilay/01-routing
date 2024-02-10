import React, { ReactNode } from "react";

export default function TestLayout({ children,...rest }: Readonly<{ children: ReactNode }>) {
  console.log(rest);

  return (
    <div>
      <h1>Test layout</h1>
      {children}
    </div>
  );
}