declare global {
  interface Window {
    pixelId: string;
    utmify: {
      track: (eventName: string, parameters?: Record<string, any>) => void;
      identify: (userId: string, traits?: Record<string, any>) => void;
      page: (name?: string, properties?: Record<string, any>) => void;
    };
  }
}

export {};