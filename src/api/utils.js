
export const formatDate = (date) => {
    const unformattedDate = new Date(date);

    const dd = String(unformattedDate.getDate())    
    const mm  = String(unformattedDate.getMonth() + 1); //January is 0!
    const yyyy = unformattedDate.getFullYear();
    
    return mm + '/' + dd + '/' + yyyy;
}

