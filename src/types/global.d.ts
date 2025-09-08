declare global {
  interface Window {
    utmify?: {
      track: (eventName: string, parameters?: Record<string, any>) => void;
      setPixelId: (pixelId: string) => void;
      init: (config?: Record<string, any>) => void;
    };
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export {};