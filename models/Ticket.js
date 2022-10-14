const shortid = require("shortid");

class Ticket {
  /**
   * Ticket constructor function
   * @param {string} username
   * @param {number} price
   */
  constructor(username, price) {
    this.username = username;
    this.price = price;
    this.id = shortid.generate();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
