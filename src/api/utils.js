
export const formatDate = (date) => {
    const unformattedDate = new Date(date);

    const dd = String(unformattedDate.getDate())    
    const mm  = String(unformattedDate.getMonth() + 1); //January is 0!
    const yyyy = unformattedDate.getFullYear();
    
    return mm + '/' + dd + '/' + yyyy;
}


export const formatStatisticsWeek = (statistics, today) => {

    const todayFormat = today.getFullYear() + "-" + ('0' + (today.getMonth()+1)).slice(-2) + "-" + ('0' + (today.getDate())).slice(-2)
    var todayStats
    var weekStats = {
        pnl : 0,
        num_transactions : 0,
        volume : 0
    }

    const weekLabels = []
    const weekData = []
    for (const stat of statistics) {
        console.log("today", todayFormat, stat.date)
        if (todayFormat == stat.date) {
            todayStats = stat
        }
        weekStats.pnl += stat.pnl
        weekStats.volume += stat.volume
        weekStats.num_transactions += stat.num_transactions
        weekLabels.push(stat.date)
        weekData.push(parseInt(stat.pnl))
    }
    console.log("weekdata", weekData)
    return {todayStats : todayStats, weekStats : weekStats, weekLabels : weekLabels, weekData, weekData}
}


export const formatStatisticsMonth = (statistics) => {
    const monthLabels = []
    const monthData = []
    for (const stat of statistics) {
        monthLabels.push(stat.date)
        monthData.push(parseInt(stat.pnl))
    }
    return { monthLabels : monthLabels, monthData : monthData }
}