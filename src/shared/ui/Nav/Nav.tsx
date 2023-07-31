import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'
import UserStore from '../../../store/UserStore'
import { BiSolidUser } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'

export function MainNavbar() {
  const { user } = UserStore

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <NavLink to={'/'} className={styles.logo}>
          ETVShoP
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>

          <div className={styles.btnGroup}>
            <Button variant="outline-light">
              <BiSolidUser />
            </Button>

            <Button variant="outline-light">
              <AiFillHeart />
            </Button>

            <Button variant="outline-light">
              <BsFillCartCheckFill />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
