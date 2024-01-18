import cstyle from "../Styling/card.module.css";

const Cards = (objProp) => {
  return (
    <>
      <div className={cstyle.outter}>
        <div className="ms-2 mt-2">
          Name : {objProp.Name}
          <br />
          Email : {objProp.Email}
          <br />
          Contact : {objProp.Mobile}
          <br />
          Experience : {objProp.Experience}
          <br />
          Members : {objProp.Members}
          <br />
          MusicStyle : {objProp.MusicStyle}
          <br />
          City : {objProp.City}
          <br />
          Address : {objProp.address}
          <br />
        </div>
      </div>
    </>
  );
};

export default Cards;
