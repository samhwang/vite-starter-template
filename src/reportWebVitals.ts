import { ReportHandler, getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

async function reportWebVitals(onPerfEntry?: ReportHandler) {
  if (!onPerfEntry) {
    return;
  }

  getCLS(onPerfEntry);
  getFID(onPerfEntry);
  getFCP(onPerfEntry);
  getLCP(onPerfEntry);
  getTTFB(onPerfEntry);
}

export default reportWebVitals;
