loadPostAndComments();
async function getPosts(){
    var res = []
    var posts = await fetch("https://utn2019-avanzada2-tp6.herokuapp.com/api/posts")
    .then((response)=>{
        return response.json();
    })
    .catch(err => console.log(err))

    posts.forEach(item => {

        var post = {id : item.id,
                    title : item.title,
                    body : item.body,
                    date : item.date,
                    comments : []}
        res.push(post);
    });
    return res;
}

function getComments(posts){
    posts.forEach(async post => {
        var comments = await fetch("https://utn2019-avanzada2-tp6.herokuapp.com/api/comments?post_id="+post.id)
                                  .then(response => {return response.json()})
                                  .catch(err => console.log(err));
        post.comments = comments;
    })
    return posts;
}

async function loadPostAndComments(){
    var posts = await getPosts();
    posts = getComments(posts);
    var feed = document.getElementById("feed");
    feed.innerHTML = ""
    console.log(posts)
    posts.forEach((item) => {
        console.log("soy el post: ", posts[0]);
        console.log("soy post.comments: ",item.comments)
        feed.innerHTML = feed.innerHTML + '<div class="ui card centered card"><div class="content"><div class="header">'+item.title+'</div><div class="meta"><a>'+item.date+'</a></div><div class="description">'+item.body+'</div></div><div class="extra content"><div class="ui comments"><h3 class="ui header">Comments</h3>';
        console.log(Array.from(item))
        item.comments.forEach((comment) => {
            console.log(comment)
            feed.innerHTML = feed.innerHTML + '<div class="comment"><div class="content"><a class="author">'+comment.author+'</a><div class="metadata"><span class="date">'+comment.date+'</span></div><div class="text">'+comment.text+'</div></div></div><form onSubmit ="comment('+comment.post_id+')" class="ui reply form"><div class="ui fluid icon input"><input type="text" placeholder="Comentar"><i class="paper plane outline link icon"></i></div></form>'
        })
        feed.innerHTML = feed.innerHTML + '</div></div></div>'
    })

}
function addPost(){
    var title = document.getElementById("post-title").value;
    var body = document.getElementById("post-body").value;

    var request = new XMLHttpRequest();
    var url = "https://utn2019-avanzada2-tp6.herokuapp.com/api/posts?title="+title+"&body="+body;
    request.open("POST",url)
    request.send(null);
    loadPostAndComments();
}

function addComment(id){
    //var text = document.getElementById().value
    var text = "soy un comentario"
    var request = new XMLHttpRequest();
    var url = "https://utn2019-avanzada2-tp6.herokuapp.com/api/comments?post_id="+id+"&author=anonimo&text="+text;
    request.open("POST",url)
    request.send(null);
    loadPostAndComments();
}
