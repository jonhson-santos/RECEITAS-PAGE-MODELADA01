// Clean global type definitions
declare global {
  interface Window {
    pixelId?: string;
    utmify?: (action: string, event: string, data?: any) => void;
  }
}

export {};