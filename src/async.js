const posts=[
    {title:'Post1',body:"Post1 body"},
    {title:'Post2',body:"Post2 body"},
];

let getPost=()=>{
    let output='';
    setTimeout(()=>{
        posts.forEach(post=>{output+=`<li>${post.title}</li>`});
        document.body.innerHTML= output; 
    },1000)
}

let createPost=(post)=>{
        setTimeout(()=>{
            posts.push(post);
        },1000)
}

let main=async ()=>{
    await createPost({title:'Post3',body:"Anything"});
    getPost(); 
}
main();