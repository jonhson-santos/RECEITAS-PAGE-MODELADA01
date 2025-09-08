declare global {
  interface Window {
    pixelId?: string;
    pixel?: {
      track: (eventName: string, parameters?: Record<string, any>) => void;
    };
    utmify?: {
      track: (eventName: string, parameters?: Record<string, any>) => void;
      setPixelId: (pixelId: string) => void;
      init: (config?: Record<string, any>) => void;
    };
    utmifyPermissions?: Record<string, any>;
    utmifyPreventTracking?: boolean;
    utmifyAllowAll?: boolean;
    utmifyBypass?: boolean;
    trackingAllowed?: boolean;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export {};