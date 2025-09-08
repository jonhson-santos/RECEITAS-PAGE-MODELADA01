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
    if (typeof window !== 'undefined') {
      // Try multiple UTMify methods
      if (window.utmify && window.utmify.track) {
        window.utmify.track(eventName, parameters);
      }
      
      // Fallback methods
      if (window.pixel && window.pixel.track) {
        window.pixel.track(eventName, parameters);
      }
      
      // Direct pixel tracking
      if (window.pixelId) {
        const img = new Image();
        const params = new URLSearchParams({
          pixel_id: window.pixelId,
          event: eventName,
          data: JSON.stringify(parameters || {})
        });
        img.src = `https://api.utmify.com.br/track?${params.toString()}`;
      }
      
      // Console log for debugging
      console.log('UTMify Event:', eventName, parameters);
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
            parameters: parameters || {}
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