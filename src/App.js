import React, { Suspense } from "react";

const ComponentA = React.lazy(() => import("./ComponentA"));
const ComponentB = React.lazy(() => import("./ComponentB"));

export default function App() {
  return (
    <div className="App">
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <h2>Component A</h2>
          <ComponentA />
        </div>
        <div>
          <h2>Component B</h2>
          <ComponentB />
        </div>
      </Suspense>
    </div>
  );
}
