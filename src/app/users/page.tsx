type user ={
    id : number;
    name : string;
    username : string;
    email : string;
    phone : number
}

export default async function usersServer(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users") ;
    const users :user[] = await res.json()    
    console.log(users); 

    return(
        <div>
            <ul>
                {users.map((u)=>(
                    <li key={u.id}>
                        <div>NAME : {u.name}</div>
                        <div>USERNAME : {u.username}</div>
                        <div>EMAIL : {u.email} </div>
                        <div>PHONE : {u.phone}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}