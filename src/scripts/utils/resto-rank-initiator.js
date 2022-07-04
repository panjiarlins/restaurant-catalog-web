class RestoRank {
  static displayRestoRank(restaurant) {
    const restoRankElement = document.querySelector('main > div#resto-rank > ul');
    restoRankElement.innerHTML = '';
    const sortedResto = restaurant.sort((a, b) => b.rating - a.rating);
    sortedResto.forEach((resto, i) => {
      const restoItem = document.createElement('li');
      restoItem.innerHTML = `<a href="#${resto.id}"><span>${i + 1}. ${resto.name} <mark>(${resto.rating})</mark></span></a>`;
      restoRankElement.appendChild(restoItem);
    });
  }
}

export default RestoRank;
