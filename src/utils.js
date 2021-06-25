const paginate = (followers) => {
 const itemsPerPage = 12;
 const pages = Math.ceil(followers.length/itemsPerPage);
 const newPages = Array.from({length:pages}, (_, index)=> {
  const start = index*itemsPerPage;
  return followers.slice(start, start+itemsPerPage);
 })
 return newPages
}

export default paginate
