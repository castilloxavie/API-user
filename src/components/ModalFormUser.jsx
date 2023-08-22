import { useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

import { EPYTE_FORM_VALUE } from "../shared/constants";

const userAlertUpdate = () => {
  swal({
    title:"Actualizado",
    icon:"success",
    button:"OK",
  })
}

const ModalFormUser = ({
  isModal,
  createUsers,
  isUsersUpdate,
  updateUsers,
  setIsModal,
  setIsUsersUpdate,
}) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    data.image_url = null;
    if (isUsersUpdate) {
      updateUsers(data, reset);
      userAlertUpdate()
    } else {
      createUsers(data, reset);
    }
  };

  const hamdleClickModalUser = () => {
    setIsModal(false)
    reset(EPYTE_FORM_VALUE)
    setIsUsersUpdate(null)
  };

  useEffect(() => {
    if (isUsersUpdate) {
      reset(isUsersUpdate);
    }
  }, [isUsersUpdate]);

  return (
    <section
      className={`fixed  bg-black/60 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-750 ${
        isModal
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-100"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 grid gap-4 p-2 rounded-md relative text-white"
      >
        <button
          type="button"
          onClick={hamdleClickModalUser}
          className="bx bxs-x-circle bx-md font-bold absolute top-1 right-2"
        ></button>
        <h2 className="text-center text-2xl font-extrabold  ">
          {isUsersUpdate ? "Actualizar Datos " : "Ingresar Usuario"}
        </h2>

        <div>
          <label htmlFor="first_name">
            <i className="bx bxs-user"></i>
          </label>
          <div >
            <input
              className="outline-none border-[1px] border-blue-500 p-1 rounded-2xl mx-2  bg-slate-300 text-black font-bold"
              required
              name="first_name"
              id="first_name"
              type="text"
              placeholder=" Nombre"
              {...register("first_name")}
            />
            <input
              className="outline-none border-[1px] border-blue-500 p-1 rounded-2xl  bg-slate-300 text-black font-bold m-2"
              required
              name="last_name"
              id="last_name"
              type="text"
              placeholder=" Apellidos"
              {...register("last_name")}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email">
            <i className="bx bxs-envelope"></i>
          </label>
          <input
            className="outline-none border-[1px] border-blue-500 p-1 rounded-2xl mx-2 w-[98%]  bg-slate-300 text-black font-bold"
            required
            id="email"
            type="email"
            placeholder=" Email"
            {...register("email")}
          />
        </div>

        <div>
          <label htmlFor="password">
            <i className="bx bxs-lock-alt"></i>
          </label>
          <input
            className="outline-none border-[1px] border-blue-500 p-1 rounded-2xl mx-2 w-[98%]  bg-slate-300 text-black font-bold"
            required
            name="password"
            id="password"
            type="password"
            placeholder=" Contraseña"
            {...register("password")}
          />
        </div>

        <div>
          <label htmlFor="birthday">
            <i className="bx bxs-cake"></i>
          </label>
          <input
            className="outline-none border-[1px] border-blue-500 p-1 rounded-2xl mx-2 w-[98%] bg-slate-300 text-black font-bold"
            name="birthday"
            id=" birthday"
            type="date"
            placeholder="date"
            
            {...register("birthday")}
          />
        </div>

        {/* <div>
          <label htmlFor="image_url">image_url</label>
          <input
            className="outline-none border-[1px] border-blue-500 p-1 ro"
            name="image_url"
            id="image_url"
            type="text"
            placeholder=" imagen"
            {...register("image_url")}
          />
        </div> */}
        <button  className="bg-black text-white p-2 rounded-full">
          {isUsersUpdate ? "Guardar Cambios" : "Crear Usuario"}
        </button>
      </form>
    </section>
  );
};

export default ModalFormUser;
