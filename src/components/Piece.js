import React from "react";

export default function Piece(props) {
  let piece = props.content;
  let pieceType = piece.toLowerCase();
  let pieceColour = piece.toUpperCase() === piece ? "w" : "b";
  let pieceCode = `${pieceType}${pieceColour}`;

  // find right path to image
  let pieceImg;

  if (pieceCode === "pb") {
    pieceImg = props.pieceIcons.pb;
  } else if (pieceCode === "pw") {
    pieceImg = props.pieceIcons.pw;
  } else if (pieceCode === "rb") {
    pieceImg = props.pieceIcons.rb;
  } else if (pieceCode === "rw") {
    pieceImg = props.pieceIcons.rw;
  } else if (pieceCode === "nb") {
    pieceImg = props.pieceIcons.nb;
  } else if (pieceCode === "nw") {
    pieceImg = props.pieceIcons.nw;
  } else if (pieceCode === "bb") {
    pieceImg = props.pieceIcons.bb;
  } else if (pieceCode === "bw") {
    pieceImg = props.pieceIcons.bw;
  } else if (pieceCode === "qb") {
    pieceImg = props.pieceIcons.qb;
  } else if (pieceCode === "qw") {
    pieceImg = props.pieceIcons.qw;
  } else if (pieceCode === "kb") {
    pieceImg = props.pieceIcons.kb;
  } else if (pieceCode === "kw") {
    pieceImg = props.pieceIcons.kw;
  }

  return (
    <>
      <div className='piece'>
        <img src={pieceImg} alt='' />
      </div>
    </>
  );
}
