import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Button, Card, CardBody, CardText, CardTitle,
} from 'reactstrap';
import { favorHereos } from '../../redux/actions/hero';

function BigCard() {
  const id = useParams();
  const dispatch = useDispatch();
  const { hereos, favor } = useSelector((state) => state);
  const hero = hereos.length ? hereos.filter((item) => item.id === Number(id.id))[0] : hereos;
  const isFav = favor?.filter((item) => item.id === Number(id.id));
  const [bool, setBool] = useState(false);
  useEffect(() => {
    isFav.length ? setBool(true) : setBool(false);
  }, []);

  function makeFavor(id, hero) {
    dispatch(favorHereos({ id, hero }));
    setBool(true);
  }
  return (
    <Card body color="info" inverse>
      <CardTitle tag="h5">{hero.name || hereos.name}</CardTitle>
      <CardBody>
        <CardText>
          species:
          {' '}
          {hero.species}
        </CardText>
        <CardText>
          gender:
          {' '}
          {hero.gender}
        </CardText>
        <CardText>
          episode:
          {' '}
          {hero.episode.length}
        </CardText>
        <img src={hero.image} alt={hero.name || hereos.name} />
      </CardBody>
      <div className={!bool && 'hidden'}> В избранном </div>
      <Button
        type="button"
        onClick={() => makeFavor(Number(id.id), hero)}
        className={bool && 'hidden'}
      >
        Добавить в избранное
      </Button>
    </Card>
  );
}

export default BigCard;
