export default class Purchase {
  constructor(userId, productId, quantity, purchaseTime, id) {
      this.userId = userId;
      this.productId = productId;
      this.quantity = quantity;
      this.purchaseTime = purchaseTime;
      this.id = id;
  }
}