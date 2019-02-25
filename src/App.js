import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'Merah',
    };
  }

  clicked(menu) {

    // untuk memperbarui state sesuai dengan menu yg dipilih
    this.setState({
      active: menu,
    });
  }
  menusaya() {
    return <img src={this.state.active+".jpg"} width="200"></img>
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
                    className={style+" "+menu}

                    // bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked'
                    onClick={this.clicked.bind(this, menu)}
                    key={index}
                  >
                    {menu}
                  </a>;
          }) }
          </nav>

          <div className="info">
            ini adalah <span className={"selected "+this.state.active}>{this.state.active}</span><br/><br/>
            {this.menusaya()}
          </div>
      </div>
    );
  }
}

export default App;
