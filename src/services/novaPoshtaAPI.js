const ApiKey = process.env.NovaPoshta_API_Key;
// const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
// const novaPoshtaUrlDev = 'https://api.novaposhta.ua/v2.0/json/';
const novaPoshtaUrlProd = 'https://api.novaposhta.ua/v2.0/json/';

const getNovaPoshtaUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    // return corsAnywhereUrl + novaPoshtaUrlDev;
    return novaPoshtaUrlProd;
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
        // 'Api-Key': ApiKey,
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
        // 'Api-Key': ApiKey,
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

export const fetchWarehouses = async cityName => {
  const url = getNovaPoshtaUrl();

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Api-Key': ApiKey,
      },
      body: JSON.stringify({
        apiKey: ApiKey,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: cityName,
          Page: '1',
          Limit: '200',
          TypeOfWarehouseRef: '841339c7-591a-42e2-8233-7a0a00f0ed6f',
          // TypeOfWarehouseRef: '9a68df70-0267-42a8-bb5c-37f427e36ee4',
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

export const fetchPostomats = async cityName => {
  const url = getNovaPoshtaUrl();

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Api-Key': ApiKey,
      },
      body: JSON.stringify({
        apiKey: ApiKey,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: cityName,
          Page: '1',
          Limit: '200',
          TypeOfWarehouseRef: 'f9316480-5f2d-425d-bc2c-ac7cd29decf0',
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
