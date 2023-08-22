import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

import ModalFormUser from "./components/ModalFormUser";
import UserList from "./components/UserList";
import { EPYTE_FORM_VALUE } from "./shared/constants";

import "./App.css";

const BASE_URL = "https://users-crud.academlo.tech/";
function App() {
  const [isModal, setIsModal] = useState(false);
  const [isUsersUpdate, setIsUsersUpdate] = useState(null);
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createUsers = (newUser, reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(({ data }) => {
        getAllUsers();
        setIsModal(false);
        reset(EPYTE_FORM_VALUE);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (idUsers) => {
    axios
      .delete(BASE_URL + `users/ ${idUsers}`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUsers = (userUpdate, reset) => {
    axios
      .patch(BASE_URL + `users/ ${isUsersUpdate.id}/`, userUpdate)
      .then(() => {
        getAllUsers();
        setIsModal(false);
        reset(EPYTE_FORM_VALUE);
        setIsUsersUpdate(null);
      })
      .catch((err) => console.log(err));
  };

  const handleClickUpdate = (user) => {
    setIsModal(true);
    setIsUsersUpdate(user);
  };

  const handleClickOpenModalUser = () => {
    setIsModal(true);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="font-Open_Sans ">
      <header className="flex flex-wrap  items-center justify-center bg-[#003f8f] bg-gradient-to-l from-indigo-300 md:from-indigo-300] h-32 mb-6 flex-col sm:flex-row sm:justify-between sm:px-10">
        <h1 className="text-5xl text-[#dedeff] max-sm:text-2xl   max-sm:text-center max-sm:relative  max-lg:space-x-96">
          lista de Usuarios
        </h1>
        <div>
          <button
            onClick={handleClickOpenModalUser}
            className=" p-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 "
          >
            <i className="bx bx-user-plus"></i>Crea Usuario
          </button>
        </div>
      </header>

      <ModalFormUser
        isModal={isModal}
        createUsers={createUsers}
        isUsersUpdate={isUsersUpdate}
        updateUsers={updateUsers}
        setIsModal={setIsModal}
        setIsUsersUpdate={setIsUsersUpdate}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        handleClickUpdate={handleClickUpdate}
      />
      <footer className="flex flex-wrap space-x-96 items-center justify-center bg-[#003f8f] bg-gradient-to-l from-indigo-300 h-40 mt-6">
        <p className="text-xl text-center">
          by{" "}
          <span className="font-bold text-xl">
            Xavier Alberto Castillo Varon
          </span>{" "}
          | G-28 Academlo
        </p>
      </footer>
    </div>
  );
}

export default App;
