import React from 'react'
import { useAuthStore } from './store/authStore'

function protectedRouter({ children }) {
    const token = useAuthStore(state => state.token);
    if (!token) {
        return <Navigate to='/login' />
    }
    return children;
}

export default protectedRouter
