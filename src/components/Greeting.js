import { useSelector } from 'react-redux';

const ShowGreeting = () => {
  const isLoading = useSelector((state) => state.greetings.isLoading);
  const error = useSelector((state) => state.greetings.error);
  const greeting = useSelector((state) => state.greetings.greeting);

  if (isLoading) {
    return <span>Loading....</span>;
  }

  if (error) {
    return <span>Something went wrong!</span>;
  }

  return (
    <div>
      <h1> Random Greeting! </h1>
      <h3>
        You can see the
        <i> Hello User! How are you?</i>
        {' '}
        in 10 different languages!
      </h3>
      <p>
        Greeting:
        {greeting}
      </p>
    </div>
  );
};

export default ShowGreeting;
