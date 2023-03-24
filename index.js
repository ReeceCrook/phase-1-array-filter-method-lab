// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function findMatching(drivers, name){
    return (drivers.filter(element => element.toLowerCase().includes(name.toLowerCase())))

}

function fuzzyMatch(drivers, str){
    console.log(drivers.filter(element => element.startsWith(str)))
    return (drivers.filter(element => element.startsWith(str)))
}


function matchName(drivers, str){
    return (drivers.filter(element => element.name.includes(str)))
    
}

