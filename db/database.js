const Ticket = require("../models/Ticket");

class MyDb {
  constructor() {
    this.tickets = [];
  }

  /**
   * Buy ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket}
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * Buy bulk tickets
   * @param {string} username
   * @param {number} price
   * @param {number} qty
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, qty) {
    const result = [];
    for (let i = 1; i <= qty; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * Get all tickets
   */
  find() {
    return this.tickets;
  }

  /**
   * Get ticket by id
   * @param {string} ticketId
   * @returns {Ticket}
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );
    return ticket;
  }

  // Update ticket by id
  updateById() {}

  // Delete ticket by id
  deleteById() {}

  // Draw ticket
  draw() {}

  //
}

const myDb = new MyDb();
