async function getPosts() {

  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let responseTodo = await fetch('https://jsonplaceholder.typicode.com/todos');

    let loopedResponse = () => {
      let arrr = []
      for (let i = 0; i < 10; i++) {
        arrr.push(i)
      }
      return arrr;
    }

    let todos = await responseTodo.json();
    let posts = await response.json();
    let looped = await loopedResponse();
    let arr = [];

    console.log(looped);

    // don't have to await here
    for (let i = 0; i < 150; i++) {
      arr.push({
        "id": i,
        "album": posts[i].albumId,
        "todo": todos[i].userId
      })
    }
    console.log(arr);
  } catch (error) {
    console.log(error.message);
  }

}

getPosts()
