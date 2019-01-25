import React from 'react';
import Head from 'next/head';

export default class login extends React.Component{

    // <!-- show any messages that come back with authentication -->
    // <% if (message.length > 0) { %>
    //     <div class="alert alert-danger">{ message}</div>
    // <% } %>

    render(){
        return(
            <React.Fragment>
                <Head>
                    <title>Alog Authentication</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                </Head>
                <div class="jelly">
                    <header>
                        <p class="logs"><a id="pa" href="/">Go home</a></p>
                    </header>
                <div class="container">

                <div class="col-sm-6 col-sm-offset-3">

                    <h1>Alog Login</h1>

                    

                 
                    <form action="/login" method="post" class="logs">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" name="email" placeholder="me@me.com"/>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="password" placeholder="password"/>
                        </div>

                        <button type="submit" class="btn btn-warning btn-lg">Login</button>
                        <div class="text">Try using me@me.com and Password of password</div>
                    </form>

                    <hr/>

                    <p id="pa" >Need an account? <a href="/signup">Signup</a></p>
                    

                </div>

                </div>
                </div>
            </React.Fragment>

        );
    }
}


