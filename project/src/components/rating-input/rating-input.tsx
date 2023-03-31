import { ChangeEvent } from 'react';

type RatingInputProps = {
  title: string;
  count: number;
  fieldChangeHandle: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingInput({title, count, fieldChangeHandle}: RatingInputProps): JSX.Element {
  return (
    <>
      <input
        onChange={fieldChangeHandle}
        className="form__rating-input visually-hidden"
        name="rating"
        value={count}
        id={`${count}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${count}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingInput;