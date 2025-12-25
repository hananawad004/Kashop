import React from 'react';
import axiosInstance from '../API/axiosInstance';
import { useQuery } from '@tanstack/react-query';

export default function useCategories() {
    const fetchCategories = async () => {
        const res = await axiosInstance.get('/Categories');
        return Array.isArray(res.data.response) ? res.data.response : res.data.response?.categories || [];
    };

    const query = useQuery({
        queryKey: ['categories'],
        staleTime: 5 * 30 * 1000,
        queryFn: fetchCategories,
    });

    return query;
}
