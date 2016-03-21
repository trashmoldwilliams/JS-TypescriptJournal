/// <reference path="journal.ts" />


module Journal {
  export var findById = function(id: number, posts: []): IEntry {
    for(var i = 0; i < posts.length; i++){
      console.log(posts[i].id);
      console.log(id);
      if(parseInt(posts[i].id) === parseInt(id)) {
        return posts[i];
      } else {
        console.log("error");
      }
    }
  }
}
