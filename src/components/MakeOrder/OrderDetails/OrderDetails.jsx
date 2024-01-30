import { observer } from 'mobx-react-lite';
import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useState } from 'react';
import { StyledOrderDetails } from './OrderDetails.styled';
import { Link } from 'react-router-dom';

const OrderDetails = observer(({ cart, total, register, handleChange }) => {
  const [checked, setChecked] = useState(true);
  return (
    <StyledOrderDetails>
      <div className="order-details_heading">
        <h3 className="order-details_header">Твоє замовлення</h3>

        <Link to="/cart">
          <svg width="24px" height="24px" className="order-details_edit">
            <use href={sprite + '#edit'} />
          </svg>
        </Link>
      </div>
      <div className="order-details__items-list">
        {cart.map(
          ({
            amount,
            short_description,
            id,
            price,
            promotional_price,
            is_promotional,
            title,
            image_url,
          }) => {
            return (
              <div key={id} className="order-details__item">
                <img src={image_url} alt={title} />
                <div className="order-details__item-description-block">
                  <p className="order-details__item-description">
                    {title} - {short_description}
                  </p>
                  <div className="order-details__amount-price-block">
                    <p className="amount">{amount} шт</p>
                    {is_promotional === 0 ? (
                      <p className="price">{price}₴</p>
                    ) : (
                      <p className="new-price-block">
                        <span className="new-price">{promotional_price}₴</span>
                        <span className="old-price">{price}₴</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div>
        <ul className="order-details__sum-list">
          <li>
            <p>Сума замовлення:</p>
            <p>{total} грн</p>
          </li>
          <li>
            <p>Доставка:</p>
            <p>0 грн</p>
          </li>
          <li>
            <p>Знижка:</p>
            <p> -0 %</p>
          </li>
          <li>
            <p>
              <b>Сума до сплати:</b>
            </p>
            <p>
              <b>{total} грн</b>
            </p>
          </li>
        </ul>
      </div>
      <div className="checkbox-wrapper">
        <label className="agreement__label">
          <input
            className={checked ? 'checked' : ''}
            {...register('acceptConditions', {
              required: true,
            })}
            type="checkbox"
            checked={checked}
            onChange={e => {
              setChecked(e.currentTarget.checked);
              handleChange('acceptConditions', e.currentTarget.checked);
            }}
          />
          {checked ? (
            <svg width="24px" height="24px" className="agreement__check">
              <use href={sprite + '#check'} />
            </svg>
          ) : null}
          <span className="agreement__text">
            Оформляючи замовлення, я приймаю
            <span> умови договору публічної оферти, повернення і безпеки </span>
          </span>
        </label>
      </div>
      <button className="order-details__button" type="submit">
        Підтвердити замовлення
      </button>
    </StyledOrderDetails>
  );
});

export default OrderDetails;
