import { useState } from "react";

const CustomAlert = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      
    
      {visible && (
        <div style={styles.alert}>
          <p>Este es un mensaje de alerta personalizado.</p>
          <button onClick={() => setVisible(false)} style={styles.closeButton}>
            Cerrar
          </button>
        </div>
      )}
    </>
  );
};

const styles = {
  alert: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#ff4747",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    background: "#ff4747",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  closeButton: {
    marginTop: "10px",
    background: "white",
    color: "#ff4747",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default CustomAlert;
