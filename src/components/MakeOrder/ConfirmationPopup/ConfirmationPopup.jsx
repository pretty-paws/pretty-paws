import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyledConfirmationPopup } from './ConfirmationPopup.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ConfirmationPopup = observer(
  ({ setConfirmationPopup, confirmationPopup }) => {
    const { t } = useTranslation();

    if (confirmationPopup) {
      document.body.classList.add('menu-opened');
    } else {
      document.body.classList.remove('menu-opened');
    }

    const navigate = useNavigate();
    return (
      <StyledConfirmationPopup>
        <div className="backdrop" />
        <div className="popup">
          <svg width="48px" height="48px" className="confirmationPopup_edit">
            <use href={sprite + '#success'} />
          </svg>
          <h3 className="confirmation-popup_title">
            {t('Ваше замовлення успішно оформлено')}
          </h3>
          <p className="confirmation-popup_text">
            {t('Номер вашого замовлення')} <b> № 52305</b>.{' '}
            {'Ви можете слідкувати за його статусом в особистому кабінеті'}
          </p>
          <button
            type="button"
            className="button to-catalogue"
            onClick={() => {
              setConfirmationPopup(false);
              navigate('/catalog/animal/cats/category/food-for-cats');
            }}
          >
            {t('Повернутися до каталогу')}
          </button>
          <button
            type="button"
            className="button to-cabinet"
            onClick={() => {
              setConfirmationPopup(false);
              navigate('/cabinet/orders');
            }}
          >
            {t('Мій кабінет')}
          </button>
        </div>
      </StyledConfirmationPopup>
    );
  }
);

export default ConfirmationPopup;
