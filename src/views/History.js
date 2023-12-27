import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import moment from "moment";

function HistoryPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    const query = ref(db, "history");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const values = Object.values(data);
        setList(values);
      } else {
        setList([])
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
              <CardHeader>
                <CardTitle tag="h4">History</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((prop, key) => {
                      return (
                        <tr key={key}>
                          <td>
                            {moment(prop?.created_at, "YYYY-M-D H:m:s").format(
                              "DD MMMM YYYY HH:mm:ss"
                            )}
                          </td>
                          <td>{prop?.kecepatan} cm/s</td>
                          <td>
                            <div
                              style={{
                                display: "inline-block",
                                backgroundColor:
                                  prop?.status === "Normal" ? "#08A405" : "red",
                                borderRadius: "100px",
                                alignItems: "center",
                                width: "auto",
                                justifyContent: "center",
                                paddingTop: 6,
                                paddingBottom: 6,
                                paddingLeft: 15,
                                paddingRight: 15,
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              {prop?.status}
                            </div>
                          </td>
                          <td>
                            <img
                              alt="Image"
                              src={
                                prop?.photo
                                  ? prop?.photo
                                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
                              }
                              width="100px"
                              height="100px"
                              style={{ objectFit: "contain" }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HistoryPage;
