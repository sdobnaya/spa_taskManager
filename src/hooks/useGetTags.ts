// @ts-nocheck
/* Core */
import { useDispatch } from 'react-redux';
import { setTags } from '../lib/redux/init/actions';
import { api } from '../api';

export const useGetTags = async () => {
    const dispatch = useDispatch();

    const tags = await api.getTags();
    console.log('usetags', tags);
    dispatch(setTags(tags));
};
