import React, { useEffect, useState, useCallback } from 'react';
import { getBands } from '../../api/api';
import BandCard from '../BandCard/BandCard';
import styles from './styles.module.scss';

const BandList = () => {
    const [bands, setBands] = useState<any[]>([]);

    const fetchBands = () => {
        getBands().then(result => setBands(result));
    };

    const ratingChangedCallback = useCallback(() => {
        fetchBands();
    }, []);

    useEffect(() => {
        fetchBands();
    }, []);

    return (
        <div className={styles.listContainer}>
            <div className={styles.bandList}>
                { bands.length ? bands?.map(band => (
                    <BandCard
                        key={band.id}
                        ratingChangedCallback={ratingChangedCallback}
                        {...band}
                    />
                )) : (
                    <p>Ingen band funnet</p>
                )}
            </div>
        </div>
    );
};

export default BandList;
