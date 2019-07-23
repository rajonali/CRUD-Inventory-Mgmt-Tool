import React from 'react'


class ReportPage extends React.Component {
  render() {
    return(
      <div>
       <header
                    className="App-header"
                    style={{
                    height: '50px'
                }}>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"/>

                    <strong>
                        Reports
                    </strong>
                </header>
<body style={{marginTop:'50px'}}>
<center>
<button
                                style={{
                                height: '100px',
                                width: '500px',
                                marginTop: '25px',

                            }}>
                                <h3>
                                <a href="/shopping" style={{color:'black'}}>SHOPPING LIST</a>
                                          </h3>
                            </button>
                            <br />
                            <button
                                style={{
                                height: '100px',
                                width: '500px',
                                marginTop: '25px',

                            }}>
                                <h3>
                                    <strong>SALES</strong>
                                </h3>
                            </button>
                            <br />
                            <button
                                style={{
                                height: '100px',
                                width: '500px',
                                marginTop: '25px',

                            }}>
                                <h3>
                                    <strong>EXPORT TRANSACTIONS</strong>
                                </h3>
                            </button>
                            </center>
                            </body>  
            </div>
  )
        }}


        export default ReportPage;
