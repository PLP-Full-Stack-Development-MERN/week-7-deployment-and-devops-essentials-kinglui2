const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(metric => {
        console.log('CLS:', metric);
        onPerfEntry(metric);
      });
      getFID(metric => {
        console.log('FID:', metric);
        onPerfEntry(metric);
      });
      getFCP(metric => {
        console.log('FCP:', metric);
        onPerfEntry(metric);
      });
      getLCP(metric => {
        console.log('LCP:', metric);
        onPerfEntry(metric);
      });
      getTTFB(metric => {
        console.log('TTFB:', metric);
        onPerfEntry(metric);
      });
    });
  }
};

export default reportWebVitals;
