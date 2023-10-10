const REG_EXP = {
  nameRegExp: new RegExp(/^[A-Za-zА-Яа-яІіЇїЄє' -]+$/),
  phoneRegExp: new RegExp(/^[0-9]{9}$/),
  phoneEditRegExp: new RegExp(/^\+[0-9]{12}$/),
  emailRegExp: new RegExp(/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
  passwordRegExp: new RegExp(
    /^(?=.*[a-zа-яґєіїё])(?=.*[A-ZА-ЯҐЄІЇЁ])(?=.*[0-9])[a-zA-Zа-яА-ЯҐґЄєІіЇїЁё0-9]*$/
  ),
};

export const {
  nameRegExp,
  phoneRegExp,
  phoneEditRegExp,
  emailRegExp,
  passwordRegExp,
} = REG_EXP;
