  import React, { useEffect, useState } from 'react';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import { Link, NavLink } from 'react-router-dom';
  import useFetch from '../Hooks/useFetch';
  import { IconShoppingBagSearch } from '@tabler/icons-react';


  function CollapsibleExample() {
    const [categories, setCategories] = useState([]);
    const [categorias] = useFetch('https://fakestoreapi.com/products/categories');

    useEffect(() => {
      if (categorias) {
        setCategories(categorias);
      }
    }, [categorias]);

    return (
      <Navbar collapseOnSelect expand="lg" className="navBarStyle">
        <Container>
          <Navbar.Brand href="/">
            <img width="100" height="100" src="../src/assets/logos/system-outline-6-shopping.gif" alt="" /> QINQELA <span className='shop'>| SHOP</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className={({ isActive }) => isActive ? "activo" : ""} to="/">INICIO</NavLink>
              <NavLink className={({ isActive }) => isActive ? "activo" : ""} to="/nosotros">SOBRE NOSOTROS</NavLink>
              <NavDropdown title="CATEGORIAS" id="collapsible-nav-dropdown">
              {categories.map((categoria, index) => (
                <NavDropdown.Item key={index} href={`/category/${categoria}`}>
                  <span className='categoria'>{categoria}</span>
                </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default CollapsibleExample;