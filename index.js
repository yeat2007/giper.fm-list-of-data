let currentPage = 1;
const postsPerPage = 10;

const postList = document.getElementById("post-list")
const loadMore = document.getElementById("load-more")

const loadPosts = (page) => {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`
    fetch(url).then(response => response.json()).then(posts => {
        posts.forEach(post => {
            const li = document.createElement("li");
            li.innerHTML = `${post.title}<p>${post.body}</p>`
            postList.appendChild(li);
        });
    })
    .catch(error => {
      console.error("Ошибка загрузки данных", error);
    });
}
loadPosts(currentPage);
loadMore.addEventListener("click", () =>{
    currentPage++;
    loadPosts(currentPage);
})
