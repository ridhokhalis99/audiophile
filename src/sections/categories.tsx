import Image from "next/image";

import headphonesImage from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "@/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";
import Button from "@/components/button";

const categories = [
  {
    name: "Headphones",
    href: "/headphones",
    image: headphonesImage,
  },
  {
    name: "Speakers",
    href: "/speakers",
    image: speakersImage,
  },
  {
    name: "Earphones",
    href: "/earphones",
    image: earphonesImage,
  },
];

const Categories = () => {
  const containerStyle = {
    width: "100%",
    maxWidth: "1440px",
    margin: "168px auto 204px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  };

  const categoryItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderRadius: "8px",
    height: "204px",
    position: "relative",
  };

  const imageStyle = {
    height: "160px",
    width: "auto",
    position: "absolute",
    top: "-40px",
    zIndex: 1,
    pointerEvents: "none",
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    marginTop: "108px",
  };

  return (
    <div style={containerStyle}>
      {categories.map((category) => (
        <div style={categoryItemStyle} key={category.name}>
          <Image src={category.image} style={imageStyle} alt={category.name} />
          <div style={textContainerStyle}>
            <h6>{category.name}</h6>
            <Button type="borderless">Shop</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
