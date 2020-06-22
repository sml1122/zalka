import React from 'react'
import {
  CCard,
  CCardBody
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'

import DataTable from '../../containers/DataTable';

const Dashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <DataTable style={{height: '300px', marginTop: '40px'}}/>

        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
