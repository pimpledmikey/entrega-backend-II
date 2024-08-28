
export const respTicketDto = (ticket) => {
    return {
        amount: ticket.amount,
        purchaser: ticket.purchaser,
        purchase_datatime: ticket.purchase_datatime,
        code: ticket.code
    };
};