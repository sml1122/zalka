// import React, { Component } from 'react';
// import DataTable from './components/DataTable';
// import TheFooter from './components/TheFooter';
// import TheHeader from './components/TheHeader';
// import TheSidebar from './components/TheSidebar';

// import {
//   CRow,
//   CCol,
//   CImg
// } from '@coreui/react';
// import './App.css';
// import '@coreui/coreui/scss/coreui.scss';


// // class App extends Component {
// //   render() {
// //     return (
// //       <div className="c-wrapper">

// //         <CRow>
// //           <CCol lg="2" className="bg-success py-3 text-center">
// //             <CImg
// //               src="https://picsum.photos/192/192/?image=54"
// //               fluid
// //               className="mb-2"
// //             />
// //           </CCol>
// //           <CCol lg="10" className="py-3">
// //             <DataTable>

// //             </DataTable>
// //           </CCol>
// //         </CRow>
// //       </div>
// //     );
// //   }
// // }

// class App extends Component {
//   render() {
//     return (
//       <div className="c-app c-default-layout">
//         <TheSidebar/>
//         <div className="c-wrapper">
//           <TheHeader/>
//           <div className="c-body">
//             <DataTable/>
//             {/* <TheContent/> */}
//           </div>
//           <TheFooter/>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;


import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
