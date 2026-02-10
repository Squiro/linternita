import { ReactNode } from "react";
import { useColorMode } from "@docusaurus/theme-common";

interface Props {
  noteIndex: string;
  children: ReactNode;
}

export const Note = ({ noteIndex, children }) => {
  const { isDarkTheme } = useColorMode();
  return (
    <div
      id={`note-${noteIndex}`}
      style={{
        backgroundColor: isDarkTheme ? "darkgreen" : "lightgreen",
        position: "relative",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: "0.5em 1em",
        marginBottom: "1em",
      }}
    >
      <span>
        <b>
          <i>Linter-nota {noteIndex}:</i>
        </b>
      </span>
      {children}
    </div>
  );
};
