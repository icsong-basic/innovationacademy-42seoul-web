import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react';
import apis from '../apis';

export interface Trigger {
    datetime: number,
    component?: any,
    props?: any
}

interface Props {
    defaultComponent?: React.ReactType,
    defaultProps?: any,
    triggers?: Trigger[]
}

export default observer(function TimeTrigger({ defaultComponent: Defaultcomponent, defaultProps, triggers }: Props) {
    const [sortedTriggers, setSortedTriggers] = useState<Trigger[] | null>(sortTriggers(triggers));
    const [serverTimeDifference, setServerTimeDifference] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState(Date.now());

    useEffect(() => {
        const intervalObj = (window as Window).setInterval(() => {
            setCurrentTime(Date.now() - serverTimeDifference)
        }, 300)
        syncServerTime();
        return () => {
            if (intervalObj) {
                (window as Window).clearInterval(intervalObj)
            }
        };
    }, [serverTimeDifference])

    useEffect(() => {
        setSortedTriggers(sortTriggers(triggers));
        return () => { };
    }, [triggers])

    const syncServerTime = async () => {
        try {
            const time = await apis.getTime();
            setServerTimeDifference(Date.now() - time.data.time)
        } catch (error) {
            console.error(error)
        }
    }

    if (sortedTriggers) {
        for (let trigger of sortedTriggers) {
            if (currentTime > trigger.datetime) {
                if (!trigger.component) {
                    return null;
                } else {
                    return <trigger.component {...trigger.props} />
                }
            }
        }
    }
    if (!Defaultcomponent) {
        return null;
    }
    return <Defaultcomponent {...defaultProps} />
})

const sortTriggers = (triggers?: Trigger[]) => {
    if (!triggers) {
        return null;
    }

    return triggers.sort((a, b) => (b.datetime - a.datetime));
}