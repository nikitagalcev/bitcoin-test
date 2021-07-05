import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { userGetError } from '../../reducers/user/user.actions';
import './styles.css';

export const ErrorMsg: React.FC = () => {
  const [isShown, setIsShown] = useState(false);
  const errorMessage = useSelector((state: RootState) => state.user.error);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (errorMessage !== '') {
      setIsShown(true);
      setTimeout(() => {
        setIsShown(false);
        dispatch(userGetError(''));
      }, 4000);
    }
  }, [dispatch, errorMessage])

 
  return (
    isShown ? 
      <div className='error-wrapper'>
        <h3 className='error-title'>Oooops! You got some error!</h3>
        <p className='error-message'>{errorMessage}</p>
      </div>
    : null
  );
};
