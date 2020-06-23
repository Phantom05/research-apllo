import React from 'react';
import { useImmer } from 'use-immer';

const HomeFormState = {
  input: '',
};
function HomeForm(props) {
  const { onClick = () => {} } = props;
  const [values, setValues] = useImmer(HomeFormState);
  const valuesInput = values.input;

  // NOTE: event change
  const handleChange = e => {
    const target = e.target;
    const targetValue = target.value;
    setValues(draft => {
      draft[target.name] = targetValue;
    });
  };

  // NOTE: event click
  const handleClick = e => {
    onClick({ value: valuesInput });
  };

  return (
    <div>
      <input type="text" name="input" onChange={handleChange} value={valuesInput} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default HomeForm;
