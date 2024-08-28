import ticketRepository from "../persistence/mongoDB/ticket.repository.js";
import { respTicketDto } from "../dto/ticket.dto.js";
import {respProductDto} from "../dto/product.dto.js";


const createTicket = async (userEmail, totalCart) => {
    const newTicket = {
        amount: totalCart,
        purchaser: userEmail,
        code: Math.random().toString(36).substr(2, 9),
    };
    
    const ticket = await ticketRepository.create(newTicket);
   // return respTicketDto(ticket);

    const tciketResponse = respTicketDto(ticket);
    return tciketResponse;
};

export default { createTicket };
