import { useLocation } from 'react-router-dom';

function ServerError() {
  const { state } = useLocation();
  return (
    <div className="max-w-screen-lg mx-auto">
      {state?.error ? (
        <div className="flex flex-col gap-4 my-4">
          <h3 className="text-2xl font-bold">{state.error.title}</h3>
          <p className="leading-7">
            {state.error.detail || 'internal Server Error'}
          </p>
        </div>
      ) : (
        'Server Error'
      )}
    </div>
  );
}

export default ServerError;
