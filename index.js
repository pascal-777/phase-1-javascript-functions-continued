function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bathe my dogs")
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home")
function wrapAdjective(wrapper ="*") {
    return function inner(adjective="special") {
        return `You are ${wrapper}${adjective}${wrapper}!`
    }
}