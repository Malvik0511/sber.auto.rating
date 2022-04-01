import React from 'react'
import { Button } from '@sberdevices/plasma-ui'

export const FormControls= ({ controls, loading = false }) => {
    const { submitTitle } = controls

    return (
        <section>
            <Button
                type="submit"
                loading={loading}
                text={submitTitle}
                size="s"
                view="primary"
                stretch
                fullWidth
            />
        </section>
    )
}

FormControls.defaultProps = {
    loading: false
}

