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
          imageUrl: "",
          id: 1,
          linkUrl: "shop/canned-foods",
        },
        {
          title: "rice & grain",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
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
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          linkUrl: "shop/oil-ghee",
        },
        {
          title: "bread & pastries",
          imageUrl: "",
          id: 5,
          linkUrl: "shop/bread-pastries",
        },
        {
          title: "dessert & chips",
          imageUrl: "",
          id: 6,
          linkUrl: "shop/dessert-chips",
        },
        {
          title: "spices & nuts",
          imageUrl: "",
          id: 7,
          linkUrl: "shop/spices-nuts",
        },
        {
          title: "beverages & liquids",
          imageUrl: "",
          id: 8,
          linkUrl: "shop/beverages-liquids",
        },
        {
          title: "nonfood",
          imageUrl: "",
          id: 9,
          linkUrl: "shop/nonfood",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
