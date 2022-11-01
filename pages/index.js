import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Banner from "../public/imgs/cara3.png";
import HomeStoreList from "../components/HomeStoreList";

export default function Home() {
  return (
    <>
      <Row className="justify-content-center pt-5">
        <Col
        md={7}
        style={{ borderRadius: "24px", backgroundColor: "#f2f5a1" }}>
          <Row className="text-black align-items-center mt-3">
            <Col>
              <Image src={Banner} />
            </Col>
            <Col>
              <h2> The MarketPlace </h2>
              <h3> Come sell with us! </h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="text-center p-5">
        <h1> About our customers:</h1>
      </div>
      <HomeStoreList/>
    </>
  );
}
