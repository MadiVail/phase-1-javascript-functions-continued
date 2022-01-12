// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(action = 'go to the office') {
    return `This Monday, I will ${action}.`
}

function wrapAdjective(outer = '*') {
   return function(theAdjective = 'special'){
        return `You are ${outer}${theAdjective}${outer}!`
   }
   
}