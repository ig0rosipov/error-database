function Error({ error }) {
  return (
    <details className="error">
      <summary className="error__label">{error.name}</summary>
      <h2 className="error__field">{error.name}</h2>
      <p className="error__field">{error.description}</p>
      <p className="error__field">{error.solve}</p>
      <img
        src={error.photo}
        style={{
          maxWidth: "150px",
        }}
        alt="#"
      />
    </details>
  );
}

export default Error;
