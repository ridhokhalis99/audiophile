import { useEffect } from "react";
import { capitalCase } from "change-case";
import { FieldValues } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styles from "@/styles/Textfield.module.scss";

const TextField = ({
  useFormObj,
  name,
}: {
  useFormObj: FieldValues;
  name: string;
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormObj;
  const label = capitalCase(name);

  useEffect(() => {
    register(name);
  }, [register, name]);

  const hasError = !!errors[name];

  return (
    <div className={styles.container}>
      <div className={styles.labelErrorContainer}>
        <label className={styles.label}>{label}</label>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className={styles.errorMessage}>{message}</p>
          )}
        />
      </div>
      <input
        className={`${styles.input} ${hasError ? styles.inputError : ""}`}
      />
    </div>
  );
};

export default TextField;
