import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ThoughtBubble = ({ children }: Props) => {
  return (
    <div
      style={{
        border: "solid cadetblue",
        padding: "2em 2em 0em 2em",
        marginBottom: "1em",
      }}
    >
      <p
        // Si estás leyendo este código y te estás preguntando por qué no estoy aplicando los estilos CSS
        // de alguna forma más elegante u ordenada...
        // en casa de herrero...
        style={{
          fontStyle: "italic",
          position: "absolute",
          marginBottom: 0,
          marginTop: "-50px",
          marginLeft: "10px",
          color: "white",
          background: "cadetblue",
          borderRadius: "10px",
          padding: "2px 10px",
        }}
      >
        Pensamientos del Lector
      </p>
      {children}
      <p
        style={{
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: 0,
          margin: "0 auto",
          color: "white",
          background: "cadetblue",
          borderRadius: "10px",
          padding: "2px 10px",
        }}
      >
        SI UD. NO PENSÓ ESTO COMUNÍQUESE DE INMEDIATO AL 0800-555-LINT.
      </p>
    </div>
  );
};
