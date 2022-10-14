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

  /**
   * Get ticket by user
   * @param {string} user
   * @returns {Array<Ticket>}
   */
  findByUser(user) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === user
    );
    return tickets;
  }

  /**
   * Update ticket by id
   * @param {string} userId
   * @param {string} usernam
   * @param {number} price
   * @returns {Ticket}
   */
  updateById(userId, username, price) {
    const ticket = this.findById(userId);

    ticket.username = username || ticket.username;
    ticket.price = price || ticket.price;
    ticket.updatedAt = new Date();

    return ticket;
  }

  /**
   * Delete ticket by id
   * @param {string} ticketId
   * @returns {bolean}
   */
  deleteById(ticketId) {
    const ticket = this.tickets.findIndex(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );

    if (ticket !== -1) {
      this.tickets.splice(ticket, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Get winner of the ticket
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    let indexes = [];
    for (let i = 1; i <= winnerCount; i++) {
      let randomIndex = Math.floor(Math.random() * this.tickets.length);

      while (indexes.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * this.tickets.length);
      }
      indexes.push(randomIndex);
    }
    const winners = indexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDb = new MyDb();

module.exports = myDb;
