import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { StyledDeliveryBack, StyledDeliveryform } from './Delivery.styled';
import Select from 'react-select';

const Delivery = observer(
  ({
    setOpenedSection,
    openedSection,
    districts,
    getCities,
    cities,
    getWarehouses,
    warehouses,
    register,
    handleChange,
    // handleSubmit,
  }) => {
    const [district, setDistrict] = useState('');
    const [city, getCity] = useState('');
    const [delivery, setDelivery] = useState(null);
    // console.log(city, delivery, setDelivery);
    // console.log('warehouses', warehouses);

    useEffect(() => {
      getCities({ areaRef: district });
    }, [district]);

    useEffect(() => {
      getWarehouses({ cityRef: city });
    }, [city]);

    const colourStyles = {
      control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: '#53C5BD',
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
    };

    // const {
    //   register,
    //   handleSubmit,
    //   formState: { errors },
    // } = useForm({
    //   defaultValues: {
    //     district: '',
    //     city: '',
    //     deliveryWay: '',
    //     street: '',
    //     house: '',
    //     apartment: '',
    //   },
    // });

    // console.log(errors);

    return (
      <StyledDeliveryBack>
        <div
          className={
            openedSection.delivery ? 'delivery-title edit' : 'delivery-title'
          }
        >
          <p>2. Доставка</p>
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
            <Select
              {...register('district', { required: true })}
              options={districts.map(district => ({
                value: district.ref,
                label: district.name,
              }))}
              placeholder="Виберіть область"
              styles={colourStyles}
              onChange={e => {
                handleChange('district', e.value);
                setDistrict(e.value);
              }}
            />
            <Select
              {...register('city', { required: true })}
              styles={colourStyles}
              isSearchable
              placeholder="Виберіть місто"
              options={cities.map(city => ({
                value: city.ref,
                label: city.name,
              }))}
              onChange={selectedOption => {
                handleChange('city', selectedOption.label);
                getCity(selectedOption.value);
              }}
            />
            <div className="delivery__radio-btns">
              <p> Виберіть спосіб доставляння:</p>
              <div className="radio-btn-box">
                <input
                  type="radio"
                  id="toPostOffice"
                  {...register('Виберіть спосіб доставляння:', {
                    required: true,
                  })}
                  value="warehouse"
                  onClick={e => {
                    handleChange('deliveryWay', e.currentTarget.value);
                    setDelivery(e.currentTarget.value);
                  }}
                />
                <label className="radio_label" htmlFor="toPostOffice">
                  У відділення Нової пошти
                </label>
              </div>
              <div className="radio-btn-box">
                <input
                  type="radio"
                  id="toPostBox"
                  {...register('Виберіть спосіб доставляння:', {
                    required: true,
                  })}
                  value="postomat"
                  onClick={e => {
                    handleChange('deliveryWay', e.currentTarget.value);
                    setDelivery(e.currentTarget.value);
                  }}
                />
                <label className="radio_label" htmlFor="toPostBox">
                  До поштомата Нової пошти
                </label>
              </div>
              <div className="radio-btn-box">
                <input
                  type="radio"
                  id="toAddress"
                  {...register('Виберіть спосіб доставляння:', {
                    required: true,
                  })}
                  value="address"
                  onClick={e => {
                    handleChange('deliveryWay', e.currentTarget.value);
                    setDelivery(e.currentTarget.value);
                  }}
                />
                <label className="radio_label" htmlFor="toAddress">
                  За адресою кур`єром Нової пошти
                </label>
              </div>
            </div>

            {delivery === 'address' && delivery !== null && (
              <>
                <div className="label-input-block">
                  <label className="delivery__street" htmlFor="street">
                    Вулиця
                  </label>
                  <input
                    onChange={e =>
                      handleChange('street', e.currentTarget.value)
                    }
                    className="delivery__street-input"
                    id="street"
                    type="text"
                    placeholder="Вулиця"
                    {...register('Вулиця', { required: true, max: 50, min: 0 })}
                  />
                </div>
                <div className="delivery__house-flat-block">
                  <div className="label-input-block">
                    <label className="delivery__house" htmlFor="house">
                      Номер будинку
                    </label>
                    <input
                      onChange={e =>
                        handleChange('house', e.currentTarget.value)
                      }
                      className="delivery__house-input"
                      id="house"
                      type="number"
                      placeholder="Номер будинку"
                      {...register('Номер будинку', { required: true })}
                    />
                  </div>
                  <div className="label-input-block">
                    <label className="delivery__flat" htmlFor="flat">
                      Номер квартири
                    </label>
                    <input
                      onChange={e =>
                        handleChange('apartment', e.currentTarget.value)
                      }
                      className="delivery__flat-input"
                      id="flat"
                      type="number"
                      placeholder="Номер квартири"
                      {...register('Номер квартири', { required: true })}
                    />
                  </div>
                </div>
              </>
            )}
            {delivery !== 'address' && delivery !== null && (
              <>
                <Select
                  {...register('warehouse', { required: true })}
                  styles={colourStyles}
                  isSearchable
                  placeholder="Виберіть відділення"
                  options={warehouses.map(warehouse => ({
                    value: warehouse.Ref,
                    label: warehouse.Description,
                  }))}
                  onChange={selectedOption => {
                    handleChange('warehouse', selectedOption.label);
                    getCity(selectedOption.label);
                  }}
                  // onInputChange={onCityInputChange}
                />
              </>
            )}
          </StyledDeliveryform>
        ) : null}
      </StyledDeliveryBack>
    );
  }
);

export default Delivery;

// const colourStyles = {
//   control: (baseStyles, state) => ({
//     ...baseStyles,
//     borderColor: '#53C5BD',
//     borderRadius: '8px',
//     padding: '6px 10px',
//     fontSize: '14px',
//     color: '#6C6C6C',
//     outline: state.isFocused ? 'none' : baseStyles.boxShadow,
//     boxShadow: state.isFocused ? 'none' : baseStyles.boxShadow,
//   }),
//   dropdownIndicator: baseStyles => ({
//     ...baseStyles,
//     color: 'black',
//   }),
//   indicatorSeparator: baseStyles => ({
//     ...baseStyles,
//     backgroundColor: 'transparent',
//   }),
//   menu: baseStyles => ({
//     ...baseStyles,
//     borderRadius: '6px',
//     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//   }),
//   option: (baseStyles, { isFocused, isSelected }) => ({
//     ...baseStyles,
//     backgroundColor: isSelected
//       ? '#53c5bec9'
//       : isFocused
//       ? '#E0F7F5'
//       : baseStyles.backgroundColor,
//     color: isSelected ? 'white' : baseStyles.color,
//   }),
// };
// {
/* <div className="make-order__personal-data-title edit">
          <p>2. Доставка</p>
          <svg
            width="24px"
            height="24px"
            onClick={() =>
              setOpenedSection(prevState => ({
                ...prevState,
                delivery: false,
              }))
            }
          >
            <use href={sprite + '#arrow-black'} />
          </svg>
        </div>
        <div className="custom-select">
          <Select
            options={districtsOptions}
            placeholder="Виберіть область"
            styles={colourStyles}
            onChange={setDistrict}
          />
        </div>
        <div className="custom-select">
          <Select
            options={citiesOptions}
            placeholder="Виберіть місто"
            styles={colourStyles}
            onChange={setDistrict}
          />
        </div>
        <form className="custom-radio">
          <p>Виберіть спосіб доставляння:</p>
          <div>
            <input
              type="radio"
              id="warehouse"
              name="warehouse"
              value="warehouse"
              checked
            />
            <label htmlFor="warehouse">У відділення Нової пошти</label>
          </div>
          <div>
            <input
              type="radio"
              id="poshtomat"
              name="poshtomat"
              value="poshtomat"
            />
            <label htmlFor="poshtomat">До поштомата Нової пошти</label>
          </div>
          <div>
            <input type="radio" id="adress" name="adress" value="adress" />
            <label htmlFor="adress">За адресою кур`єром Нової пошти</label>
          </div>
        </form> */
// }
// {
/* </div> */
// }
