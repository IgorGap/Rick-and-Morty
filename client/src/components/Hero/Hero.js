import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Button, Card, CardBody, CardTitle, Row,
} from 'reactstrap';

function Hero({
  fav, id, hero, cbFav, flag1, flag2,
}) {
  const dispatch = useDispatch();
  const { hereos, favor } = useSelector((state) => state);
  console.log('hereos', hereos);
  const isFav = favor?.filter((item) => item.id === id);
  const [bool, setBool] = useState(false);
  useEffect(() => {
    isFav.length ? setBool(true) : setBool(false);
  }, [hereos.length]);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      {location.pathname.includes('fav') ? (
        <Card body color="info" inverse>
          <CardTitle tag="h5" onClick={() => navigate(`/${fav.id}`)}>
            {fav.name}
          </CardTitle>
          <CardBody>
            <img src={fav.image} />
          </CardBody>
        </Card>
      ) : (
        <Row sm="3">
          <Card body color="info" inverse>
            <CardTitle tag="h5" onClick={() => navigate(`/${hero.id}`)}>
              {hero.name}
            </CardTitle>
            <img src={hero.image} className={flag1 && hero.status === 'Alive' ? 'Alive' : flag2 && hero.status === 'Dead' ? 'Dead' : 'Nevazhno'} />
            <CardBody>
              <div className={!bool && 'hidden'}> В избранном </div>
              <Button
                type="button"
                onClick={() => {
                  cbFav(id, hero);
                  setBool(true);
                }}
                className={bool && 'hidden'}
              >
                Добавить в избранное
              </Button>
            </CardBody>
          </Card>
        </Row>
      )}
    </div>
  );
}

export default Hero;
