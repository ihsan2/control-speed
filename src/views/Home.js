import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";

// reactstrap components
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import moment from "moment";

function HomePage() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    const query = ref(db, "realtime");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        setInfo(data);
      }
    });
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader tag={"h3"}>Dashboard</CardHeader>
              {info ?  <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <CardText>
                      Kecepatan:{" "}
                      <CardText className="mt-2" tag={"h6"}>
                        {info?.kecepatan} cm/s
                      </CardText>
                    </CardText>
                    <CardText style={{ marginLeft: 20, marginRight: 20 }}>
                      Status:{" "}
                      <CardText
                        className="mt-2"
                        tag={"h6"}
                        style={{ color: "red" }}
                      >
                        Overspeed
                      </CardText>
                    </CardText>
                    <CardText>
                      Tanggal:{" "}
                      <CardText className="mt-2" tag={"h6"}>
                        {moment(info?.created_at, "YYYY-M-D H:m:s").format(
                          "DD MMMM YYYY HH:mm:ss"
                        )}
                      </CardText>
                    </CardText>
                  </div>
                  <img
                    alt="Image"
                    src={
                      info?.photo
                        ? info?.photo
                        : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
                    }
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </CardBody> :  <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <img
                    alt="No-Data"
                    src={require('../assets/img/no-data.jpg')}
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </CardBody>}
             
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomePage;
