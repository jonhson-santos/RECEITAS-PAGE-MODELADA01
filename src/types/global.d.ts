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

// UTMify tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && window.utmify) {
      window.utmify.track(eventName, parameters);
    }
  } catch (error) {
    console.warn('UTMify tracking error:', error);
  }
};

export const initUTMify = (pixelId?: string, config?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && window.utmify) {
      if (pixelId) {
        window.utmify.setPixelId(pixelId);
      }
      window.utmify.init(config);
    }
  } catch (error) {
    console.warn('UTMify initialization error:', error);
  }
};

export {};