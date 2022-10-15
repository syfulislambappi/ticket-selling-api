const Ticket = require("../models/Ticket");

class MyDb {
  constructor() {
    this.tickets = [];
  }

  /**
   * Get all tickets
   * @returns {Array<Tickets>}
   */
  find() {
    return this.tickets;
  }

  /**
   * Get ticket by id
   * @param {string} userId
   * @returns {Ticket}
   */
  findById(userId) {
    const ticket = this.tickets.find(
      /**
       * @param {object} ticket
       * @returns {Ticket}
       */
      (ticket) => ticket.id === userId
    );
    return ticket;
  }

  /**
   * Get ticket by username
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUser(username) {
    const tickets = this.tickets.filter(
      /**
       * @param {object} ticket
       * @returns {Array<Ticket>}
       */
      (ticket) => ticket.username === username
    );
    return tickets;
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
   * Buy multiple tickets at a time
   * @param {string} username
   * @param {number} price
   * @param {number} qty
   * @returns {Array<Ticket>}
   */
  createBulk(username, price, qty) {
    const result = [];
    for (let i = 1; i <= qty; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * Update ticket by user id
   * @param {string} userId
   * @param {string} username
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
   * Update by username
   * @param {string} username
   * @param {number} price
   * @returns {Array<Ticket>}
   */
  updateByUser(username, price) {
    const tickets = this.findByUser(username);
    tickets.map(
      /**
       * @param {object} ticket
       */
      (ticket) => {
        ticket.username = username || ticket.username;
        ticket.price = price || ticket.price;
        ticket.updatedAt = new Date();
      }
    );
    return tickets;
  }

  /**
   * Delete ticket by user id
   * @param {string} userId
   * @returns {boolean}
   */
  deleteById(userId) {
    const deleteIndex = this.tickets.findIndex(
      /**
       * @param {object} ticket
       */
      (ticket) => ticket.id === userId
    );
    if (deleteIndex === -1) {
      return false;
    } else {
      this.tickets.splice(deleteIndex, 1);
      return true;
    }
  }
  /**
   * Delete ticket by username
   * @param {string} username
   * @returns {boolean}
   */
  deleteByUser(username) {
    const deleteTickets = this.findByUser(username);
    for (let i = 1; i <= deleteTickets.length; i++) {}
    deleteTickets.map((ticket) => {
      this.deleteById(ticket.id);
    });
  }
  /**
   *
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    const winnerIndexes = [];
    for (let i = 1; i <= winnerCount; i++) {
      let randomIndex = Math.floor(Math.random() * this.tickets.length);
      while (winnerIndexes.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * this.tickets.length);
      }
      winnerIndexes.push(randomIndex);
    }
    const winners = winnerIndexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDb = new MyDb();

module.exports = myDb;
