(function() {
  "use strict";

  // Start here
  
  function ProductImage(props){
    
    return React.createElement("img",{
      src:"../../../assets/red.jpg",
      alt: "Product image"
    });
    }
  
  
  function ProductCustomizer(props){
    return React.createElement
    ("div",
    { className: "customizer"}, 
    React.createElement("div",{className:"product-image"},React.createElement(ProductImage))
    );
    
  }
  ReactDOM.render(React.createElement(ProductCustomizer), document.getElementById('react-root'));
  

})();
