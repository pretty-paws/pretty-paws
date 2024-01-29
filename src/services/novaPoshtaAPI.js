const ApiKey = process.env.NovaPoshta_API_Key;
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const novaPoshtaUrlDev = 'https://api.novaposhta.ua/v2.0/json/';
const novaPoshtaUrlProd = 'https://api.novaposhta.ua/v2.0/json/';

const getNovaPoshtaUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return corsAnywhereUrl + novaPoshtaUrlDev;
  } else {
    return novaPoshtaUrlProd;
  }
};

export const fetchDistricts = async () => {
  const url = getNovaPoshtaUrl();

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': ApiKey,
      },
      body: JSON.stringify({
        apiKey: ApiKey,
        modelName: 'Address',
        calledMethod: 'getSettlementAreas',
        methodProperties: {
          Ref: '',
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

export const fetchCities = async (areaRef, page = 1) => {
  const url = getNovaPoshtaUrl();

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': ApiKey,
      },
      body: JSON.stringify({
        apiKey: ApiKey,
        modelName: 'Address',
        calledMethod: 'getSettlements',
        methodProperties: {
          AreaRef: areaRef,
          Warehouse: '1',
          Limit: '150',
          page: page.toString(),
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

export const fetchWarehouses = async cityRef => {
  const url = getNovaPoshtaUrl();

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': ApiKey,
      },
      body: JSON.stringify({
        apiKey: ApiKey,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityRef: cityRef,
          Page: '2',
          Limit: '200',
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};
