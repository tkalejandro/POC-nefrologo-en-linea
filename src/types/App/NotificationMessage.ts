interface NotificationMessage {
    /**
     * Notification Type
     */
    type: 'error' | 'warning' | 'info' | 'success' | undefined

    /**
     * Message of the notification
     */
    message: string
}

export default NotificationMessage