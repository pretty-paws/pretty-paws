import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useState } from 'react';
import { StyledOrderDetails } from './OrderDetails.styled';
import { Link } from 'react-router-dom';
import { deliveryMessage } from '../../../validation/messages';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../../store/AuthProvider';
import { UseSkeleton } from '../../../hooks/useSkeleton';
import useWindowSize from '../../../hooks/useWindowSize';

const OrderDetails = observer(({ register, handleChange, errors }) => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();

  const store = useStore();
  const {
    auth: { language },
    cart: { cart, total, cartArray, getAmount, getCartProductByID, state },
  } = store;

  console.log('language', language);

  useEffect(() => {
    cartArray.map(id => getCartProductByID(id, language));
  }, [language]);

  const [checked, setChecked] = useState(false);
  return (
    <StyledOrderDetails>
      <div className="order-details_heading">
        <h3 className="order-details_header">{t('Твоє замовлення')}</h3>

        <Link to="/cart">
          <svg width="24px" height="24px" className="order-details_edit">
            <use href={sprite + '#edit'} />
          </svg>
        </Link>
      </div>
      <div className="order-details__items-list">
        {cart.length !== 0 && state === 'done'
          ? cart.map(
              ({
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
                        <p className="amount">
                          {getAmount(id)} {t('шт')}
                        </p>
                        {is_promotional === 0 ? (
                          <p className="price">{price}₴</p>
                        ) : (
                          <p className="new-price-block">
                            <span className="new-price">
                              {promotional_price}₴
                            </span>
                            <span className="old-price">{price}₴</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
            )
          : state === 'pending' && (
              <div className="order-details__skeleton">
                <UseSkeleton
                  screen={screen}
                  cardsAmount={cartArray.length}
                  page={'orderDetails'}
                />
              </div>
            )}
        {/* {cart.map(
          ({
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
                    <p className="amount">
                      {getAmount(id)} {t('шт')}
                    </p>
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
        )} */}
      </div>
      <div>
        <ul className="order-details__sum-list">
          <li>
            <p>{t('Сума замовлення:')}</p>
            <p>
              {total} {t('грн')}
            </p>
          </li>
          <li>
            <p>{t('Доставка:')}</p>
            <p>0 {t('грн')}</p>
          </li>
          <li>
            <p>{t('Знижка:')}</p>
            <p> 0 %</p>
          </li>
          <li>
            <p>
              <b>{t('Сума до сплати:')}</b>
            </p>
            <p>
              <b>
                {total} {t('грн')}
              </b>
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
            {t('Оформляючи замовлення, я приймаю')}
            <span>
              {t('умови договору публічної оферти, повернення і безпеки')}
            </span>
          </span>
          {errors.acceptConditions && (
            <span className="delivery-error">
              {t(deliveryMessage.acceptConditions)}
            </span>
          )}
        </label>
      </div>
      <button className="order-details__button" type="submit">
        {t('Підтвердити замовлення')}
      </button>
    </StyledOrderDetails>
  );
});

export default OrderDetails;
