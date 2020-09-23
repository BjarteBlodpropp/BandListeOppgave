import React from 'react';
import { BandMember, MostPlayedSong } from '../types';
import styles from './styles.module.scss';
import Rating from '../Rating/Rating';

interface Props {
    id: number,
    navn: string;
    bandMedlemmer: BandMember[];
    mestSpiltSang: MostPlayedSong,
    rating: number;
    bildeUrl: string;
    ratingChangedCallback: () => void;
}

const BandCard = ({
    id,
    navn,
    bandMedlemmer,
    mestSpiltSang,
    rating,
    bildeUrl,
    ratingChangedCallback,
}: Props) => (
    <div className={styles.listElementContainer}>
        <div className={styles.image}>
            <img src={bildeUrl} alt={`${navn} cover bilde`} />
        </div>
        <div>
            <h1 className={styles.title}>{ navn }</h1>
            <Rating
                currentRating={rating}
                bandId={id}
                ratingChangedCallback={ratingChangedCallback}
            />
            <div className={styles.content}>
                <div>
                    { bandMedlemmer?.map((bandMember, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={index}>{ bandMember.navn }</div>
                    ))}
                </div>
                <div>
                    <div>
                        Mest Populære Låt
                        <br />
                        { mestSpiltSang?.navn }
                    </div>
                    <div className={styles.playCount}>
                        { mestSpiltSang?.avspillingerSpotify } Avspillinger
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default BandCard;
