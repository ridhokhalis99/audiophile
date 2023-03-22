import styles from "@/styles/Button.module.scss";
import Image from "next/image";
import arrowIcon from "@/assets/icons/arrow.svg";

const Button = ({
  children,
  type = "filled",
}: {
  children: string;
  type?: "filled" | "outline" | "borderless";
}) => {
  const isBorderless = type === "borderless";
  const typeClassNameDecider = () => {
    switch (type) {
      case "filled":
        return styles.filled;
      case "outline":
        return styles.outline;
      case "borderless":
        return styles.borderless;
    }
  };

  const typeClassName = typeClassNameDecider();

  return (
    <button className={`${styles.button} ${typeClassName}`}>
      {children}
      {isBorderless && (
        <Image
          src={arrowIcon.src}
          width={arrowIcon.width}
          height={arrowIcon.height}
          alt="arrow"
        />
      )}
    </button>
  );
};

export default Button;
