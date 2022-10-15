const router = require("express").Router();
const {
  getAllTickets,
  buyTicket,
  buyBulkTicket,
  getTicketById,
  updateTicketById,
  deleteById,
  getTicketByUser,
  updateTicketByUser,
  deleteByUser,
  drawTicket,
} = require("../controllers/ticket.controller");

router.get("/", getAllTickets);
router.post("/buy", buyTicket);
router.post("/bulk", buyBulkTicket);
router.post("/draw", drawTicket);

router
  .route("/t/:ticketId")
  .get(getTicketById)
  .patch(updateTicketById)
  .delete(deleteById);

router
  .route("/u/:username")
  .get(getTicketByUser)
  .patch(updateTicketByUser)
  .delete(deleteByUser);

module.exports = router;
