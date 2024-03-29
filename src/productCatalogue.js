class Catalogue {
  constructor(title) {
    this.title = title;
    this.products = [];
  }

  findProductById(id) {
    const match = this.products.find(
      function (product) {
        return id === product.id;
      })
    return match;
  }

  addProduct(product) {
    if (!this.findProductById(product.id)) {
      this.products.push(product);
      return true;
    }
    return false;
  }

  findProductsByNameLike(subString) {
    const matches = this.products.filter(function(product) {
      const position = product.name.search(subString)
      return position !== -1
    } )
    return matches;
  }

  removeProductById(id){
    const removedItem = this.products.findIndex((obj) => obj.id === id);

    if(removedItem > -1){
      this.products.splice(removedItem,1);

      return true;
    }

      return false;
    }


    
    checkReorder() {
      const productsReorder = this.products.filter((product)=> {
        return product.quantityInStock <= product.reorderLevel;
      });
      

      const productIds = productsReorder.map((product)=> product.id);

      return {
        type:"Reorder",
        productIds:productIds
      }

    }
  }




module.exports = Catalogue;
