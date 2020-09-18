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
          imageUrl: "imgs/canned.jpg",
          id: 1,
          linkUrl: "canned",
        },
        {
          title: "rice & grain",
          imageUrl: "imgs/rice.jpg",
          id: 2,
          linkUrl: "shop/rice-grain",
        },
        {
          title: "dairy & cheese",
          imageUrl: "imgs/cheese.jpg",
          id: 3,
          linkUrl: "shop/dairy-cheese",
        },
        {
          title: "oils & ghee",
          imageUrl: "imgs/oil.jpg",
          id: 4,
          linkUrl: "shop/oil-ghee",
        },
        {
          title: "bread & pastries",
          imageUrl: "imgs/bread.jpg",
          id: 5,
          linkUrl: "shop/bread-pastries",
        },
        {
          title: "dessert & chips",
          imageUrl: "imgs/dessert.jpg",
          id: 6,
          linkUrl: "shop/dessert-chips",
        },
        {
          title: "spices & nuts",
          imageUrl: "imgs/spices.jpg",
          id: 7,
          linkUrl: "shop/spices-nuts",
        },
        {
          title: "beverages & liquids",
          imageUrl: "imgs/liquids.jpeg",
          id: 8,
          linkUrl: "shop/beverages-liquids",
        },
        {
          title: "nonfood",
          imageUrl: "imgs/nonfood.jpg",
          id: 9,
          linkUrl: "shop/nonfood",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
