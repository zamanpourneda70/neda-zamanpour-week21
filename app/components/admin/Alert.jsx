import "./Alert.css";

const Alert = ({ message }) => {
  if (!message) return null;

  return <div className="alert-message">{message}</div>;
};

export default Alert;
