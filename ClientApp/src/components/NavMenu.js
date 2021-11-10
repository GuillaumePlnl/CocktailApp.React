import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { ThemeContext } from '../ThemeContext/ThemeContext';

import {ThemeContext, themes} from '../ThemeContext/theme-context';
import ThemedButton from '../ThemeContext/themed-button';

import i18n from "i18next";

// // An intermediate component that uses the ThemedButton
// function Toolbar(props) {
//     return (
//       <ThemedButton onClick={props.changeTheme}>
//         Change Theme
//       </ThemedButton>
//     );
//   }

export class NavMenu extends Component {
    static displayName = NavMenu.name;
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            collapsed: true,
            theme: themes.light,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className={this.context.themeName === 'light' ? "navbar navbar-expand-sm navbar-light bg-dark" : "navbar navbar-expand-sm navbar-dark bg-light"} light>
                    <Container style={{height:"3em"}}>
                        <NavbarBrand className="text-light" tag={Link} to="/"><h1 className="beauty">Cocktails </h1></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem id="bonus" style={{color: "yellow"}}>
                                    <NavLink tag={Link} to="/every-cocktail">Every f**** cocktail</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/select-ingredients">Start</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                            <div onClick = {this.props.changeTheme}>
                            <ThemedButton /> 
                            </div>
                        <button type="button" class="btn btn-dark" onClick={() => i18n.changeLanguage('fr')}><img className="ico1" src={require("../images/frFlag.png")} alt="" />fr</button>
                        <button type="button" class="btn btn-dark" onClick={() => i18n.changeLanguage('en')}><img className="ico1" src={require("../images/gbFlag.ico")} alt="" />en</button>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
NavMenu.contextType = ThemeContext;