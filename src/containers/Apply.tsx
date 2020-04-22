import React from 'react'
import { withRouter } from 'react-router-dom';
import ApplyForm from '../components/apply/ApplyForm';

export default withRouter(function Apply() {
    return (
        <div className="apply-page">
            <ApplyForm />
        </div>
    )
})