export const GA_TRACKING_ID = 'G-F6L6X7V4X1'; 

// Extend the window object to include gtag
declare global {
  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

// Log the page view
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events (Downloads, Clicks, etc.)
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  // Debug log: Open your browser console (F12) to see this when you click
  console.log(`[Analytics] Event Fired: ${action}`, { category, label, value });

  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.warn('[Analytics] window.gtag is not defined. You might be using an Ad Blocker.');
  }
};