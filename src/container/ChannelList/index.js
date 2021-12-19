import React, { Component } from "react";
import Channel from "../../components/Channel";
class ChannelList extends Component {
  state = {
    tvChannelList: [
      { name: "Star Sports", info: "#1 Sports Channel", logo: "star.png" },
      { name: "HBO", info: "Entertainment Channel", logo: "hbo.png" },
      { name: "NatGeo", info: "Infotainment Channel", logo: "natgeo.png" },
    ],
    number: 10,
  };

  increaseCount = () => {
    // alert("test");
    this.setState(
      (prev) => {
        return {
          number: prev.number + 10,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    console.log(this.state);

    return (
      <div className="container text-left">
        <div className="row">
          <Channel
            name={this.state.tvChannelList[0].name}
            info={this.state.tvChannelList[0].info}
            logo={this.state.tvChannelList[0].logo}
          ></Channel>

          <Channel
            name={this.state.tvChannelList[1].name}
            info={this.state.tvChannelList[1].info}
            logo={this.state.tvChannelList[1].logo}
          ></Channel>
        </div>
        <p>{this.state.number}</p>
        <button className="btn btn-danger" onClick={this.increaseCount}>
          Increase Count
        </button>
      </div>
    );
  }
}

export default ChannelList;
