import React from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
// import { Link } from 'react-router-dom';
import sprite from '../../img/svg-sprite/sprite.svg';
import { StyledMakeOrder } from './MakeOrder.styled';
import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createPortal } from 'react-dom';
// import { useTranslation } from 'react-i18next';
import Delivery from './Delivery/Delivery';
import PersonalData from './PersonalData/PersonalData';
import Payment from './Payment/Payment';
import Agreement from './Agreement/Agreement';
import OrderDetails from './OrderDetails/OrderDetails';
import ConfirmationPopup from './ConfirmationPopup/ConfirmationPopup';
import CancelOrder from './CancelOrder/CancelOrder';

const MakeOrder = observer(() => {
  // const { t } = useTranslation();
  const store = useStore();
  const {
    auth: { user, updateProfile, state },
    cart: { cart, total, createOrder, emptyCart },
    novaPoshta: {
      getDistricts,
      getCities,
      districts,
      cities,
      getWarehouses,
      warehouses,
      getPostomats,
      postomats,
    },
  } = store;
  const values = user;

  const [openedSection, setOpenedSection] = useState({
    personalData: false,
    delivery: true,
    payment: false,
  });

  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [cancelOrder, setCancelOrder] = useState(false);

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
      deliveryWay:
        'У відділення Нової пошти' || localStorage.getItem('deliveryWay'),
      street: '',
      house: '',
      apartment: '',
      warehouse: '',
      postomat: '',
      payment: '',
      agreement: true,
      acceptConditions: false,
    },
    values,
  });
  const handleChange = (name, value) => {
    console.log('name', name);
    setValue(name, value);
    if (name === 'payment')
      setOpenedSection(prev => ({
        ...prev,
        payment: !prev.payment,
      }));

    if (
      name === 'postomat' ||
      name === 'warehouse'
      // (name === 'apartment' && !errors.apartment)
    )
      setOpenedSection(prev => ({
        ...prev,
        delivery: !prev.delivery,
        payment: !prev.payment,
      }));
  };

  const onSubmit = ({
    name,
    surname,
    phone_number,
    email,
    district,
    city,
    deliveryWay,
    street,
    house,
    apartment,
    warehouse,
    postomat,
    payment,
    agreement,
    acceptConditions,
  }) => {
    setConfirmationPopup(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const order = {
      name,
      surname,
      phone_number,
      email,
      district,
      city,
      deliveryWay,
      street,
      house,
      apartment,
      warehouse,
      postomat,
      payment,
      agreement,
      acceptConditions,
      creationDate: new Date().toISOString(),
      cart,
      total,
    };
    createOrder(order);
    emptyCart();
    console.log(new Date().toISOString());
  };

  // useEffect(() => {
  //   console.log('district', district.errors);
  // }, [district]);

  return state === 'done' ? (
    <GlobalContainer>
      <StyledMakeOrder>
        {/* <Link to="/cart"> */}
        <div className="make-order__back" onClick={() => setCancelOrder(true)}>
          <svg width="24px" height="24px">
            <use href={sprite + '#arrow-blue'} />
          </svg>
          <p>До кошика</p>
        </div>
        {/* </Link> */}
        <h2 className="make-order__title">Оформлення замовлення</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="make-order__layout">
            <div>
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
                postomats={postomats}
                getPostomats={getPostomats}
                // handleDelivery={setDelivery}
              />
              <Payment
                setOpenedSection={setOpenedSection}
                openedSection={openedSection}
                register={register}
                handleChange={handleChange}
              />
              <Agreement handleChange={handleChange} register={register} />
            </div>

            <OrderDetails
              cart={cart}
              total={total}
              register={register}
              handleChange={handleChange}
              errors={errors}
            />
          </div>
        </form>

        {confirmationPopup === true
          ? createPortal(
              <ConfirmationPopup
                confirmationPopup={confirmationPopup}
                setConfirmationPopup={setConfirmationPopup}
              />,
              document.body
            )
          : null}
        {cancelOrder === true
          ? createPortal(
              <CancelOrder
                cancelOrder={cancelOrder}
                setCancelOrder={setCancelOrder}
              />,
              document.body
            )
          : null}
      </StyledMakeOrder>
    </GlobalContainer>
  ) : null;
});

export default MakeOrder;
