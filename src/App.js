import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'Home',
    };
  }

  clicked(menu) {

    // untuk memperbarui state sesuai dengan menu yg dipilih
    this.setState({
      active: menu,
    });
  }

  render() {
    return (
      <div id="app">

          {/* map akan loop sebanyak menu yg didefinisikan */}
          {/* kemudian mengembalikan elemen <a/> */}
          <nav className="nav">{ this.props.items.map((menu, index) => {
            var style = 'menu';

            if (this.state.active === menu) {
              style = `${style} is-active`;
            }

            return <a
                    className={style}

                    // bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked'
                    onClick={this.clicked.bind(this, menu)}
                    key={index}
                  >
                    {menu}
                  </a>;
          }) }
          </nav>

          <div className="info">
            ini adalah <span className="selected">{this.state.active}</span>
          </div>
      </div>
    );
  }
}

export default App;
