import dayjs from 'dayjs';


function sortDay (eventA, eventB) {
  return dayjs(eventB.dateFrom) - dayjs(eventA.dateFrom);
}

function sortTime (eventA, eventB) {
  return dayjs(eventA.dateFrom).diff(dayjs(eventA.dateTo)) - dayjs(eventB.dateFrom).diff(dayjs(eventB.dateTo));
}

function sortPrice (eventA, eventB) {
  return Number(eventB.basePrice) - Number(eventA.basePrice);
}

export {sortDay, sortTime, sortPrice};
