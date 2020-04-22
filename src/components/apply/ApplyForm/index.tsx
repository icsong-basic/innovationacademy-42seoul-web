/* eslint @typescript-eslint/no-unused-vars: 0 */
import React from 'react';
import ApplyForm from './ApplyForm';
import ApplyForm191115 from './ApplyForm191115';
import ApplyForm191201 from './ApplyForm191201';
import TimeTrigger, { Trigger } from '../../TimeTrigger';
import utils from '../../../utils';

export default () => {
    return <TimeTrigger defaultComponent={ApplyForm191201} triggers={triggers} />
}

const triggers: Trigger[] = (
    utils.isProduction() ?
        [{ datetime: (new Date(2019, 11, 6, 0, 0, 0)).valueOf(), component: ApplyForm191115 }] :
        [{ datetime: (new Date(2019, 11, 5, 18, 0)).valueOf(), component: ApplyForm191115 }]
)