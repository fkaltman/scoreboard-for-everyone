// CSS Module declarations
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

// Extend the global Window interface if needed
declare global {
  interface Window {
    // Add any global properties you might use
    gtag?: (...args: unknown[]) => void;
  }
}

// Make this file a module
export {};
