import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';
import { favorHereos, getHereosThunk } from '../../redux/actions/hero';
import Hero from '../Hero/Hero';

function PostList({ hereos }) {
  const dispatch = useDispatch();
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);

  function makeFavor(id, hero) {
    dispatch(favorHereos({ id, hero }));
    dispatch(getHereosThunk());
  }

  return (
    <div>
      <Button onClick={() => setFlag1((prev) => !prev)}>Alive</Button>
      <Button onClick={() => setFlag2((prev) => !prev)}>Dead</Button>
      {hereos.length ? (
        hereos.map((post, index) => (
          <Hero
            flag1={flag1}
            flag2={flag2}
            key={index + 1}
            id={post.id}
            hero={post}
            cbFav={makeFavor}
            cbNext={() => dispatch(getHereosThunk())}
          />
        ))
      ) : (
        <Hero
          flag1={flag1}
          flag2={flag2}
          key={hereos.id + 1}
          id={hereos.id}
          hero={hereos}
          cbFav={makeFavor}
          cbNext={() => dispatch(getHereosThunk())}
        />
      )}
    </div>
  );
}

export default PostList;

