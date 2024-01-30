import {
  corsAnywhereUrl,
  novaPoshtaUrlDev,
  novaPoshtaUrlProd,
} from './novaPoshtaAPI';

export const getNovaPoshtaUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return corsAnywhereUrl + novaPoshtaUrlDev;
  } else {
    return novaPoshtaUrlProd;
  }
};
