declare global {
  interface Window {
    utmify?: {
      track: (eventName: string, parameters?: Record<string, any>) => void;
      setPixelId: (pixelId: string) => void;
      init: (config?: Record<string, any>) => void;
    };
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    pixel?: {
      track: (eventName: string, parameters?: Record<string, any>) => void;
    };
    pixelId?: string;
    utmifyPermissions?: Record<string, any>;
  }
}

// UTMify tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined') {
      // Use normalized URL for Vercel
      const trackingUrl = window.utmifyBaseUrl || window.location.href;
      const enhancedParameters = {
        ...parameters,
        page_location: trackingUrl,
        timestamp: Date.now(),
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        referrer: document.referrer,
        is_vercel: window.location.hostname.includes('vercel.app')
      };
      
      // Try multiple UTMify methods
      if (window.utmify && window.utmify.track) {
        window.utmify.track(eventName, enhancedParameters);
      }
      
      // Also trigger Meta Pixel events for compatibility
      if (window.fbq) {
        window.fbq('track', eventName, enhancedParameters);
      }
      
      // Fallback methods
      if (window.pixel && window.pixel.track) {
        window.pixel.track(eventName, enhancedParameters);
      }
      
      // Direct pixel tracking
      if (window.pixelId) {
        const img = new Image();
        const params = new URLSearchParams({
          pixel_id: window.pixelId,
          event: eventName,
          data: JSON.stringify(enhancedParameters)
        });
        img.src = `https://api.utmify.com.br/track?${params.toString()}`;
      }
      
      // Console log for debugging
      console.log('UTMify Event:', eventName, enhancedParameters);
    }
  } catch (error) {
    console.warn('UTMify tracking error:', error);
    
    // Fallback tracking method
    try {
      if (window.pixelId) {
        fetch('https://api.utmify.com.br/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pixel_id: window.pixelId,
            event: eventName,
            parameters: enhancedParameters || {}
          })
        }).catch(() => {});
      }
    } catch (fallbackError) {
      console.warn('UTMify fallback error:', fallbackError);
    }
  }
};

export const initUTMify = (pixelId?: string, config?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined') {
      if (pixelId) {
        window.pixelId = pixelId;
      }
      
      if (window.utmify) {
        if (window.utmify.setPixelId && pixelId) {
          window.utmify.setPixelId(pixelId);
        }
        if (window.utmify.init) {
          window.utmify.init(config);
        }
      }
      
      // Set global permissions
      window.utmifyPermissions = {
        localStorage: true,
        sessionStorage: true,
        cookies: true,
        tracking: true,
        analytics: true,
        crossDomain: true,
        thirdParty: true,
        fullAccess: true,
        ...config
      };
    }
  } catch (error) {
    console.warn('UTMify initialization error:', error);
  }
};