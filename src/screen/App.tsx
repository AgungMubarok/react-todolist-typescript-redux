import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Title } from '../components/Title';
import { generateCode } from '../helpers/generateCode';
import { addTodoAction } from '../redux/actions/todoAction';
import { TodoList } from '../redux/reducers/todoReducer';
import { useTypedSelector } from '../redux/useTypeSelector';

function App() {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const { todoList } = useTypedSelector(state => state.addTodoReducers);
  console.log(todoList);

  const onChange = (evt: { target: { value: any } }) => {
    setTitle(evt.target.value);
  };

  const onSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    setTitle('');

    const data = {
      title: title,
      id: generateCode(13),
      status: 'active',
    };

    dispatch(addTodoAction(data));
  };

  return (
    <div className="max-w-7xl mx-auto p-5 md:px-20 md:py-16 space-y-5 md:space-y-10">
      <Title text="React Typescript add todo with redux" />
      <form
        onSubmit={onSubmit}
        className="flex items-center justify-center space-x-2"
      >
        <Input onChange={onChange} value={title} />
        <Button type="submit" title="add todo" />
      </form>
      <div className="text-lg grid space-y-5">
        {todoList?.map((item: TodoList, idx: number) => (
          <Card
            title={item.title}
            number={idx + 1}
            id={item.id}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
