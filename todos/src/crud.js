export const delete_item = (id) => {
    fetch(
        'http://127.0.0.1:8000/api/delete/'+id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

export const addTodo = async (text) =>{
        const res = fetch(
            'http://127.0.0.1:8000/api/create', {
                method: 'POST',
                headers: {
                    
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: text})
            }
        )
        const data = (await res).json()
        console.log(data)
        return data
}

export const editTodo = async (id, text) => {
    const res = fetch(
        'http://127.0.0.1:8000/api/update/'+id,{
            method: 'POST',
                headers: {  
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: text})
            }
    )
    const data = (await res).json()
    console.log(data)
    return data
}

export const updateTodo = async (id, text, value) => {
    value = !value
    const res = fetch(
        'http://127.0.0.1:8000/api/update/'+id,{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({text: text, updated: value})
        }
    )
}