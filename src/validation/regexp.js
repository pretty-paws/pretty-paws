const REG_EXP = {
  nameRegExp: new RegExp(/^[A-Za-zА-Яа-яІіЇїЄє' -]+$/),
  phoneRegExp: new RegExp(/^[0-9]{10}$/),
  emailRegExp: new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
  passwordRegExp: new RegExp(
    /^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9])[a-zA-Zа-яА-Я0-9]+$/
  ),
};

export const { nameRegExp, phoneRegExp, emailRegExp, passwordRegExp } = REG_EXP;
