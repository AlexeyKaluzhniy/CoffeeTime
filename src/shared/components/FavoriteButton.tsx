import { TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectFavorite, setFavoriteServer, unsetFavoriteServer } from '../../redux/favorite/favoriteReducer';
import { useSelector } from 'react-redux';

export function FavoriteButton({ productId }: { productId: string }) {
    const sessionId = "645b8378-37e3-49a7-ae4d-675fda1b2986";
    const dispatch = useDispatch<AppDispatch>();
    const isFavorite = useSelector(selectFavorite(productId));

    const handleToggleFavorite = () => {
        if (!isFavorite) {     
            dispatch(setFavoriteServer({ sessionId, productId }));
        } else {
            dispatch(unsetFavoriteServer({ sessionId, productId }));
        }
    }

    return (
        <TouchableOpacity onPress={handleToggleFavorite}>
            {isFavorite ? <Image source={require('../../../assets/icons/icon_heart_active.png')} /> :
                <Image source={require('../../../assets/icons/icon_heart_gray.png')} />
            }
        </TouchableOpacity>
    )
}