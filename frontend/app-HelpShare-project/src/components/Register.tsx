interface RegisterFormProps {
    email: string;
    password: string;
    username: string;
    description: string;
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
    setUsername: (value: string) => void;
    setDescription: (value: string) => void;
    onCreate: () => void;
  }
  
  export const Register = ({
    email,
    password,
    username,
    description,
    setEmail,
    setPassword,
    setUsername,
    setDescription,
    onCreate,
  }: RegisterFormProps) => {
  return (
    <>
      <section className="formRegister">
        <form>
          <label htmlFor="username">Nombre</label>
          <input
            id="username"
            name="username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            // onChange={handleChange}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            // onChange={handleChange}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="description">Descripción</label>
          <input
            id="description"
            name="description"
            type="description"
            value={description}
            // onChange={handleChange}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <button className="buttonRegister" type="submit" onClick={onCreate}>
          Registrar
        </button>
      </section>
    </>
  );
};
