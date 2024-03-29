import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { StyledDeliveryBack, StyledDeliveryform } from './Delivery.styled';
import Select from 'react-select';
import { deliveryMessage } from '../../../validation/messages';
import { useTranslation } from 'react-i18next';

const Delivery = observer(
  ({
    // language,
    setOpenedSection,
    openedSection,
    districts,
    getCities,
    cities,
    getWarehouses,
    warehouses,
    postomats,
    getPostomats,
    register,
    handleChange,
    errors,
    // handleDelivery,
    // handleSubmit,
  }) => {
    const { t } = useTranslation();

    const [district, setDistrict] = useState(null);
    const [city, getCity] = useState(null);
    const [delivery, setDelivery] = useState('warehouse');
    const [deliveryWay, setDeliveryWay] = useState(
      t('У відділення Нової пошти')
    );

    const [districtDefault, setDistrictDefault] = useState('null');
    const [cityDefault, setCityDefault] = useState(null);
    const [warehouseDefault, setWarehouseDefault] = useState(null);
    const [postomatDefault, setPostomatDefault] = useState(null);

    const [deliveryStreet, setDeliveryStreet] = useState('');
    const [deliveryHouse, setDeliveryHouse] = useState('');
    const [deliveryAppartment, setDeliveryAppartment] = useState('');

    useEffect(() => {
      district !== null && getCities({ areaRef: district });
    }, [district]);

    useEffect(() => {
      city !== null && getWarehouses({ cityName: city });
      city !== null && getPostomats({ cityName: city });
    }, [city]);

    const getSelectStyles = error => ({
      control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: error ? 'red' : '#53C5BD',
        borderRadius: '8px',
        width: '100%',
        marginBottom: '16px',
        fontSize: '14px',
        color: '#6C6C6C',
        outline: state.isFocused ? 'none' : baseStyles.boxShadow,
        boxShadow: state.isFocused ? 'none' : baseStyles.boxShadow,
      }),
      dropdownIndicator: baseStyles => ({
        ...baseStyles,
        color: 'black',
      }),
      indicatorSeparator: baseStyles => ({
        ...baseStyles,
        backgroundColor: 'transparent',
      }),
      menu: baseStyles => ({
        ...baseStyles,
        borderRadius: '6px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }),
      option: (baseStyles, { isFocused, isSelected }) => ({
        ...baseStyles,
        backgroundColor: isSelected
          ? '#53c5bec9'
          : isFocused
          ? '#E0F7F5'
          : baseStyles.backgroundColor,
        color: isSelected ? 'white' : baseStyles.color,
      }),
    });

    return (
      <StyledDeliveryBack>
        <div
          className={
            openedSection.delivery ? 'delivery-title edit' : 'delivery-title'
          }
        >
          <p>2. {t('Доставка')}</p>
          <svg
            width="24px"
            height="24px"
            onClick={() => {
              setOpenedSection(prevState => ({
                ...prevState,
                delivery: !openedSection.delivery,
              }));
            }}
          >
            <use href={sprite + '#arrow-black'} />
          </svg>
        </div>
        {openedSection.delivery ? (
          <StyledDeliveryform className="delivery__form">
            <span className="error-box">
              <Select
                {...register('district', { required: true })}
                options={districts.map(district => ({
                  value: district.ref,
                  label: district.name,
                }))}
                placeholder={t('Виберіть область')}
                styles={getSelectStyles(errors.district)}
                defaultValue={districtDefault}
                onChange={selectedOption => {
                  handleChange('district', selectedOption.value);
                  setDistrict(selectedOption.value);
                  setDistrictDefault({
                    value: selectedOption.value,
                    label: selectedOption.label,
                  });
                }}
              />
              {errors.district && (
                <span className="delivery-error">
                  {t(deliveryMessage.district)}
                </span>
              )}
            </span>
            <span className="error-box">
              <Select
                {...register('city', { required: true })}
                styles={getSelectStyles(errors.city)}
                isSearchable
                placeholder={t('Виберіть місто')}
                options={cities.map(city => ({
                  value: city.ref,
                  label: city.name,
                }))}
                defaultValue={cityDefault}
                onChange={selectedOption => {
                  handleChange('city', selectedOption.label);
                  getCity(selectedOption.label);
                  setCityDefault({
                    value: selectedOption.value,
                    label: selectedOption.label,
                  });
                }}
              />
              {errors.city && (
                <span className="delivery-error">
                  {t(deliveryMessage.city)}
                </span>
              )}
            </span>
            <div className="delivery__radio-btns">
              <p> {t('Виберіть спосіб доставляння:')}</p>
              <div className="radio-btn-box">
                <input
                  type="radio"
                  checked={deliveryWay === 'У відділення Нової пошти'}
                  id="toPostOffice"
                  {...register('deliveryWay', {
                    required: true,
                  })}
                  value="warehouse"
                  onClick={e => {
                    handleChange('deliveryWay', e.currentTarget.value);
                    setDelivery(e.currentTarget.value);
                    setDeliveryWay('У відділення Нової пошти');
                    // handleDelivery('e.currentTarget.value');
                  }}
                />
                <label className="radio_label" htmlFor="toPostOffice">
                  {t('У відділення Нової пошти')}
                </label>
              </div>
              <div className="radio-btn-box">
                <input
                  type="radio"
                  id="toPostBox"
                  {...register('deliveryWay', {
                    required: true,
                  })}
                  value="postomat"
                  checked={deliveryWay === 'До поштомата Нової пошти'}
                  onClick={e => {
                    handleChange('deliveryWay', e.currentTarget.value);
                    setDelivery(e.currentTarget.value);
                    setDeliveryWay('До поштомата Нової пошти');
                    // handleDelivery('e.currentTarget.value');
                  }}
                />
                <label className="radio_label" htmlFor="toPostBox">
                  {t('До поштомата Нової пошти')}
                </label>
              </div>
              <div className="radio-btn-box">
                <input
                  type="radio"
                  id="toAddress"
                  {...register('deliveryWay', {
                    required: true,
                  })}
                  value="address"
                  checked={deliveryWay === t('За адресою кур`єром Нової пошти')}
                  onClick={e => {
                    handleChange('deliveryWay', e.currentTarget.value);
                    setDelivery(e.currentTarget.value);
                    setDeliveryWay(t('За адресою кур`єром Нової пошти'));
                    // handleDelivery('e.currentTarget.value');
                  }}
                />
                <label className="radio_label" htmlFor="toAddress">
                  {t('За адресою кур`єром Нової пошти')}
                </label>
              </div>
            </div>

            {delivery === 'address' && delivery !== null && (
              <>
                <div className="label-input-block">
                  <label className="delivery__street" htmlFor="street">
                    {t('Вулиця')}
                  </label>
                  <input
                    className="delivery__street-input"
                    id="street"
                    type="text"
                    placeholder={t('Вулиця')}
                    {...register('street', {
                      onChange: e => {
                        handleChange('street', e.target.value);
                        setDeliveryStreet(e.target.value);
                      },
                      required: true,
                      max: 50,
                      min: 0,
                    })}
                  />
                </div>
                <div className="delivery__house-flat-block">
                  <div className="label-input-block">
                    <label className="delivery__house" htmlFor="house">
                      {t('Номер будинку')}
                    </label>
                    <input
                      className="delivery__house-input"
                      id="house"
                      type="number"
                      placeholder={t('Номер будинку')}
                      {...register('house', {
                        onChange: e => {
                          handleChange('house', e.target.value);
                          setDeliveryHouse(e.target.value);
                        },
                        required: true,
                      })}
                    />
                  </div>
                  <div className="label-input-block">
                    <label className="delivery__flat" htmlFor="flat">
                      {t('Номер квартири')}
                    </label>
                    <input
                      className="delivery__flat-input"
                      id="flat"
                      type="number"
                      placeholder={t('Номер квартири')}
                      {...register('apartment', {
                        onChange: e => {
                          handleChange('apartment', e.target.value);
                          setDeliveryAppartment(e.target.value);
                        },
                        onBlur: () => {
                          setOpenedSection(prev => ({
                            ...prev,
                            delivery: !prev.delivery,
                            payment: !prev.payment,
                          }));
                        },

                        required: true,
                      })}
                    />
                  </div>
                </div>
              </>
            )}
            {delivery === 'warehouse' && delivery !== null && (
              <span className="error-box">
                <Select
                  {...register('warehouse', { required: true })}
                  styles={getSelectStyles(errors.warehouse)}
                  isSearchable
                  placeholder={t('Виберіть відділення')}
                  options={warehouses.map(warehouse => ({
                    value: warehouse.Ref,
                    label: warehouse.Description,
                  }))}
                  defaultValue={warehouseDefault}
                  onChange={selectedOption => {
                    handleChange('warehouse', selectedOption.label);
                    setWarehouseDefault({
                      value: selectedOption.value,
                      label: selectedOption.label,
                    });
                  }}
                />
                {errors.warehouse && (
                  <span className="delivery-error">
                    {t(deliveryMessage.warehouse)}
                  </span>
                )}
              </span>
            )}
            {delivery === 'postomat' && delivery !== null && (
              <span className="error-box">
                <Select
                  {...register('postomat', { required: true })}
                  styles={getSelectStyles(errors.postomat)}
                  isSearchable
                  placeholder={t('Виберіть поштомат')}
                  options={postomats.map(postomat => ({
                    value: postomat.Ref,
                    label: postomat.Description,
                  }))}
                  defaultValue={postomatDefault}
                  onChange={selectedOption => {
                    handleChange('postomat', selectedOption.label);
                    setPostomatDefault({
                      value: selectedOption.value,
                      label: selectedOption.label,
                    });
                  }}
                />
                {errors.postomat && (
                  <span className="delivery-error">
                    {t(deliveryMessage.postomat)}
                  </span>
                )}
              </span>
            )}
          </StyledDeliveryform>
        ) : (
          <>
            <div className="delivery-done">
              <div>{t(deliveryWay)}</div>
              <div>
                {delivery === 'address' &&
                  `${t('Україна')}, ${
                    t('область ') + (districtDefault?.label || t('не обрано'))
                  }, ${t('місто ') + (cityDefault?.label ?? t('не обрано'))}, ${
                    t('вулиця ') + (deliveryStreet || t('вулицю не обрано'))
                  }, ${t('будинок № ') + (deliveryHouse || t('не обрано'))} , ${
                    t('квартира № ') + (deliveryAppartment || t('не обрано'))
                  }`}

                {delivery === 'warehouse' &&
                  `${t('Україна')}, ${
                    districtDefault?.label + ' ' + t('область') ??
                    t('область не обрано')
                  }, ${t('місто ') + (cityDefault?.label ?? t('не обрано'))},${
                    warehouseDefault?.label ?? t('відділення не обрано')
                  }`}

                {delivery === 'postomat' &&
                  `${t('Україна')}, ${
                    districtDefault?.label + ' ' + t('область') ??
                    t('область не обрано')
                  }, ${t('місто ') + (cityDefault?.label ?? t('не обрано'))},${
                    postomatDefault?.label ?? t('поштомат не обрано')
                  }`}
              </div>
            </div>
          </>
        )}
      </StyledDeliveryBack>
    );
  }
);

export default Delivery;
