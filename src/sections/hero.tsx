import heroImage from "@/assets/home/desktop/image-hero.jpg";
import Image from "next/image";
import Button from "@/components/button";

const Hero = () => {
  const heroStyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: "#191919",
    position: "relative",
  };

  const containerStyle = {
    height: "100%",
    maxWidth: "1440px",
    width: "100%",
    margin: "0 auto",
    position: "relative",
    display: "flex",
    alignItems: "center",
  };

  const leftInnerContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    position: "relative",
    zIndex: 1,
  };

  const overlineStyle = {
    color: "#fff",
    opacity: "0.5",
  };

  const headerStyle = {
    color: "#fff",
    width: "400px",
  };

  const descriptionStyle = {
    color: "#fff",
    width: "400px",
    opacity: "0.75",
  };

  const buttonStyle = {
    marginTop: "16px",
  };

  const imageStyle = {
    position: "absolute",
    height: "100%",
    maxWidth: "100%",
    objectFit: "scale-down",
    width: "auto",
  };

  return (
    <section style={heroStyle}>
      <Image src={heroImage} style={imageStyle} alt="hero" />
      <div style={containerStyle}>
        <div style={leftInnerContainerStyle}>
          <h2 className="overline" style={overlineStyle}>
            New Product
          </h2>
          <h1 style={headerStyle}>XX99 Mark II Headphones</h1>
          <p style={descriptionStyle}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button style={buttonStyle}>See Product</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
