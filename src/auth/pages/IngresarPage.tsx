import { useForm, SubmitHandler } from "react-hook-form";
import { AuthLayout } from "../layout/AuthLayout";

import imgMenu from "../../assets/images/IngresarIlustracion.svg";
import "../../assets/styles/form.css";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const IngresarPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <AuthLayout>
      <div className="container mt-1 flex-grow-1 mt-3">
        <div className="d-flex align-items-start justify-content-center ">
          <div className="row justify-content-around w-100">
            <div className="col-6 p-2" style={{ maxWidth: "380px" }}>
              <h5 className="txt-title-color">
                <b>Ingresa a tu cuenta</b>
              </h5>
              <div className="card" style={{ backgroundColor: "#eceefb" }}>
                <form className="form-login p-3">
                  <div className="card-body text-left">
                    <div className="form-group card-text mb-3">
                      <label className="font-title title-2 m-0">
                        <b>Usuario o email</b>
                      </label>
                      <input
                        className="form-control"
                        name="Usuario"
                        placeholder="Ingresá tu usuario o email"
                        type="text"
                      />
                      <span className="field-validation-valid color-txt-error"></span>
                    </div>
                    <div className="form-group card-text">
                      <label className="font-title title-2 m-0">
                        <b>Contraseña</b>
                      </label>
                      <div className="text-field text-field-with-trailing-icon">
                        <div className="d-flex align-items-center">
                          <input
                            className="form-control text-field-input  show-password valid"
                            id="password"
                            name="Password"
                            placeholder="Ingresá tu contraseña"
                            type="password"
                          />
                          {/* <i className="bi bi-eye-fill"></i> */}
                        </div>

                        <span className="color-txt-error field-validation-valid"></span>
                      </div>
                      <div className="d-flex justify-content-star">
                        <a className="link" href="/Recuperar" role="button">
                          ¿Te olvidaste tu contraseña?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-0 pt-0">
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        value="Ingresar"
                        className="btn btn-primary px-5 mt-3"
                      >
                        Ingresar
                      </button>
                    </div>
                  </div>
                </form>
                <div className="container mb-4">
                  <div className="d-flex justify-content-center">
                    <p>
                      ¿No tenés cuenta?
                      <a
                        className="color-txt-iolv7"
                        href="/registrarme?intencion=0"
                        role="button"
                      >
                        Crear Cuenta
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                src={imgMenu}
                className="w-100 p-5"
                style={{ maxHeight: "450px" }}
                alt="Menu"
              />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
