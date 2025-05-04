export const setButtonPages = (dataQuery) => {
  document.querySelector('.pages-images > p').innerText = dataQuery.page;
  if (dataQuery.page === 1) {
    document.querySelector('.left').style.display = 'none';
  }
  if (dataQuery.page >= dataQuery.totalPages) {
    document.querySelector('.right').style.display = 'none';
  }
  if (dataQuery.page > 1 && dataQuery.page < dataQuery.totalPages) {
    document.querySelector('.left').style.display = 'flex';
    document.querySelector('.right').style.display = 'flex';
  }
};