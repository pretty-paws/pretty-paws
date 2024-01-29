import React from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
import { Link } from 'react-router-dom';
import sprite from '../../img/svg-sprite/sprite.svg';
import { StyledMakeOrder } from './MakeOrder.styled';
import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// import { useTranslation } from 'react-i18next';
import Delivery from './Delivery/Delivery';
import PersonalData from './PersonalData/PersonalData';
import Payment from './Payment/Payment';
import Agreement from './Agreement/Agreement';

const MakeOrder = observer(() => {
  // const { t } = useTranslation();
  const store = useStore();
  const {
    auth: { user, updateProfile, state },
    novaPoshta: {
      getDistricts,
      getCities,
      districts,
      cities,
      getWarehouses,
      warehouses,
    },
  } = store;
  const values = user;

  const [openedSection, setOpenedSection] = useState({
    personalData: false,
    delivery: true,
    payment: true,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      surname: user.surname,
      phone_number: user.phone_number,
      email: user.email,
      district: '',
      city: '',
      deliveryWay: '',
      street: '',
      house: '',
      apartment: '',
      warehouse: '',
      payment: '',
      agreement: true,
    },
    values,
  });
  const handleChange = (name, value) => {
    setValue(name, value);
  };

  const onSubmit = data => console.log(data);

  return state === 'done' ? (
    <GlobalContainer>
      <StyledMakeOrder>
        <Link to="/cart">
          <div className="make-order__back">
            <svg width="24px" height="24px">
              <use href={sprite + '#arrow-blue'} />
            </svg>
            <p>До кошика</p>
          </div>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PersonalData
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            updateProfile={updateProfile}
            user={user}
            getDistricts={getDistricts}
            setOpenedSection={setOpenedSection}
            openedSection={openedSection}
          />
          <Delivery
            register={register}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            setOpenedSection={setOpenedSection}
            openedSection={openedSection}
            getCities={getCities}
            districts={districts}
            cities={cities}
            getWarehouses={getWarehouses}
            warehouses={warehouses}
          />
          <Payment
            setOpenedSection={setOpenedSection}
            openedSection={openedSection}
            register={register}
            handleChange={handleChange}
          />
          <Agreement handleChange={handleChange} register={register} />
        </form>
      </StyledMakeOrder>
    </GlobalContainer>
  ) : null;
});

export default MakeOrder;
