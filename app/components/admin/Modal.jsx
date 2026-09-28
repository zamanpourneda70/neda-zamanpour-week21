import styles from "./Modal.module.css"
import dele from '../../assets/svg.png';

const Modal = ({ isOpen, title, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img src={dele} alt="LOGO" className={styles.logo} />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.actions}>
          <button onClick={onCancel} className={styles.cancelBtn}>لغو</button>
          <button onClick={onConfirm} className={styles.confirmBtn}>حذف</button>
        </div>
      </div>
    </div>
  );
};

 

export default Modal;
