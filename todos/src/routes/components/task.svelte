<script lang='ts'>
    // export let handleSubmit: any
    export let handleEdit: Function
    export let handleDelete: Function
    export let handleCompleted: Function

    // export let token: string
    export let text: string
    export let updated: boolean
    export let id: number   

    const check_cross = (updated: boolean) =>{
        if (updated){
            return 'line-through'
        }
    }
</script>

<div class='task-wrapper flex {check_cross(updated)}'>
    <div on:click={handleCompleted(id, text, updated)} on:keypress={() => {}} class='flex-[7_7_0%] cursor-pointer'>
        <p>{text}</p>
    </div>

    <div class='flex-1 text-teal-400'>
        <button on:click={handleEdit(id, text)} class=' rounded-md p-1 border-opacity-30 border border-teal-400 hover:bg-teal-400 hover:text-white hover:transition duration-75'>Edit</button>
    </div>

    <div class='flex-1 text-red-400'>
        <button on:click={handleDelete(id)} class='rounded-md p-1 border-opacity-30 border border-red-400 hover:bg-red-400 hover:text-white hover:transition duration-75'>Delete</button>
    </div>
</div>