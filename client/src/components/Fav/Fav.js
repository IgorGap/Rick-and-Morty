import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Hero from '../Hero/Hero';

function Fav() {
  const dispatch = useDispatch();
  const { heroes, favor } = useSelector((state) => state);
  return (
    <div>
      <Col>
        {favor.map((fav, i) => (
          <Hero fav={fav.hero} key={i + 1} id={fav.id} />
        ))}
      </Col>
    </div>
  );
}

export default Fav;
