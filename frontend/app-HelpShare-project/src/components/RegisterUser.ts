import { useState } from "react";
import { Register } from "../models/casa";
import { useRegisterConnection } from "../Services/registerConnection";

export const RegisterUser:any = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const { registerConnection } = useRegisterConnection();

  const handleCreate = async () => {
    console.log("Datos enviados:", email, password);
    await registerConnection({ email, password, username, description });
  };

  return (
    <Register
      email={email}
      username={username}
      password={password}
      description={description}
      setEmail={setEmail}
      setUsername={setUsername}
      setPassword={setPassword}
      setDescription={setDescription}
      onCreate={handleCreate}
    />
  );
};
