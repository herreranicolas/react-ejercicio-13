import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const CardClima = ({
  ciudad,
  descripcion,
  humedad,
  icono,
  temperatura,
  viento,
}) => {
  return (
    <section className="vh-100">
      <MDBContainer className="mt-4">
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex">
                  <MDBTypography tag="h6" className="flex-grow-1">
                    {ciudad}
                  </MDBTypography>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <MDBTypography
                    tag="h6"
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#1C2331" }}
                  >
                    {parseInt(temperatura)}°C
                  </MDBTypography>
                  <span className="small" style={{ color: "#868B94" }}>
                    {descripcion}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                    <div>
                      <MDBIcon
                        fas
                        icon="wind fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {viento} km/h</span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="tint fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {humedad}% </span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="sun fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {icono}h </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                      width="100px"
                    />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default CardClima;
