import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);


  const handleClick = (event) => {
    event.preventDefault();

    navigate(to);
  };

  return <a className="text-blue-500" href= {to} onClick={handleClick}>{children}</a>;
}

export default Link;