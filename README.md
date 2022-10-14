<div align="right">
  <img src="https://img.shields.io/badge/Completion-100%25-blue.svg" />
  <a href="https://github.com/Hsins/udemy_MERN-Todo-List/blob/master/LICENSE" alt="License">
    <img src="https://img.shields.io/github/license/Hsins/udemy_MERN-Todo-List.svg" />
  </a>
</div>

# Ticket Selling API With NodeJS

# Features

- Buy lottery tickets
- Update lottery ticket
- Delete lottery ticket
- Get all tickets
- Get ticket by id
- Bulk buy (One user can buy multiple tickets)
- Raffle draw

# Model for ticket:

```
Number (unique)
Username
Price
Timestamp
```

# Routes

```
[METHOD]    [ROUTE]                 [DESCRIPTION]
GET         /tickets                Get all tickets
POST        /tickets/draw           Get winners of ticket
POST        /tickets/buy            Buy ticket
POST        /tickets/bulk           Buy bulk tickets
GET         /tickets/t/:ticketId    Get ticket by id
PATCH       /tickets/t/:ticketId    Update ticket by id
DELETE      /tickets/t/:ticketId    Delete ticket by id
GET         /tickets/u/:username    Get tickets by username
PATCH       /tickets/u/:username    Update tickets by username
DELETE      /tickets/u/:username    Delete tickets by username
```
