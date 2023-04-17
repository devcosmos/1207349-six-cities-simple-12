import { Review } from '../../types/review';
import { format } from 'date-fns';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  const {user, rating, date, comment} = review;
  const {avatarUrl, name} = user;
  const dateObj = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt={name} />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={format(dateObj, 'yyyy-MM-dd')}>
          {format(dateObj, 'MMMM yyyy')}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
