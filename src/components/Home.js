import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-5 ">
            <ul className="list-group list-group-horizontal-sm">
              <li className="list-group-item list-group-item-action">Cras justo odio</li>
              <li className="list-group-item list-group-item-action">Dapibus ac facilisis in</li>
              <li className="list-group-item list-group-item-action">Morbi leo risus</li>
              <li className="list-group-item list-group-item-action">Cras justo odio</li>
              <li className="list-group-item list-group-item-action">Dapibus ac facilisis in</li>
              <li className="list-group-item list-group-item-action">Morbi leo risus</li>
            </ul>
          </div>

          {/* ornek kismi sorular icin bir kutu olacak daha sonra duzenlenecek ve ortaya alinacak */}
          <div className="col-lg-10 p-5 w-100 d-flex  justify-content-center bg-danger">
            <span className="">ornek</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
