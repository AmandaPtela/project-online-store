import React from 'react';

const Checkout = () => {
  const [objeto, setObjeto] = React.useState({
    userName: '',
    userEmail: '',
    userCPF: '',
    userPhone: '',
    userCEP: '',
    userEndereco: '',
  });

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setObjeto({ ...objeto, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        value={ objeto.userName }
        name="userName"
        data-testid="checkout-fullname"
        placeholder="Nome completo"
        onChange={ onInputChange }
      />
      <input
        type="email"
        value={ objeto.userEmail }
        name="userEmail"
        data-testid="checkout-email"
        placeholder="Seu e-mail"
        onChange={ onInputChange }
      />
      <input
        type="text"
        value={ objeto.userCPF }
        name="userCPF"
        data-testid="checkout-cpf"
        placeholder="Seu cpf"
        onChange={ onInputChange }
      />
      <input
        type="email"
        value={ objeto.userPhone }
        name="userPhone"
        data-testid="checkout-phone"
        placeholder="Seu numero"
        onChange={ onInputChange }
      />
      <input
        type="email"
        value={ objeto.userCEP }
        name="userCEP"
        data-testid="checkout-cep"
        placeholder="Seu cep"
        onChange={ onInputChange }
      />
      <input
        type="email"
        value={ objeto.userEndereco }
        name="userEndereco"
        data-testid="checkout-address"
        placeholder="Seu endereço"
        onChange={ onInputChange }
      />
    </div>
  );
};

export default Checkout;
