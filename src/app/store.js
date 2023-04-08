import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        user: userReducer
    }
});

