import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import FooterSocialBar from '../../SharedLayout/Footer/FooterSocialBar';

const ContactDetails = () => {
  return (
    <div>
      <div>
        <h3>Call-центр</h3>
        <div>
          <svg className="page__info-clock" height="14px" width="14px">
            <use href={sprite + '#phone'} />
          </svg>
          <p>0 800 00 00 00</p>
        </div>
        <p>Безкоштовно з усіх номерів по Україні</p>
      </div>
      <div>
        <h3>Графік роботи call-центру</h3>
        <div>
          <p>Понеділок — П’ятниця</p>
          <p>09:00 - 20:00</p>
        </div>
        <div>
          <p>Субота — Неділя</p>
          <p>09:00 - 18:00</p>
        </div>
      </div>
      <div>
        <h3>E-mail</h3>
        <div>
          <svg className="page__info-clock" height="14px" width="14px">
            <use href={sprite + '#email'} />
          </svg>
          <p>0 800 00 00 00</p>
        </div>
      </div>
      <div>
        <h3>Наші соцмережі:</h3>
        <div>
          <FooterSocialBar />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
