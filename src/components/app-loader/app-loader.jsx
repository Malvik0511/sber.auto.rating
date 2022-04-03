import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from '@sberdevices/plasma-ui'

const defaultError = () => <div>Ошибка</div>

const defaultProps = {
    error: false,
    loaded: false,
    ErrorComponent: defaultError,
    LoaderComponent: Spinner
}

export const AppLoader = ({
    fetchFn,
    children,
    error = defaultProps.error,
    ErrorComponent = defaultProps.ErrorComponent,
    LoaderComponent = defaultProps.LoaderComponent,
    loaded = defaultProps.loaded
}) => {
    const [loading, setLoader] = useState(true)

    const fetch = useCallback(async () => {
        try {
            await fetchFn()
        } catch (e) {
            /* eslint no-console: 0 */
            console.log('[Apploader request exception]')
        } finally {
            setLoader(false)
        }
    }, [fetchFn])

    const reFetch = useCallback(() => {
        setLoader(true)
        fetch()
    }, [fetch])

    useEffect(() => {
        if (!loaded) {
            reFetch()
        }
    }, [reFetch, loaded])

    if (!loaded && loading) {
        return <LoaderComponent />
    }

    if (error) {
        return <ErrorComponent reFetch={reFetch} />
    }

    return <React.Fragment>{children}</React.Fragment>
}

AppLoader.propTypes = {
    children: PropTypes.node.isRequired,
    fetchFn: PropTypes.func.isRequired,
    error: PropTypes.bool,
    loaded: PropTypes.bool,
    ErrorComponent: PropTypes.func,
    LoaderComponent: PropTypes.func,
}

