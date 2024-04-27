class ProductsService {
  constructor({ Product, User }) {
    this.Product = Product;
    this.User = User;
  }

  async createProduct(productData) {
    const { userId } = productData;
    const _user = await this.User.findById(userId);

    if (!_user) {
      return {
        error: "User not found",
      };
    }

    const _product = await this.Product.create(productData);

    _user.products.push(_product);
    await _user.save();
    // autre facond de faire les deux lignes précedente
    //await this.user.updateOne({_id: user.Id}, {push: {_task._id}} );

    return {
      message: "Product created",
      product: _product,
    };
  }

  async updateProduct(productId, productData) {
    const { userId } = productData;
    const _user = await this.User.findById(userId);

    if (!_user) {
      return {
        error: "user not found",
      };
    }

    const _product = await this.Product.findByIdAndUpdate(
      productId,
      productData,
      { new: true }
    );

    if (_product) {
      return {
        message: "product updated successfully",
        product: _product,
      };
    }
    return {
      error: "Product not found",
    };
  }

  async deleteProduct(productId) {
    const _product = await this.Product.findByIdAndDelete(productId);

    if (_product) {
      //Find the user who owns taks
      const _user = await this.User.findOne({ products: productId });

      if (_user) {
        // Remove the task reference from the user's tasks array
        _user.products.pull(productId);
        //aait this.User.updateOne({_id: _user}, {$pull: {tasks: taskId} });
      }

      return {
        message: "Product deleted successfully !",
      };
    }

    return {
      message: "Product not found !",
    };
  }
}

module.exports = ProductsService;
