const myDb = require("../db/database");

exports.getAllTickets = async (_req, res, next) => {
  try {
    res.status(200).json(myDb.find());
  } catch (error) {
    next(error);
  }
};

exports.getTicketById = async (req, res, next) => {
  try {
    const { ticketId } = req.params;
    const ticket = myDb.findById(ticketId);
    res
      .status(200)
      .json({ message: "Ticket found successfully", ticket: ticket });
  } catch (error) {
    next(error);
  }
};

exports.getTicketByUser = async (req, res, next) => {
  try {
    const { username } = req.params;
    const tickets = myDb.findByUser(username);
    res
      .status(200)
      .json({ message: "Ticket found successfully", tickets: tickets });
  } catch (error) {
    next(error);
  }
};

exports.buyTicket = async (req, res, next) => {
  try {
    const { username, price } = req.body;
    const ticket = myDb.create(username, price);
    res
      .status(201)
      .json({ message: "Ticekt bought successfully", ticket: ticket });
  } catch (error) {
    next(error);
  }
};

exports.buyBulkTicket = async (req, res, next) => {
  try {
    const { username, price, qty } = req.body;
    const tickets = myDb.createBulk(username, price, qty);
    res
      .status(201)
      .json({ message: "Bulk ticket bought successfully", tickets: tickets });
  } catch (error) {
    next(error);
  }
};

exports.updateTicketById = async (req, res, next) => {
  try {
    const { ticketId } = req.params;
    const { username, price } = req.body;
    const ticket = myDb.updateById(ticketId, username, price);
    res
      .status(202)
      .json({ message: "Ticket updated successfully.", ticket: ticket });
  } catch (error) {
    next(error);
  }
};

exports.updateTicketByUser = async (req, res, next) => {
  try {
    const { username } = req.params;
    const { price } = req.body;
    const tickets = myDb.updateByUser(username, price);
    res
      .status(201)
      .json({ message: "Ticket updated successfully", tickets: tickets });
  } catch (error) {
    next(error);
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    const { ticketId } = req.params;
    myDb.deleteById(ticketId);
    res.status(202).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.deleteByUser = async (req, res, next) => {
  try {
    const { username } = req.params;
    myDb.deleteByUser(username);
    res.status(202).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.drawTicket = async (req, res, next) => {
  try {
    const { winnerCount } = req.body;
    const winners = myDb.draw(winnerCount);
    res.status(200).json({ message: "Lucky winners are:", Winners: winners });
  } catch (error) {
    next(error);
  }
};
