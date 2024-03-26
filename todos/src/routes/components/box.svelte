<script lang='ts'>
	import {addTodo, editTodo, updateTodo} from '../../crud.js'
    import {delete_item} from '../../crud.js'
    import Task from './task.svelte'
    export let todos: any

    let input: string
    let edit:boolean = false
    let todo_id: number
    const handleSubmit = async (text: string, id:number) => {
        if(edit){
            const data = await editTodo(id, text)
            console.log(data.id)
            todos = todos.map((todo:any)=>{
                if(todo.id == data.id){
                    todo.text = data.text
                } return todo
            })
            edit=false
            input=''
        }else{
            const data = await addTodo(text)
            console.log(data)
            input=''
            todos = [...todos, data]
    }}

    const handleDelete = (id: number) =>{
        todos = todos.filter((todos: any)=> todos.id != id)
        delete_item(id)
    }

    const handleEdit = async (id: number, text: string) => {
        edit = true
        input = text
        todo_id = id
        console.log(id)
    }

    const handleCompleted = (id: number, text: string, value: boolean) => {
        todos = todos.map((todo: any)=>{
            if(todo.id == id){
                todo.updated = !todo.updated
            } return todo}
        )
        console.log(id)
        updateTodo(id, text, value)
    }
</script>

<div class="container">  
    <div class='task-container'>
        <div class='form-wrapper'>
            <form on:submit|preventDefault={handleSubmit(input, todo_id)}>
                <div class='flex'>
                    <div class='flex-1'>
                        <input class='form-control' type='text' bind:value={input} placeholder="enter text">
                    </div>

                    <div class='flex-[6]'>
                        <input type='submit' class='btn'>
                    </div>
                </div>
            </form>
        </div>
        <div id='list-wrapper'>
            {#each todos as info (info.id)}
                <Task {todos} {...info} {handleDelete} {handleEdit} {handleCompleted} />
            {/each}
        </div>
    </div>
</div>
