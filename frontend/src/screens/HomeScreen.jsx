import { useEffect, useReducer } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

// import data from "../data.js";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        console.log(result);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <div className="brand-book">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://plus.unsplash.com/premium_photo-1661284853300-cecb2f4c73d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://plus.unsplash.com/premium_photo-1661284853300-cecb2f4c73d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://plus.unsplash.com/premium_photo-1661284853300-cecb2f4c73d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container>
        <div className="products">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          )}
        </div>
        <div className="newletter">
          <Row>
            <Col md={8}>
              <h4 className="display-4">NewsLetter</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit ipsa fugiat expedita eligendi ratione architecto
                sed rerum voluptatibus molestias temporibus, quas veniam
                praesentium minus ut accusamus. Nulla laborum sunt obcaecati.
                Alias incidunt ullam amet recusandae nam veniam laborum corrupti
                dolorum autem porro. Tempore, vero deleniti nulla nihil ab harum
                repudiandae labore nobis itaque quas numquam magnam atque,
                consequuntur cupiditate fuga! Aperiam, nihil ipsa nisi qui iure
                accusamus doloribus, ratione sit dolores illum fugit error
                laudantium voluptatem, ex rerum totam accusantium incidunt est
                explicabo officia in! Assumenda perferendis fuga officia
                cupiditate. At, quod expedita quasi excepturi eum voluptates
                nobis enim doloribus, cupiditate earum quisquam hic ducimus
                saepe necessitatibus provident maiores esse commodi obcaecati
                repudiandae porro? Similique recusandae itaque quibusdam odit
                dicta? Autem, velit optio doloribus sunt odio quibusdam ea atque
                deleniti tempora praesentium cupiditate non! Facilis ad
                deleniti, placeat odio architecto sed. Eos dolores minima iure
                sit. Reiciendis sed necessitatibus temporibus.
              </p>
            </Col>
            <Col md={4}>
              {" "}
              <img
                className="d-block w-100"
                src="https://plus.unsplash.com/premium_photo-1661284853300-cecb2f4c73d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Second slide"
              />
            </Col>
          </Row>
        </div>
        <div className="aboutMyShop">
          <h3 className="text-center display-6 text-uppercase font-weight-bold">
            About My Shop
          </h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dolorem consectetur fugit quo minima est quidem veritatis voluptas,
            ad vero, odit, excepturi aspernatur enim nisi necessitatibus
            aliquid. Soluta, saepe veniam. Ex sunt temporibus fugiat accusantium
            nam ad odit non veritatis, totam perferendis consequatur corrupti
            consequuntur ipsa maxime maiores, omnis nemo reiciendis quae in.
            Deserunt rerum quasi expedita eveniet, sit ducimus! Autem magni
            nesciunt laudantium illum optio cumque neque saepe adipisci quas
            vitae ullam, sequi maxime, et temporibus! Voluptas dicta expedita
            quas ut quia neque culpa adipisci minus velit ratione? Dolores.
            Quia, adipisci. Asperiores sequi deleniti tenetur earum quos, cumque
            nisi magni, rem, saepe quasi vel. Tempora dolorum maiores, porro
            quis dolorem explicabo incidunt! Ab doloremque inventore delectus
            rem. Similique, illum? Illo recusandae labore eius doloremque
            excepturi exercitationem, fugit cumque et mollitia voluptatem
            voluptatibus beatae. Cumque rem explicabo aut earum autem unde totam
            velit iusto provident corporis! Doloribus ad qui obcaecati.
          </p>
        </div>
      </Container>
    </div>
  );
}
export default HomeScreen;
