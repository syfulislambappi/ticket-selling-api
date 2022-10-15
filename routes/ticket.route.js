const router = require("express").Router();
const {
  getAllTickets,
  buyTicket,
  buyBulkTicket,
  getTicketById,
  updateTicketById,
  deleteById,
} = require("../controllers/ticket.controller");

router.get("/", getAllTickets);
router.post("/buy", buyTicket);
router.post("/bulk", buyBulkTicket);

router
  .route("/u/:ticketId")
  .get(getTicketById)
  .patch(updateTicketById)
  .delete(deleteById);

module.exports = router;
