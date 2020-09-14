
export const formatDate = (date) => {
    const unformattedDate = new Date(date);

    const dd = String(unformattedDate.getDate()).padStart(2, '0')
    const mm  = String(unformattedDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = unformattedDate.getFullYear();
    
    return mm + '/' + dd + '/' + yyyy;
}

