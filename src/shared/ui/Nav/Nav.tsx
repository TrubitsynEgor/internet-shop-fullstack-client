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
import { ImExit } from 'react-icons/im'
import { observer } from 'mobx-react-lite'

export const MainNavbar = observer(() => {
  const { isAuth, user } = UserStore

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid className={styles.container}>
        <NavLink to={'/'} className={styles.logo}>
          ETVShoP
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className={styles.collapse}>
          <Nav
            className="me-auto my-2 my-lg-0 gap-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to={'/'} className={styles.link}>
              Home
            </NavLink>
            <NavDropdown
              title="Catalog"
              id="navbarScrollingDropdown"
              className={styles.dropdown}
            >
              <NavLink to={'/'} className={styles.link}>
                Home
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to={'/'} className={styles.link}>
                Home
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to={'/'} className={styles.link}>
                Home
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to={'/'} className={styles.link}>
                Home
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to={'/'} className={styles.link}>
                Home
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to={'/'} className={styles.link}>
                Home
              </NavLink>
            </NavDropdown>
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
            {isAuth && (
              <>
                <NavLink to={'/favorite'}>
                  <Button variant="outline-light">
                    <AiFillHeart />
                  </Button>
                </NavLink>

                <NavLink to={'/cart'}>
                  <Button variant="outline-light">
                    <BsFillCartCheckFill />
                  </Button>
                </NavLink>
              </>
            )}

            <NavLink to={user ? '/profile' : '/login'}>
              <Button
                // onClick={() => UserStore.setIsAuth(true)}
                variant="outline-light"
              >
                {user && <span className={styles.username}>{user.name}</span>}
                <BiSolidUser />
              </Button>
            </NavLink>
            {isAuth && (
              <Button
                onClick={() => UserStore.setIsAuth(false)}
                variant="outline-light"
              >
                <ImExit />
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
})
