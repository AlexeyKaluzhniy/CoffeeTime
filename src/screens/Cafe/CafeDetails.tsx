import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { CafeStackProps } from '../../../navigationTypes';
import { CafeDrinkList } from './CafeDrinkList';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { fetchCafeDetails, selectCafeDetails } from '../../redux/cafeReducer';
import { globalStyles } from '../../shared/styles/globalStyles';

export function CafeDetails({ navigation, route }: CafeStackProps) {
    const dispatch = useDispatch<AppDispatch>();
    const details = useSelector(selectCafeDetails);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchCafeDetails({ sessionId: route.params.sessionId, cafeId: route.params.cafeId }))
            .then(() => setIsLoading(false));
    }, [dispatch]);

    return (
        <View style={globalStyles.container}>
            {!isLoading && details ?
                (<View style={globalStyles.container}>
                    <CafeDrinkList sessionId={route.params.sessionId} cafe={details} navigation={navigation} />
                </View>) : null}
        </View>
    )
}