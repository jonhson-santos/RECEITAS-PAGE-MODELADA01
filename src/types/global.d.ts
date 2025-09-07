// Declarações globais para TypeScript
declare global {
  interface Window {
    pixelId: string;
    pixelConfig: {
      trackPageView: boolean;
      trackClicks: boolean;
      trackScrollDepth: boolean;
      trackTimeOnPage: boolean;
      trackFormSubmissions: boolean;
      trackButtonClicks: boolean;
      trackVideoViews: boolean;
      trackDownloads: boolean;
      trackOutboundLinks: boolean;
      trackCustomEvents: boolean;
    };
    normalizedUrl: string;
    utmify: {
      pixel: {
        track: (eventName: string, data?: any) => void;
      };
    };
  }
}

export {};