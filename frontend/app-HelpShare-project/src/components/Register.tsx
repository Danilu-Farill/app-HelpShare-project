export const Register = () => {
  return (
    <>
      <section className="formRegister">
        <form>
          <label htmlFor="username">Nombre</label>
          <input
            id="username"
            name="username"
            type="username"
            // value={values.email}
            // onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            // value={values.email}
            // onChange={handleChange}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            // value={values.email}
            // onChange={handleChange}
          />
          <label htmlFor="description">Descripción</label>
          <input
            id="description"
            name="description"
            type="description"
            // value={values.email}
            // onChange={handleChange}
          />
        </form>
        <button className="buttonRegister" type="submit" /*onClick={}*/>
          Registrar
        </button>
      </section>
    </>
  );
};
