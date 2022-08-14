import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'reactstrap';
import PostList from '../PostList/PostList';
import { getHereosThunk } from '../../redux/actions/hero';

function Main() {
  const dispatch = useDispatch();
  const { hereos } = useSelector((state) => state);

  const [form, setForm] = useState({});

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getHereosThunk(form));
    setForm({});
    e.target.reset();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={form.nums || ''}
          name="nums"
          onChange={handleChange}
          placeholder="Введите информацию"
        />
        <Button type="submit">Показать Героев</Button>
      </Form>
      <PostList hereos={hereos} />
    </div>
  );
}

export default Main;
