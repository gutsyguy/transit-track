import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json"; 
import Index from "./Index";

const App: React.FC = () => {
  return (
    // @ts-ignore - Temporarily ignore the TypeScript error
    <TailwindProvider utilities={utilities}>
      <Index />
    </TailwindProvider>
  );
};

export default App;
