const reportWebVitals = (onPerfEntry) => {
   if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(() => {});
   }
};

export default reportWebVitals;
