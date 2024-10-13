import { Link } from "react-router-dom";

interface FormOffer {
  title: string;
  description: string;
  category: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  setCategory: (value: string) => void;
  onSubmitOffer: () => void;
}

export const FormView = ({
  title,
  description,
  category,
  setTitle,
  setDescription,
  setCategory,
  onSubmitOffer,
}: FormOffer) => {
  return (
    <>
      <section className="form-container">
        <section className="offerForm">
          <input
            className="title"
            type="text"
            placeholder="Título de la oferta"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="description"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Categoría</label>
          <div className="category-options">
            <label>
              <input
                type="radio"
                value="Producto"
                checked={category === "Producto"}
                onChange={(e) => setCategory(e.target.value)}
              />
              Producto
            </label>
            <label>
              <input
                type="radio"
                value="Servicio"
                checked={category === "Servicio"}
                onChange={(e) => setCategory(e.target.value)}
              />
              Servicio
            </label>
          </div>

          <button
            className="buttonSubmit"
            type="submit"
            onClick={onSubmitOffer}
          >
            Crear Oferta
          </button>
        </section>
        <section className="optionsForm">
          <p>
            ¿Volver al inicio?
            <Link to="/" className="linkStyle">
              {" "}
              Inicio
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};
