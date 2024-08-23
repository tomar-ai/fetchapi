import axios from "axios";  

interface Todo {
    id: number;
    title : string;
    completed : boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/2";

axios.get(url).then(response =>{
    // console.log(response.data)
    const toDo = response.data as Todo;
    const ID = toDo.id;
    const title = toDo.title;
    const completed = toDo.completed;

    logToDo(ID, title, completed);

})

const logToDo = (ID: number, title: string, completed: boolean)=>{
    console.log(`the toDo with ID : ${ID}, 
        has a title of: ${title}
        is it finished? ${completed}`)
}

// JS does not allow to catch error during development 
// TS allows to catch earlier so we shall we use 