import React from 'react';
import { StarBorderOutlined, Star } from '@material-ui/icons';
import styles from './styles.module.scss';
import { setRating } from '../../api/api';

const MAX_RATING = 5;

interface Props {
    currentRating: number,
    bandId: number,
    ratingChangedCallback: () => void,
}

const Rating = ({
    currentRating,
    bandId,
    ratingChangedCallback,
}: Props) => {
    const stars = new Array(MAX_RATING).fill(0).map((value, index) => index);

    const clickHandler = (rating: number) => {
        setRating(bandId, rating + 1);
        ratingChangedCallback();
    };

    return (
        <div className={styles.ratingContainer}>
            <span className={styles.ratingText}>Rating:</span>
            { stars.map(starValue => (
                <span key={starValue} className={styles.star} onClick={() => clickHandler(starValue)}>
                    { currentRating > starValue ? (<Star />) : <StarBorderOutlined /> }
                </span>
            ))}
        </div>
    );
};

export default Rating;
