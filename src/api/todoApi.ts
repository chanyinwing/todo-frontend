import axios from "axios";

import { TodoType } from "../types/todo.types";

const TODO_API_URL = `${import.meta.env.VITE_BASE_URL}/api/todo`
const ADD_TODO_ENDPOINT = `${TODO_API_URL}`
const GET_TODO_ENDPOINT = `${TODO_API_URL}`

export const addTodo = async (todoData: TodoType)=>{
    try{
        console.log(todoData)
        const response = await axios.post(ADD_TODO_ENDPOINT, todoData)
        return response.data
    }catch(err){
        console.log(err)
    }
}

export const getTodo = async () => {
    try{
        const response = await axios.get(GET_TODO_ENDPOINT)
        console.log('todoApi response.data: ' + response.data)
        return response.data
    }catch(err){
        console.log(err)
    }
}
