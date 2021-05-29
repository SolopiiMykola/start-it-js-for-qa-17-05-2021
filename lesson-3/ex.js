let post = {
    title: 'xxx',
    body: 'body',
    author: 'nana',
    views: 12,
    comment: {
        "first Name": 'first name',
        lastName: 'last name',
        body: 'body value',
    },
    isLive: true, 
    someFunction: () => {
        console.log('My function works')
    }
};

console.log(post.comment.body);
console.log(post["comment"]["first Name"])
console.log(post.someFunction())
console.log(post["someFunction"]())