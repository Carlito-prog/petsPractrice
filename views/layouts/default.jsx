import React, { Component } from 'react'

export default class DefaultLayout extends Component {

    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="../styles/site.css?refresh123=766" />
                    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet"/>
                    <script type="text/javascript"  src="../js/custom.js" ></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                    
                </body>
            </html>
        )
    }
}
