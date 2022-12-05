import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Modal, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../Store";

function Product(props) {
  const { product } = props;
  const [modalShow, setModalShow] = useState(false);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  //Modal
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body closeButton>
          <Row>
            <Col md={4}>
              <Link to={`/product/${product.slug}`}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
              </Link>
            </Col>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Link to={`/product/${product.slug}`}>
                    <Card.Title className="modal-title">{product.name}</Card.Title>
                  </Link>
                  <div className="authorRating">
                    <p>nguyen duc nham</p>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    />
                  </div>
                  <h4>
                    <Badge bg="warning">
                      History
                    </Badge>
                  </h4>
                  <Card.Text className="card-descs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit iure dolorem porro laboriosam exercitationem
                    molestias cupiditate labore provident accusantium iusto,
                    assumenda minus ducimus rem, adipisci voluptas reprehenderit
                    culpa dolor architecto. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Et incidunt nisi odio
                    voluptatibus porro molestiae enim rerum consequatur,
                    explicabo consequuntur? Velit qui temporibus culpa quae
                    nihil iste vitae doloribus consectetur.lorem Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Asperiores
                    dolore iure vel, assumenda, distinctio possimus
                    necessitatibus corrupti animi at neque explicabo labore
                    vitae facere sed quaerat quis quas voluptatibus. Harum?
                  </Card.Text>
                  <Card.Text className="modal-price">${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <div className="authorRating">
          <p>{product.brand}</p>
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </div>
        <Card.Text className="card-desc">
          {product.description}
        </Card.Text>
        <Card.Text className="card-price">${product.price}</Card.Text>
        <Row>
          <Col className="p-0">
            {product.countInStock === 0 ? (
              <Button variant="light" disabled>
                Out of stock
              </Button>
            ) : (
              <Button
                className="card-btnAddToCard"
                onClick={() => addToCartHandler(product)}
              >
                Add to cart
              </Button>
            )}
          </Col>
          <Col>
            <Button
              className="card-btnView"
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              View
            </Button>
          </Col>
        </Row>

      </Card.Body>
      {/* //active modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />{" "}
    </Card>
  );
}
export default Product;
