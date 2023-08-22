import CardUsers from "./CardUsers";

const UserList = ({users, deleteUser, handleClickUpdate}) => {
   
  return (
    <section className="flex flex-wrap     gap-8 place-content-center">
        {
            users.map((user) => 
            <CardUsers key={user.id} user={user} deleteUser={deleteUser} handleClickUpdate={handleClickUpdate}/>)
        }
    </section>
  )
}

export default UserList