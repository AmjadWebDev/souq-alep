import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "canned foods",
          imageUrl: "../../../public/imgs/canned.jpg",
          id: 1,
          linkUrl: "shop/canned-foods",
        },
        {
          title: "rice & grain",
          imageUrl: "",
          id: 2,
          linkUrl: "shop/rice-grain",
        },
        {
          title: "dairy & cheese",
          imageUrl: "",
          id: 3,
          linkUrl: "shop/dairy-cheese",
        },
        {
          title: "oils & ghee",
          imageUrl: "",
          size: "large",
          id: 4,
          linkUrl: "shop/oil-ghee",
        },
        {
          title: "bread & pastries",
          imageUrl: "",
          size: "large",
          id: 5,
          linkUrl: "shop/bread-pastries",
        },
        {
          title: "dessert & chips",
          imageUrl: "",
          size: "large",
          id: 6,
          linkUrl: "shop/dessert-chips",
        },
        {
          title: "spices & nuts",
          imageUrl: "",
          size: "large",
          id: 7,
          linkUrl: "shop/spices-nuts",
        },
        {
          title: "beverages & liquids",
          imageUrl: "",
          size: "large",
          id: 8,
          linkUrl: "shop/beverages-liquids",
        },
        {
          title: "nonfood",
          imageUrl: "",
          size: "large",
          id: 9,
          linkUrl: "shop/nonfood",
        },
      ],
    };
  }

  render() {
    return (
      <div className="menu-directory">
        {this.state.sections.map(({ title, id, imageUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
