import React from "react";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import BreadCrumbItem from "./components/BreadCrumb/BreadCrumbItem";
import Link from "./components/BreadCrumb/Link";
import Button from "./components/Card/Button";
import Card from "./components/Card/Card";
import CardBody from "./components/Card/CardBody";
import CardImg from "./components/Card/CardImg";
import CardText from "./components/Card/CardText";
import CardTitle from "./components/Card/CardTitle";

const KeysToComponentMap: any = {
  breadcrumb: BreadCrumb,
  breadcrumbItem: BreadCrumbItem,
  link: Link,
  card: Card,
  img: CardImg,
  body: CardBody,
  title: CardTitle,
  text: CardText,
  button: Button,
};

const stylesMap = (styles: any) => {
  let mappedStyles: any = {};
  styles.forEach((style: any) => {
    mappedStyles[style.name] = style.value;
  });
  return mappedStyles;
};

function Render(config: any) {
  if (typeof KeysToComponentMap[config.component] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[config.component],
      {
        src: config.src ? config.src : null,
        href: config.href ? config.href : null,
        "aria-label": config.ariaLabel ? config.ariaLabel : null,
        "aria-current": config.ariaCurrent ? config.ariaCurrent : null,
        key: config.id ? config.id : null,
        alt: config.alt ? config.alt : null,
        tag: config.tag ? config.tag : null,
        className: config.className ? config.className : null,
        style: config.styles ? stylesMap(config.styles) : null,
      },
      typeof config.children === "string"
        ? config.children
        : Array.isArray(config.children) &&
            config.children.map((c: any) => Render(c))
    );
  }
}

export default Render;
