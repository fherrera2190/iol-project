import logoRenaper from "../../assets/images/Renaper-SID.svg";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#06083F" }}>
      <div className="container my-2 d-md-flex align-items-center justify-content-between ">
        <p className="text-white fs-6">
          © Copyright 2024 | 0810-1222-IOL(465) | Humboldt 1550, Piso 2, UF 201,
          CABA (C1414CTN) - Argentina
        </p>
        <div className="d-flex flex-column flex-xl-row justify-content-center">
          <img
            src={logoRenaper}
            style={{ height: "30px", borderRadius: "5px" }}
            alt="renaper"
          />
        </div>
      </div>
    </footer>
  );
};
