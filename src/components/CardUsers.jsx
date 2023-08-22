import swal from "sweetalert";

const CardUsers = ({ user, deleteUser, handleClickUpdate }) => {
  const userAlertDelete = () => {
    swal({
      title: "ELIMINAR",
      text: "Esta Seguro Que Desea Eliminar El Usuario.....",
      icon: "warning",
      buttons: ["NO", "SI"],
    }).then((resp) => {
      if (resp) {
        deleteUser(user.id);
        swal({
          text: "El Usario A Sido Eliminado Correctamente",
          icon: "success",
        });
      } else {
        return;
      }
    });
  };

  return (
    <section className="sections-color-car border border-slate-600 w-[300px] shadow-2xl rounded-xl">
      <ul>
        <li>
          <img
            className="border-b  border-slate-600 justify-center items-center"
            src={`https://robohash.org/${user.first_name}, ${user.last_name}`}
            alt=""
          />
        </li>
        <li className=" text-center font-extrabold text-xl border-b  border-slate-600 p-2">
          {" "}
          {user.first_name} {user.last_name}
        </li>
        <li className="p-2 ">
          <span className="opacity-[0.6] text-white">Email</span> 
          <div className="font-bold text-white">
            <i className="bx bxs-envelope"></i>
            {user.email}
          </div>
        </li>
        <li className="px-2 pb-2">
          <span className="opacity-[0.6] text-white">Cumpleaños</span> 
          <div className="font-bold text-white">
            <i className="bx bxs-cake"></i>
            {user.birthday}
          </div>
        </li>
      </ul>
      <div className="flex items-center justify-center gap-6 p-2">
        <button
          onClick={() => {
            // deleteUser(user.id);
            userAlertDelete();
          }}
          className="px-5 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <i className="bx bxs-trash"></i>
        </button>

        <button
          onClick={() => handleClickUpdate(user)}
          className="px-5 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 ml-2"
        >
          <i className="bx bxs-edit-alt"></i>
        </button>
      </div>
    </section>
  );
};
export default CardUsers;
