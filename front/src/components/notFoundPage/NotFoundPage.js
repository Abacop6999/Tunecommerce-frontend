import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Error 404: Página no encontrada</h1>
      <p>Lo siento, la página que estás buscando no existe.</p>
      <button variant="contained" color="primary" component={Link} to="/">
        Volver a la página principal
      </button>
    </div>
  );
};

export default NotFoundPage;
