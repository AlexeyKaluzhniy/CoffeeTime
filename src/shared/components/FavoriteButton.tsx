import { TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectFavorite, setFavoriteServer, unsetFavoriteServer } from '../../redux/favoriteReducer';
import { useSelector } from 'react-redux';
import { selectSessionId } from '../../redux/authSlice';

export function FavoriteButton({ productId }: { productId: string }) {
    const sessionId = useSelector(selectSessionId);
    const dispatch = useDispatch<AppDispatch>();
    const isFavorite = useSelector(selectFavorite(productId));

    const handleToggleFavorite = () => {
        if (!isFavorite) {
            dispatch(setFavoriteServer({ sessionId, productId }));
        } else {
            dispatch(unsetFavoriteServer({ sessionId, productId }));
        }
    };

    return (
        <TouchableOpacity onPress={handleToggleFavorite} style={{ marginRight: 8 }}>
            <Image source={isFavorite ? require('../../../assets/icons/icon_heart_active.png') : require('../../../assets/icons/icon_heart_gray.png')} />
        </TouchableOpacity>
    )
}