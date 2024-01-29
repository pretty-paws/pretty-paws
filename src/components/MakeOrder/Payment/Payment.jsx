import { observer } from 'mobx-react-lite';
import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledPayment } from './Payment.styled';

const Payment = observer(
  ({ setOpenedSection, openedSection, register, handleChange }) => {
    return (
      <StyledPayment>
        <div
          className={
            openedSection.payment ? 'payment-title edit' : 'payment-title'
          }
        >
          <p>3. Оплата</p>
          <svg
            width="24px"
            height="24px"
            onClick={() => {
              setOpenedSection(prevState => ({
                ...prevState,
                payment: !openedSection.payment,
              }));
            }}
          >
            <use href={sprite + '#arrow-black'} />
          </svg>
        </div>
        {openedSection.payment ? (
          <div className="delivery__radio-btns">
            <div className="radio-btn-box">
              <input
                type="radio"
                id="online"
                {...register('payment', {
                  required: true,
                })}
                value="online"
                onClick={e => {
                  handleChange('payment', e.currentTarget.value);
                  // setDelivery(e.currentTarget.value);
                }}
              />
              <label className="radio_label" htmlFor="online">
                Карткою онлайн на сайті
              </label>
            </div>
            <div className="radio-btn-box">
              <input
                type="radio"
                id="onReceiving"
                {...register('payment', {
                  required: true,
                })}
                value="onReceiving"
                onClick={e => {
                  handleChange('deliveryWay', e.currentTarget.value);
                  // setDelivery(e.currentTarget.value);
                }}
              />
              <label className="radio_label" htmlFor="onReceiving">
                При отриманні
              </label>
            </div>
            <div className="radio-btn-box">
              <input
                type="radio"
                id="onAccount"
                {...register('payment', {
                  required: true,
                })}
                value="onAccount"
                onClick={e => {
                  handleChange('deliveryWay', e.currentTarget.value);
                  // setDelivery(e.currentTarget.value);
                }}
              />
              <label className="radio_label" htmlFor="onAccount">
                На рахунок для юридичних осіб
              </label>
            </div>
          </div>
        ) : null}
      </StyledPayment>
    );
  }
);

export default Payment;
