import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext';
const About = () => {
  const {counter }=useCounterContext()
  const {color} = useTitleColorContext()
  return (
    <div>
      <h1 style={{color: color}}>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;
