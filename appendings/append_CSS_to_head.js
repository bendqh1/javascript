newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
  #example {
      /**/
  }
  @media screen and (min-width: 992px) {
    #example {
      /**/
    }
  }
`;
document.head.appendChild(newStyle);
